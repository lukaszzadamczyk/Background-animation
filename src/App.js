import React from "react";
import "./App.css";
import AnimationBg from "./AnimationBg";

function App() {
  return (
    <div className="App">
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.35"
        ratioY="0.33"
      />
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.15"
        ratioY="0.2"
      />
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.1"
        ratioY="0.4"
      />
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.3"
        ratioY="0.25"
      />
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.4"
        ratioY="0.2"
      />
      <AnimationBg
        className="animationBg fly-cloud"
        src="/img/clouds-37095_640.png"
        ratioX="0.35"
        ratioY="0.15"
      />
      <AnimationBg
        className="animationBg fly-balloon"
        src="/img/hot-air-balloon-2131046_640.png"
        ratioX="0.07"
        ratioY="0.33"
      />
    </div>
  );
}

export default App;
