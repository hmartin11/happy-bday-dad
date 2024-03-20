import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

import IMG_4215 from './IMG_4215.jpeg';
import buns from './buns.jpeg';
import cabin from './cabin.jpeg';
import ski from './ski.jpeg';
import xmas from './xmas.jpeg';
//import IMG_4316 from './IMG_4316.JPG';
import Pride from "react-canvas-confetti/dist/presets/fireworks";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import dadwhis from './dadwhis.jpeg'
import falls from './falls.jpeg'
import lil from './lil2.jpg'
import skiing from './skiing.jpeg'
import cat2 from './cat2.jpeg'


function confetti_display() {
  return <Fireworks autorun={{speed:3, duration:100}}/>;

};

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  //const [yesPressed, setYesPressed] = useState(false);
  const [yesPressed, setYesPressed] = useState(0);
  const [imageSrc, setImageSrc] = useState(cat2);
  //const [finalClick] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  //const yesCount = yesPressed;
  //const [isVisible, setIsVisible] = useState(false);
  const [yesBunny, setBunny] = useState(0);
  let text = 'some bunny loves you';
  const text_input = [
    'Dear Dad, Happy Birthday', 'I love you so much', 'I hope you have the best day ever!!'
  ];
  let input_text = text_input[yesPressed];
  // const text2 = [];
  // let text_2 = text2[yesBunny];

  const handleSetBunny = () => {
    setBunny(yesBunny +1);


  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const handleYesClick = () => {
    setYesPressed(yesPressed + 1);
    if (yesPressed === 0) {
      setImageSrc('https://gifdb.com/images/high/happy-birthday-party-cat-k8t0f0stntna5sx0.gif');

    } 
    if (yesPressed === 1) {
      setImageSrc("https://gifdb.com/images/high/happy-birthday-cat-wmbsmus7h0mkmyiq.gif");

    } 
    if (yesPressed === 2) {
      setImageSrc("https://giphy.com/gifs/party-celebration-birthday-ZdIzhi10ZlKhU8EpDh");
    }
    // if (yesPressed === 3) {
    //   setImageSrc('https://gifdb.com/images/high/cute-cartoon-bunny-love-xnmn7vwvvyafe0vk.gif');

    // }
    // if (yesPressed === 4) {
    //   setImageSrc('https://tenor.com/bv5XY.gif');
    // }
  };

  

    
  
  const getYesButtonText = () => {
    const phrases = [
      "Click me",
      "Next", 
      "next"
    ];

    return phrases[Math.min(yesPressed, phrases.length - 1)];
  };

  if(yesPressed ==3){
    return ( 
      <div className="grid grid-cols-4 gap-1 place-items-center justify-items-center h-56">
       {/* < Fireworks autorun={{speed:3, duration:100}}/> */}
       <Pride autorun={{ speed: 2, duration: 10000}} />
          <div>
            <img className="object-contain h-120 w-80" src = {dadwhis}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {skiing}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {falls}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {lil}/>
          </div>
          <div className = "ml-10 mr-10 col-start-1 col-end-4">

          
          <blockquote>
            <p className=" ml-10 px-4 py-2 text-lg font-medium text-blue-600">
              Happy Birthday Dad! I love you so much! 

            </p>
            <p className= 'ml-10 px-4 py-2 text-lg font-medium text-blue-600'>
              Thank you for being the best dad in the whole world! I hope you have the best day ever! 
              I am so can't wait to make more special memories with you at our cabin and travelling.
              You mean the world to me and I am so thankful for our close relationship♥️
            </p>
          </blockquote>
          </div>
      
      
      </div>
      
    );
  }
  

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {
      // yesPressed === 3 ? (
      //   <>
      //     <Pride autorun={{ speed: 2, duration: 10000}} />
      //     <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      //     <button 
      //     className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
      //     onClick={handleSetBunny}>I hope you have the best birthday ever! Thank you for being the best dad in the world</button>
          
      //     <div className="my-4 text-4xl font-bold"> {text_2} ;))</div>
          
      //   </>
      // ) :
      (
        <>
          <img
            className="h-[200px]"
            src={imageSrc}
          />
          <h1 className="my-4 text-4xl">{input_text}</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              {yesPressed === 0 ? "Next" : getYesButtonText()}
            </button>
            {/* <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button> */}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href=""
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️ By Hannah
      </span>
    </a>
  );
};


