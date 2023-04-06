import React from "react";
import Navbar from "../components/header/NavBar";
import PlusIcon from "../assets/PlusContent";
import { BackgroundContainer } from "../components/background/Background.style";
import GenericCard from "../components/genericCard/GenericCard";

function Home() {
  return (
    <>
      <BackgroundContainer>
        <Navbar />
        <PlusIcon />
        <GenericCard />
      </BackgroundContainer>
    </>
  );
}

export default Home;
