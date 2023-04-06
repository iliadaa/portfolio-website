import React from "react";
import Navbar from "../components/header/NavBar";
import PlusIcon from "../assets/PlusContent";
import { BackgroundContainer } from "../components/background/Background.style";
import GenericCard from "../components/genericCard/GenericCard";
import Ellipse from "../assets/Ellipse";
function Home() {
  return (
    <>
      <BackgroundContainer>
        <Navbar />
        <PlusIcon />
        <PlusIcon left="38%" top="14%" leftMd="55%" topMd="15%" />
        <GenericCard />
        <Ellipse />
      </BackgroundContainer>
    </>
  );
}

export default Home;
