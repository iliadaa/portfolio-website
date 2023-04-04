import React from "react";
import Header from "../components/header/NavBar";
import PlusIcon from "../assets/PlusContent";
import { BackgroundContainer } from "../components/background/Background.style";
import GenericCard from "../components/genericCard/GenericCard";
import Ellipse from "../assets/Ellipse";
import ProgramCards from "../components/smallCard/ProgramCards";

function Home() {
  return (
    <>
      <Header />
      <BackgroundContainer />
      <PlusIcon />
      <GenericCard />
      <Ellipse />

      <ProgramCards />
      <ProgramCards left="700px" />
      <ProgramCards left="900px" />
      <ProgramCards left="1100px" />
    </>
  );
}

export default Home;
