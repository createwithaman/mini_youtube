import React, { useEffect, useState } from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import userProfile from "../../assets/user_profile.jpg"
import jake from "../../assets/jack.png"
import moment from 'moment'

import { API_KEY ,value_converter } from "../../data"

const PlayVideo = ({videoId}) => {

  const [apiData,setApiData]=useState(null)

  const fetchVideoData = async ()=>{
    //fetching video data

    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    await fetch(videoDetailsUrl).then((response)=>response.json()).then((data)=>setApiData(data.items[0]))
  }

  useEffect(()=>{
    fetchVideoData()
  },[])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Hear"}</h3>
        <div className="play-video-info">
          <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
          </div>
          </div>
          <hr />
          <div className="publisher">
            <img src={jake} alt="" />
            <div>
              <p>Create With Aman</p>
              <span>1M Subscribers  </span>
            </div>
            <button>Subscribe</button>
          </div>
        

        <div className="vid-desc">
          <p>Channel that make learning</p>
          <p>Channel that make learning Channel that make learning</p>
          <hr />
          <h4>130 Comments</h4>
          <div className="comment">
            <img src={userProfile} alt="" />
            <div>

              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit autem itaque quod officia maxime provident natus deserunt quam nobis, omnis nemo, atque ratione nisi aliquam. Ad, earum voluptatem. Neque!</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={userProfile} alt="" />
            <div>

              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit autem itaque quod officia maxime provident natus deserunt quam nobis, omnis nemo, atque ratione nisi aliquam. Ad, earum voluptatem. Neque!</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={userProfile} alt="" />
            <div>

              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit autem itaque quod officia maxime provident natus deserunt quam nobis, omnis nemo, atque ratione nisi aliquam. Ad, earum voluptatem. Neque!</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={userProfile} alt="" />
            <div>

              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit autem itaque quod officia maxime provident natus deserunt quam nobis, omnis nemo, atque ratione nisi aliquam. Ad, earum voluptatem. Neque!</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={userProfile} alt="" />
            <div>

              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit autem itaque quod officia maxime provident natus deserunt quam nobis, omnis nemo, atque ratione nisi aliquam. Ad, earum voluptatem. Neque!</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default PlayVideo