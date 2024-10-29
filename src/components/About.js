import React from "react";
import user from "../data/user.js"
import Links from "./Links.jsx"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />


      {/* function Links() {
        return (
          <div>
          <h3>Links</h3>
          <a href={user.links.github} />
          <a href={user.links.linkedin} />
          </div>
        )
      } */}


      </div>
  );
}

export default About;
