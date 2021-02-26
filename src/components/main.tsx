import React from "react";
import Header from "./Header/Header";
import Hello from "./Hello/Hello";
import Skill from "./Skill/Skill";
import Top from "./topButton/Top";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Project from "./Project/Project";
import { greeting, skills, projects, contactInfo } from "../portfolio";

function Main() {
  return (
    <div className="root">
      <Header />
      {greeting.view && <Hello />}
      {skills.view && <Skill />}
      {projects.view && <Project />}
      {contactInfo.view && <Contact />}
      <Footer />
      <Top />
    </div>
  );
}
export default Main;
