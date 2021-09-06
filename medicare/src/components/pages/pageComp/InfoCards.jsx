import React from "react";

const InfoCards = () => {
  return (
    <div className="infoCardcontainer">
      <div className="infoCard">
        <div className="cardLeft">
          <h1 className="subheading-one">Global Pharmacy</h1>
          <p className="card-text">
            India is world's largest producer of pharmaceuticals, which includes medicines and vaccines. India makes upto 60% of
             world's supply that is used by both developed and developing countries. Due to its role as a producer of medical products,
             India is termed as 'pharmacy of the world'.
          </p>
        </div>
        <div className="cardRight">
          <img src="/img/div1.jpg" alt="" />
        </div>
      </div>
      <div className="infoCard inverted">
        <div className="invertedcardLeft" >
          <img src="/img/div2.jpg" alt="" />
        </div>
        <div className="invertedcardRight">
          <h1 className="subheading-one">Why India?</h1>
          <p className="card-text">
            Over the years, India has grown to become a top-notch destination for medical value travel because it scores high over a
            range of factors that determines the overall quality of care. Imagine a complex surgical procedure being done in a
            world class global hospital by acclaimed medical specialists at a fifth to tenth of what it normally takes! That’s India.
            From quality of therapy, range of procedural and treatment options, infrastructure and skilled manpower to perform any medical
            procedure with zero waiting time, the list of benefits of travelling for medical treatment in India are many.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
