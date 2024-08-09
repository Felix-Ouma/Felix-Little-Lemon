import React from "react";
import "./About.css";


const About = () => {
  return (
    <div className="about">
      <h2>Subscribe to our newsletter</h2>
      <div class="content">
        <form class="subscription">
          <input class="add-email" type="email" placeholder="subscribe@me.now" />
          <button class="submit-email" type="button">
            <span class="before-submit">Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
