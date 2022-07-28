import React from "react";
import "./About.css";
import DP from "./OwnDP.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
    return ( <
        div className = "aboutMain" >
        <
        div className = "child" >
        <
        div className = "childleft" >
        <
        img src = { DP }
        width = "320px"
        alt = "Profile" / >
        <
        /div> <
        div className = "childright" >
        <
        div className = "content" >
        <
        h1 > Atul Verma < /h1> <
        h3 > Fullstack Developer and Sport Programmer < /h3> <
        p >
        I am currently pursuing my Bachelors in Mechanical Engineering from Institute of Engineering and Technology.I am an enthusiast Sport Programmer and Web developer with knowledge of technology like HTML, CSS, JavaScript, React.js, Node.js, firebase etc. <
        /p> <
        div className = "socialAbout" >
        <
        a href = "https://github.com/Akvcoder"
        target = "_blank"
        rel = "noreferrer" >
        <
        FaGithubSquare / > Github <
        /a> <
        a href = "https://www.linkedin.com/in/atul-kumar-verma-1514121a3/"
        target = "_blank"
        rel = "noreferrer" >
        <
        BsLinkedin / > LinkedIn <
        /a> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default About;