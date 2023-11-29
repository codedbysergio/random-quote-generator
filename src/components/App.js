import React, { useState } from 'react';
import '../css/App.css';
import QuoteText from './QuoteText';
import Author from './Author';
import Credit from './Credit';
import Buttons from './Buttons';
import colorsJSON from '../data/colors.json';
import quotesJSON from '../data/quotes.json';


export const QuoteContext = React.createContext()

function App() {
  
  const [quotes] = useState(shuffledQuotes)
  const [colors] = useState(shuffledColors)
  const [quoteNumber, setQuoteNumber] = useState(0)
  const [colorNumber, setColorNumber] = useState(0)

  const quoteContextValue = {
    handleNextQuote,
    handleNextColor
  }

  function handleNextQuote() {
    let nextQuote = quoteNumber
    if (nextQuote === quotes.length - 1) {
      nextQuote = 0;
    }
    else {
      nextQuote++
    }
    setQuoteNumber(nextQuote)
  }

  function handleNextColor() {
    let nextColor = colorNumber
    if (nextColor === colors.length - 1) {
      nextColor = 0;
    }
    else {
      nextColor++
    }
    setColorNumber(nextColor)
    document.querySelector(":root").style.setProperty("--maincolor", colors[colorNumber]);
  }

  return (
    <QuoteContext.Provider value={quoteContextValue}>
      <div className="App" id='wrapper'>
        <div className='machine-container' id='quote-box'>
          <QuoteText quotes={quotes} number={quoteNumber} id='text'/>  
          <Author quotes={quotes} number={quoteNumber}/>
          <Buttons quotes={quotes} number={quoteNumber}/>
        </div>
        <Credit className='credit-container' />
      </div>
    </QuoteContext.Provider>
  );
}


const defaultColors = [];
for (var item in colorsJSON)
  defaultColors.push(colorsJSON[item]["color"]);

// const quotes = [];
// for (var quote in quotesJSON)
//   quotes.push([quotesJSON[quote]["author"], quotesJSON[quote]["line"]]);




function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  //While there remains elements to shuffle
  while (currentIndex !== 0) {
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const shuffledQuotes = shuffle(quotesJSON);
const shuffledColors = shuffle(defaultColors);

export default App;
