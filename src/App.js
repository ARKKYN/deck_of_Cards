import React, {memo} from "react"
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { deckArray } from './config/config';


function App() {
  const [cards, setCards] = useState([...deckArray]);
  const [cardsToBeRenderd, setCardsToBeRerendered] = useState([]);

  const renderFiveCards = () => {
      var element = [];
      let temp = [...cards];
      let loops = 5;

      if(cards.length == 0) {
        alert("No Cards to Pick");
        return;
      }

      if(temp.length < 5) {
        loops = temp.length;
      }

      for (let i = 0; i < loops; i++) {
        let index =  Math.floor(Math.random()*temp.length);
        element.push(temp[index]);
        temp.splice(index, 1)
      }

      const renderCards =  element.map(x => {
        return <Card number={x.card}  symbol={x.suits} key={x.index}/>
      });


      setCards(temp);
      setCardsToBeRerendered([cardsToBeRenderd,...renderCards]);
  }

  const shuffleCards = () => {
    renderFiveCards();
  }



  return (<>
   <div className="cards-container">
      {cardsToBeRenderd}
    </div>
    <button onClick={shuffleCards}>Shuffle Cards</button>
    </>
  );
}

export default memo(App);
