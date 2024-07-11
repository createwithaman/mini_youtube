import React, { useEffect, useState } from 'react'
import "./Recomanded.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"

import { API_KEY ,value_converter } from "../../data"
import { Link } from 'react-router-dom'


const Recomanded = ({categoryId}) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        try {
            const response = await fetch(relatedVideoUrl);
            const data = await response.json();
            if (data && data.items) {
                setApiData(data.items);
            } else {
                console.error('Invalid API response', data);
            }
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='recommended'>
            {apiData.map((item) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <div className="width-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};



export default Recomanded