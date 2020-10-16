import React, { Component } from "react";

class AnimationBg extends Component {
  state = {
    posX: 0,
    posY: 0,
  };

  componentDidMount() {
    document.addEventListener("mousemove", (event) => this.setPosition(event));
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", (event) =>
      this.setPosition(event)
    );
  }

  setPosition(event) {
    const { clientX, clientY } = event;
    const { ratioX, ratioY } = this.props;
    const centralX = window.innerWidth / 2;
    const centralY = window.innerHeight / 2;

    const posX = clientX - centralX;
    const posY = clientY - centralY;

    this.setState({
      posX: posX * -ratioX,
      posY: posY * -ratioY,
    });
  }
  render() {
    const { posX, posY } = this.state;
    const { className, src } = this.props;
    return (
      <div className="animationBalloon">
        <img
          src={src}
          alt=""
          className={className}
          style={{ transform: `translate(${posX}px,${posY}px)` }}
        />
      </div>
    );
  }
}

export default AnimationBg;
