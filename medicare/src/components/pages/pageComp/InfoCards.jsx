import React from "react";

const InfoCards = () => {
  return (
    <div>
      <div class="infoCard">
        <div class="cardLeft">
          <h2 class="subheading-two">Medical Treatment</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
        </div>
        <div class="cardRight">
          <img src="/img/test.jpg" alt="" style={{ height:"340px" }} />
        </div>
      </div>
      <div class="infoCard inverted">
        <div class="invertedcardLeft" >
          <img src="/img/test.jpg" alt="" style={{ height:"340px" }} />
        </div>
        <div class="invertedcardRight">
          <h2 class="subheading-two">Medical Treatment</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
