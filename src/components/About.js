import React from 'react';
import ChrisProfile from '../images/chris_profile.png'
import { Jumbotron } from "reactstrap";

const About = () => (
  <div className="container-fluid text-center">
    <h3>About Chris Lejeune</h3>
    <div className="row text-center">
      <div className="w-100">
        <img src={ChrisProfile} width={"100px" } alt="chris profile"/>
      </div>
    </div>
    <div className="row">
      <Jumbotron className="p-2 m-4">
        I am a JavaScript Software Engineer with 3 years of experience using ReactJS, Redux, Jest and Webpack.
        I like to create positive user experiences through clean code and I am always on the lookout for new ways to make software development
        more interesting with shorter time to market.
      </Jumbotron>
    </div>
  </div>
);

export default About;
