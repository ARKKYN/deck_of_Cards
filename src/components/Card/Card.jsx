import React from "react";
import clsx from "clsx";
import "./card.css"
import Diamond from "../../images/Diamond.png";
import Club from "../../images/Club.png";
import Heart from "../../images/Heart.png";
import Spade from "../../images/Spade.png";

function Card({number, symbol}) {
  const hasHeartOrDiamond = symbol === "Heart" ||  symbol ===  "Diamond";

  const cssColor = clsx([hasHeartOrDiamond === true ? "red" : ""] );

  const getImage = () => {
    switch(symbol) {
      case "Diamond":
        return Diamond;
        case "Club":
        return Club;
        case "Heart":
          return Heart;
        case "Spade":
           return Spade;
      default:
        return Diamond;
    }
  }

  return <div className="card">

      <div className={"card-top d-flex " + cssColor}>
      {number}
      </div>


    <div className="image-container">
       <img src={getImage()} className="image" alt={symbol}/>
    </div>

    <div className={"card-bottom d-flex " + cssColor}>
    {number}
    </div>
  </div>
}


export default Card;
