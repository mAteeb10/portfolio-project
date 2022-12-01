/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/1.png",
      gLink: "https://github.com/mAteeb10",
      lLink: "https://www.linkedin.com/in/muhammad-ateeb-5b084221a",
      netlify: "https://sparkly-empanada-4eba5e.netlify.app/",
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://github.com/mAteeb10",
      lLink: "https://www.linkedin.com/in/muhammad-ateeb-5b084221a",
      netlify: "https://fascinating-bavarois-0047ad.netlify.app/",
    },

  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/mAteeb10"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <a href={project.netlify} target="_blank" rel="noreferrer">
                  <img src={project.img} alt={project.title} />
                </a>
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
