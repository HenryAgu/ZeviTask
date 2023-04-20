import React, { useState } from "react";

// stylesheet
import "../../sass/MainBar.scss";

// assets
import resultImage1 from "../../assets/resultImage1.svg";
import resultImage2 from "../../assets/resultImage2.svg";
import resultImage3 from "../../assets/resultImage3.svg";
import resultImage4 from "../../assets/resultImage4.svg";
import resultImage5 from "../../assets/resultImage5.svg";
import resultImage6 from "../../assets/resultImage6.svg";
import resultImage7 from "../../assets/resultImage7.svg";
import resultImage8 from "../../assets/resultImage8.svg";

import star1 from "../../assets/star1.svg";
import star2 from "../../assets/star2.svg";
import star3 from "../../assets/star3.svg";
import star4 from "../../assets/star4.svg";
import star5 from "../../assets/star5.svg";

import defaultHeart from "../../assets/default.svg";
import heart from "../../assets/heart.svg";

const MainBar = () => {
  const [likeImage,setLikeImage] = useState(defaultHeart)
  const [results, setResults] = useState([
    {
      id: 1,
      image: resultImage1,
      itemName: "Round neck cotton Tee",
      oldPrice: "Rs. 599",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 2,
      image: resultImage3,
      itemName: "High waist trousers",
      oldPrice: "Rs. 999",
      newPrice: "Rs.749",
      rating: star4,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 3,
      image: resultImage5,
      itemName: "High neck pullover",
      oldPrice: "Rs. 899",
      newPrice: "Rs.849",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 4,
      image: resultImage7,
      itemName: "satin jumpsuit",
      oldPrice: "Rs. 650",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 5,
      image: resultImage2,
      itemName: "Round neck cotton Tee",
      oldPrice: "Rs. 599",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 6,
      image: resultImage4,
      itemName: "Round neck cotton Tee",
      oldPrice: "Rs. 599",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 7,
      image: resultImage6,
      itemName: "Round neck cotton Tee",
      oldPrice: "Rs. 599",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },
    {
      id: 8,
      image: resultImage8,
      itemName: "Round neck cotton Tee",
      oldPrice: "Rs. 599",
      newPrice: "Rs.549",
      rating: star5,
      rateValue: "(210)",
      liked: false
    },

  ]);

  // toggle like click
  const handleLike = (id) =>{
      // console.log(id)
      setResults(
         results.map((item) => {
          if(item.id === id){
           return {...item, liked: !item.liked}
          }
          return item
       })
      )
      
  }

  return (
    <div className="main_bar">
      {results.map((result) => (
        <div className="main_bar_card" key={result.id}>
          <div className="like">
            <img src={result.liked? heart : defaultHeart } alt="" onClick={()=> handleLike(result.id)}/>
          </div>
          <img src={result.image} alt="" className="item_img"/>
          <div className="card_text">
            <h5>{result.itemName}</h5>
            <span
              style={{
                textDecoration: "line-through",
                color: "#00000066",
                fontWeight: "300",
                fontSize: "16px",
              }}
            >
              {result.oldPrice}
            </span>
            <span>{result.newPrice}</span>
            <div className="card_rate">
              <img src={result.rating} alt="" />
              <p>{result.rateValue} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainBar;
