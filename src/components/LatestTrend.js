import React, { useContext, useState } from "react";

// stylesheet
import "../sass/LatestTrend.scss";

// assets
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";

// context
import { AllContext } from "../AllContext";

const LatestTrend = () => {
  // context imported from AllContext
  const { search } = useContext(AllContext);

  // state
  const [trendInfo, setTrendInfo] = useState([
    {
      id: 1,
      image: image1,
      content: "Shirt with puffed sleeves",
    },
    {
      id: 2,
      image: image2,
      content: "Linen jumpsuit",
    },
    {
      id: 3,
      image: image3,
      content: "White formal suit",
    },
    {
      id: 4,
      image: image4,
      content: "Pattern dresses",
    },
    {
      id: 5,
      image: image5,
      content: "Leather shirt dress",
    },
  ]);
  return (
    <>
      {search ? (
        <div className="result_box">
          <div className="latest_trends">
            <p>Latest Trends</p>
            <div className="trends">
              {trendInfo.map((info) => (
                <div className="trend_card" key={info.id}>
                  <div className="trends_image">
                    <img src={info.image} alt="" />
                  </div>
                  <div className="trends_descr">
                    <span>{info.content}</span>
                  </div>
                </div>
              ))}
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
      ) : null}
    </>
  );
};

export default LatestTrend;
