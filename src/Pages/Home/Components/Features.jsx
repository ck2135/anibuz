import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Features = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let data = [
    {
      h2: "Interactive Character Database",
      p: "Allow users to explore and search for anime characters with detailed profiles, including their abilities, relationships, and appearances.",
    },
    {
      h2: "Personalized Watchlists",
      p: "Enable users to create and manage personalized watchlists, receive recommendations based on their preferences, and track their progress.",
    },
    {
      h2: "Community Forums",
      p: "Implement discussion forums for users to engage in conversations about their favorite anime, share recommendations, and connect with like-minded fans.",
    },
    {
      h2: "User Reviews and Ratings",
      p: "Provide a platform for users to write reviews and rate anime series and episodes, helping others make informed decisions on what to watch.",
    },
    {
      h2: "Release Schedules and Reminders",
      p: "Offer a comprehensive calendar with release schedules for upcoming episodes, seasons, and new anime, allowing users to set reminders for their favorite shows.",
    },
    {
      h2: "Anime News Hub",
      p: "Incorporate a dedicated section for anime news, updates, and industry announcements to keep users informed about the latest happenings in the anime world.",
    },
    {
      h2: "Customizable Profiles",
      p: "Allow users to personalize their profiles with favorite genres, characters, and badges earned through engagement, fostering a sense of community.",
    },
    {
      h2: "Collaborative Playlists",
      p: "Enable users to create and share playlists of their favorite anime openings, endings, or soundtracks, fostering a collaborative and musical community experience.",
    },
    {
      h2: "Manga Integration",
      p: "Expand the website's offerings by incorporating a section for manga, allowing users to discover and discuss both anime and manga adaptations.",
    },
  ];

  return (
    <>
      <h1 className="heading">FEATURES</h1>
      <section className="features">
        <Slider {...settings}>
          {data.map((items) => (
            <div key={items} className="list">
              <h2>{items.h2}</h2>
              <p>{items.p}</p>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Features;
