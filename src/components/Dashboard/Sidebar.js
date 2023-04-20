import React, { useState } from "react";

// stylesheet
import "../../sass/Sidebar.scss";

// react icon
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// assets
import star1 from "../../assets/star1.svg";
import star2 from "../../assets/star2.svg";
import star3 from "../../assets/star3.svg";
import star4 from "../../assets/star4.svg";
import star5 from "../../assets/star5.svg";

const Sidebar = () => {
  const [showBrand, setShowBrand] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showRating, setShowRating] = useState(false);

  //   Show brand inner content
  const showBrandContent = () => {
    setShowBrand(!showBrand);
  };

  //   Show price inner content
  const showPriceContent = () => {
    setShowPrice(!showPrice);
  };

  //   Show rating inner content
  const showRatingContent = () => {
    setShowRating(!showRating);
  };
  return (
    <div className="sidebar">
      <div className="brand">
        <div className="brand_header">
          <p>Brand</p>
          {showBrand ? (
            <IoIosArrowUp className="hide_icon" onClick={showBrandContent} />
          ) : (
            <IoIosArrowDown className="hide_icon" onClick={showBrandContent} />
          )}
        </div>
        {showBrand ? (
          <>
            <div className="brand_item">
              <input type="checkbox" name="" id="" />
              <p>Mango</p>
            </div>
            <div className="brand_item">
              <input type="checkbox" name="" id="" />
              <p>H&M</p>
            </div>
          </>
        ) : null}
      </div>
      <div className="brand price_range">
        <div className="brand_header">
          <p>price range</p>
          {showPrice ? (
            <IoIosArrowUp className="hide_icon" onClick={showPriceContent} />
          ) : (
            <IoIosArrowDown className="hide_icon" onClick={showPriceContent} />
          )}
        </div>
        {showPrice ? (
          <>
            <div className="brand_item">
              <input type="checkbox" name="" id="" />
              <p>under 500</p>
            </div>
            <div className="brand_item">
              <input type="checkbox" name="" id="" />
              <p>1000 to 3000</p>
            </div>
          </>
        ) : null}
      </div>
      <div className="brand rating">
        <div className="brand_header">
          <p>rating</p>
          {showRating ? (
            <IoIosArrowUp className="hide_icon" onClick={showRatingContent} />
          ) : (
            <IoIosArrowDown className="hide_icon" onClick={showRatingContent} />
          )}
        </div>
        {showRating ? (
          <div className="rate">
            <div className="brand_item brand_rate">
              <input type="checkbox" name="" id="" />
              <img src={star1} alt="" />
            </div>
            <div className="brand_item brand_rate">
              <input type="checkbox" name="" id="" />
              <img src={star2} alt="" />
            </div>
            <div className="brand_item brand_rate">
              <input type="checkbox" name="" id="" />
              <img src={star3} alt="" />
            </div>
            <div className="brand_item brand_rate">
              <input type="checkbox" name="" id="" />
              <img src={star4} alt="" />
            </div>
            <div className="brand_item brand_rate">
              <input type="checkbox" name="" id="" />
              <img src={star5} alt="" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
