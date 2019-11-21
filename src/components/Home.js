import React from 'react';
import APIPost from "./APIPosts";
import Articles from './Articles';


const Home = () => (
  <div className="container-fluid justify-content-center">
    <Articles />
    <APIPost />
  </div>
);

export default Home;
