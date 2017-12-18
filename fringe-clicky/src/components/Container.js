import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CharacterContainer from "./CharacterContainer";
import CharacterCard from "./CharacterCard";
import Footer from "./Footer";

class Container extends Component {

  state = {
    currentScore: 0,
    bestScore: 0,
    uniqueClick: true,
    cardsClicked: []
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <CharacterCard />
      </div>
    )
  }
}

export default Container;
