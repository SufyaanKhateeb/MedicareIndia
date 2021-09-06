import React from "react";

const InfoCards = () => {
  return (
    <div className="infoCardcontainer">
      <div className="infoCard">
        <div className="cardLeft">
          <h2 className="subheading-two">Medical Treatment</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
        </div>
        <div className="cardRight">
          <img src="/img/test.jpg" alt="" />
        </div>
      </div>
      <div className="infoCard inverted">
        <div className="invertedcardLeft" >
          <img src="/img/test.jpg" alt="" />
        </div>
        <div className="invertedcardRight">
          <h2 className="subheading-two">Medical Treatment</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
