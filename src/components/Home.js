import React from 'react'

// stylesheet
import '../sass/Home.css';

// assets
import Logo from "../assets/Logo.svg";

// icons
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className='home'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="search">
            <div className="search_box">
                <input type="text" placeholder='Search'/>
                <CiSearch className='search_icon'/>
            </div>
        </div>
    </div>
  )
}

export default Home