import React from 'react'

// stylesheet
import "../sass/SearchResult.scss";

// assets
import Logo from "../assets/Logo.svg";

// icons
import { CiSearch } from "react-icons/ci";

// React Link
import { Link } from "react-router-dom";

// dashboard components
import Sidebar from './Dashboard/Sidebar';
import MainBar from './Dashboard/MainBar';

const SearchResult = () => {
  return (
    <div className='search'>
        <div className="search_page_header">
            <div className="first"></div>
            <div className="header_search">
                <input type="text" placeholder='Search'/>
                <CiSearch className='search_icon'/>
            </div>
            <div className="header_logo">
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
        </div>
        <div className="search_top_text">
            <h1>Search Results</h1>
        </div>
        <div className="search_dashboard">
            <Sidebar/>
            <MainBar/>
        </div>
    </div>
  )
}

export default SearchResult