import React, { useContext } from "react";

// stylesheet
import "../sass/Home.css";

// assets
import Logo from "../assets/Logo.svg";

// icons
import { CiSearch } from "react-icons/ci";

// context
import { AllContext } from "../AllContext";
import LatestTrend from "./LatestTrend";

const Home = () => {
  const {setSearch} = useContext(AllContext)

  // Handle Text Change
  const handleSearchChange = (e) => {
    setSearch(true);
  };
  return (
    <div className="home">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="search">
        <div className="search_box">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <CiSearch className="search_icon" />
        </div>
      </div>
      <LatestTrend/>
    </div>
  );
};

export default Home;
