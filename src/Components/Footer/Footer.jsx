import React from "react";
import { Link } from "react-router-dom";
import fbimg from "../../Assets/fbimg.png";
import ximg from "../../Assets/ximg.png";
import instaimg from "../../Assets/instaimg.png";
import './Footer.css'

const Footer = () => {
  const social = [fbimg, ximg, instaimg];

  return (
    <footer>
      <h1>AniBuzz</h1>

      <div className="links">
        <h3>Useful Links</h3>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/register">Register</Link>
          <Link to="/trending">Trending</Link>
        </div>
      </div>

      <div className="social">
        {social.map((item) => {
          return <img src={item} alt=""></img>;
        })}
      </div>
    </footer>
  );
};

export default Footer;
