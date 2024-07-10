import React from 'react'
import "./Navbar.css"
import menuIcon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more from "../../assets/more.png"
import notification from "../../assets/notification.png"
import profile from "../../assets/jack.png"
import { Link } from 'react-router-dom'

function Navbar({setSidebar}) {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>{setSidebar(prev=>prev===false?true:false)}} src={menuIcon} alt="menuIcon" />
        <Link to='/'><img className='logo' src={logo} alt="logo" />
        </Link>
        </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          
        <input type="text" placeholder='Search'/>
        <img src={searchIcon} alt="searchIcon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        <img className='user-icon' src={profile} alt="profile" />
      </div>


    </nav>
  )
}

export default Navbar