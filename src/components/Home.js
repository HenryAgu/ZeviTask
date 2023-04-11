import React from "react";

// stylesheet
import "../sass/Home.css";

// assets
import Logo from "../assets/Logo.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";

// icons
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="search">
        <div className="search_box">
          <input type="text" placeholder="Search" />
          <CiSearch className="search_icon" />
        </div>
      </div>
      <div className="result_box">
        <div className="latest_trends">
          <p>Latest Trends</p>
          <div className="trends">
            <div className="trend_card">
              <div className="trends_image">
                <img src={image1} alt="" />
              </div>
              <div className="trends_descr">
                <span>Shirt with puffed sleeves</span>
              </div>
            </div>
            <div className="trend_card">
              <div className="trends_image">
                <img src={image2} alt="" />
              </div>
              <div className="trends_descr">
                <span>Linen jumpsuit</span>
              </div>
            </div>
            <div className="trend_card">
              <div className="trends_image">
                <img src={image3} alt="" />
              </div>
              <div className="trends_descr">
                <span>White formal suit</span>
              </div>
            </div>
            <div className="trend_card">
              <div className="trends_image">
                <img src={image4} alt="" />
              </div>
              <div className="trends_descr">
                <span>Pattern dresses</span>
              </div>
            </div>
            <div className="trend_card">
              <div className="trends_image">
                <img src={image5} alt="" />
              </div>
              <div className="trends_descr">
                <span>Leather shirt dress</span>
              </div>
            </div>
          </div>
          <div className="popular">
            <h4>Popular suggestions</h4>
            <span>Striped shirt dress</span>
            <span>Satin shirts</span>
            <span>Denim jumpsuit</span>
            <span>Leather dresses</span>
            <span>Solid tshirts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
