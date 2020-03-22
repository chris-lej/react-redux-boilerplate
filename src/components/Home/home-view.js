import React from "react";
import WorldMap from "../WorldMap"
import SearchBar from "../SearchBar";


export const HomeView = () => (
  <div className="container text-center">
    <SearchBar />
    <WorldMap />
  </div>
);

export default HomeView;
