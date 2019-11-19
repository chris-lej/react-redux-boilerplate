import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Home from './components/Home';
import About from "./components/About";

const App = () => (
  <Router>
    <header className="App-header">
      <MainMenu />
    </header>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
