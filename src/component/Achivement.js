import React from "react";

const Achivement = () => {
  const achivementData = [
    {
      number: 123,
      text1: "Projects",
      text2: "Completed",
    },
    {
      number: 456,
      text1: "Our Happy",
      text2: "Clients",
    },
    {
      number: 991,
      text1: "Cup of",
      text2: "Coffe For Us",
    },
    {
      number: 911,
      text1: "November",
      text2: "9",
    },
  ];

  const mappedAchivementData = achivementData.map((item, index) => {
    return (
      <li key={index} className="col-md-3 col-sm-6">
        <span className="number">{item.number}</span>
        <span className="text">
          <span>{item.text1}</span>
          <span>{item.text2}</span>
        </span>
      </li>
    );
  });

  return (
    <section className="achivement">
      <div className="container">
        <ul className="row">{mappedAchivementData}</ul>
      </div>
    </section>
  );
};

export default Achivement;
