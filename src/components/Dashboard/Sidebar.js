import React, { useState } from "react";

// stylesheet
import "../../sass/Sidebar.css";

// react icon
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
      <div className="brand">
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
      <div className="brand">
        <div className="brand_header">
          <p>rating</p>
          {showRating ? (
            <IoIosArrowUp className="hide_icon" onClick={showRatingContent} />
          ) : (
            <IoIosArrowDown className="hide_icon" onClick={showRatingContent} />
          )}
        </div>
        {showRating ? (
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
    </div>
  );
};

export default Sidebar;
