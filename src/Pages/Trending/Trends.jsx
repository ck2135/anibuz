import React, { useState } from "react";
import img1 from "./Assets/img1.jpg";
import img2 from "./Assets/img2 (2).jpg";
import img3 from "./Assets/img3.jpg";
import img4 from "./Assets/img4.jpg";
import img5 from "./Assets/img5.jpg";
import img6 from "./Assets/img6.jpg";
import img7 from "./Assets/img7.jpg";
import img8 from "./Assets/img8.jpg";
import img9 from "./Assets/img9.jpg";
import img10 from "./Assets/img10.jpg";

const Trends = () => {
  let objects = [
    {
      src: img1,
      h3: "Tokyo Revengers",
    },
    {
      src: img2,
      h3: "Naruto",
    },
    {
      src: img3,
      h3: "Demon Slayers",
    },
    {
      src: img4,
      h3: "No Longer Allowed In Another World",
    },
    {
      src: img5,
      h3: "One Piece",
    },
    {
      src: img6,
      h3: "Tokyo Revengers",
    },
    {
      src: img7,
      h3: "Demon Slayers",
    },
    {
      src: img8,
      h3: "Your Name",
    },
    {
      src: img9,
      h3: "Spy X Family",
    },
    {
      src: img10,
      h3: "Dragon Ballz",
    },
  ];

  const [showAll, setShowAll] = useState({
    topAiring: false,
    mostPopular: false,
    mostFavorite: false,
    latestCompleted: false,
  });

  const toggleShowAll = (section) => {
    setShowAll({ ...showAll, [section]: !showAll[section] });
  };

  return (
    <>
      <section className="trends">
        <div className="class1">
          <h2>Top Airing</h2>
          <div className="class2">
            {objects
              .slice(0, showAll.topAiring ? objects.length : 5)
              .map((element, index) => (
                <div key={index} className="class3">
                  <div className="picture">
                    <img src={element.src} alt="" />
                  </div>
                  <div className="title">
                    <h4>{element.h3}</h4>
                  </div>
                </div>
              ))}
            <p onClick={() => toggleShowAll("topAiring")}>
              {showAll.topAiring ? "View Less..." : "View More..."}
            </p>
          </div>
        </div>


        <div className="class1">
          <h2>Most Popular</h2>
          <div className="class2">
            {objects
              .slice(0, showAll.mostPopular ? objects.length : 5)
              .map((element, index) => (
                <div key={index} className="class3">
                  <div className="picture">
                    <img src={element.src} alt="" />
                  </div>
                  <div className="title">
                    <h4>{element.h3}</h4>
                  </div>
                </div>
              ))}
            <p onClick={() => toggleShowAll("mostPopular")}>
              {showAll.mostPopular ? "View Less..." : "View More..."}
            </p>
          </div>
        </div>


        <div className="class1">
          <h2>Most Featured</h2>
          <div className="class2">
            {objects
              .slice(0, showAll.mostFavorite ? objects.length : 5)
              .map((element, index) => (
                <div key={index} className="class3">
                  <div className="picture">
                    <img src={element.src} alt="" />
                  </div>
                  <div className="title">
                    <h4>{element.h3}</h4>
                  </div>
                </div>
              ))}
            <p onClick={() => toggleShowAll("mostFavorite")}>
              {showAll.mostFavorite ? "View Less..." : "View More..."}
            </p>
          </div>
        </div>


        <div className="class1">
          <h2>Latest Completed</h2>
          <div className="class2">
            {objects
              .slice(0, showAll.latestCompleted ? objects.length : 5)
              .map((element, index) => (
                <div key={index} className="class3">
                  <div className="picture">
                    <img src={element.src} alt="" />
                  </div>
                  <div className="title">
                    <h4>{element.h3}</h4>
                  </div>
                </div>
              ))}
            <p onClick={() => toggleShowAll("latestCompleted")}>
              {showAll.latestCompleted ? "View Less..." : "View More..."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trends;
