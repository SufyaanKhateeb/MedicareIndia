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
          <img src="/img/div1.jpg" alt="Pharmacy" />
        </div>
      </div>
      <div className="infoCard inverted">
        <div className="invertedcardLeft">
          <img src="/img/div2.jpg" alt={"India"} />
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
      <div className="infoCard">
        <div className="cardLeft">
          <h1 className="subheading-one">Growth</h1>
          <p className="card-text">
            With its plethora of highly skilled professionals and affordable healthcare, India is on course to become the next premium medical
            tourism destination. An expected growth to US$ 280 billion by 2020 has made stakeholders -- both private and public --
            increasing interested in exploring the latest trends in the industry in order to make a positive impact on their businesses.
            With the government easing the visa process for patients and their families and incredible growth opportunities across different
            segments is sure to propel India as a global hub for the healthcare services in the coming years.
          </p>
        </div>
        <div className="cardRight">
          <img src="/img/div3.jpg" alt='Growth Image' />
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
