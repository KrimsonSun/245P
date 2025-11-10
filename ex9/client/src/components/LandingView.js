import React from 'react';
import Main from "./Main.js";
import { MAIN_DATA } from "./data.js";
import WeatherWidget from"./WeatherWidget.js";

function LandingView() {
  return (
    
    // This view just renders the Main component
    // with the first piece of data.
    <>
    <Main content={MAIN_DATA[0].content} />
    <WeatherWidget />
    </>

    //Ghost label
    //It's NOT allowed to return two elements.
  );
}

export default LandingView;