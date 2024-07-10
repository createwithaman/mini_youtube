import React from 'react'
import "./Sidebar.css"
import homeImage from "../../assets/home.png"
import gameIcon from "../../assets/game_icon.png"
import autoMobile from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"

function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortCut-links">
            <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={homeImage} alt="homeImage" />
                <p>Home</p>
            </div>
            <div className={`side-links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={gameIcon} alt="homeImage" />
                <p>Gaming</p>
            </div>
            <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={autoMobile} alt="homeImage" />
                <p>Auto Mobiles</p>
            </div>
            <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="homeImage" />
                <p>Sports</p>
            </div>
            <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="homeImage" />
                <p>Entertainment</p>
            </div>
            <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="homeImage" />
                <p>Technology</p>
            </div>
            <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="homeImage" />
                <p>Music</p>
            </div>
            <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="homeImage" />
                <p>Blogs</p>
            </div>
            <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="homeImage" />
                <p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-links">
                <img src={jack} alt="" />
                <p>PewDiepie</p>
            </div>
            <div className="side-links">
                <img src={simon} alt="" />
                <p>Tom</p>
            </div>
            <div className="side-links">
                <img src={tom} alt="" />
                <p>jerry</p>
            </div>
            <div className="side-links">
                <img src={megan} alt="" />
                <p>megan</p>
            </div>
            <div className="side-links">
                <img src={cameron} alt="" />
                <p>abc</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar