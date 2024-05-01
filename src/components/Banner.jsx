/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hey, I'm Muhammad Ateeb</h6>
            <h3>A 7th Sememster Student.</h3>
            <p>
            I enjoy learning new computer skills and sharing them with others. Participating in hackathons and other knowledgeable tech events is how I gain expertise in the field, and project management is one of my responsibility in my team.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
