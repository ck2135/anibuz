import React, { useState } from "react";
import uparrowimg from '../../../Assets/up-arrow.png'

const Frequentqa = () => {
  const data = [
    {
      question: "Question 1?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
    {
      question: "Question 2?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
    {
      question: "Question 3?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
    {
      question: "Question 4?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
    {
      question: "Question 5?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
    {
      question: "Question 6?",
      Answer:
        "Allow users to explore and search for anime characters with detailed profiles",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleClick = (i) => {
   

if (selected ===i){
  return setSelected(null);
}

    setSelected(i);
  };

  return (
    <>
      <h1 className="heading">FAQ's</h1>

      <section className="faq">
        <div className="items">
          {data.map((item, i) => {
            return (
              <div
                className="wrapper"
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
              >
                <div className="question">
                  <h3>{item.question}</h3>
                  <img
                    src={uparrowimg}
                    alt="arrow" className={selected===i ? 'reverse':""}
                  ></img>
                </div>

                <div className={selected===i ? 'Answer2':'Answer1'}>
                  <p>{item.Answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Frequentqa;


