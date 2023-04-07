import React from "react";
import PlusIcon from "../assets/PlusContent";
import GenericCard from "../components/genericCard/GenericCard";
import Ellipse from "../assets/Ellipse";
import ProgramCards from "../components/smallCard/ProgramCards";
import ps from "../assets/ps.png";
import breakpoints from "../config/breakpoints";
import { GridCard, GridItem } from "../components/smallCard/ProgramCard.style";
function Home() {
  return (
    <>
      <PlusIcon leftXs="-12%" topXs="42%" />
      <PlusIcon left="38%" top="14%" leftMd="55%" topMd="15%" />
      <GenericCard />
      <Ellipse bottomXs="15%" leftXs="50%" />
      <GridCard
        spacing={4}
        container
        justifyContent="center"
        width="100%"
        sx={{
          margin: "auto",
          marginTop: "2%",
          [`@media (max-width: ${breakpoints.lg})`]: {
            display: "none",
          },
        }}
      >
        <GridItem item>
          <ProgramCards labelText="PhotoShop" imageUrl={ps} />
        </GridItem>
        <GridItem item>
          <ProgramCards labelText="Illustrator" imageUrl={ps} />
        </GridItem>
        <GridItem item>
          <ProgramCards labelText="InDesign" imageUrl={ps} />
        </GridItem>
        <GridItem item>
          <ProgramCards labelText="After Effects" imageUrl={ps} />
        </GridItem>
      </GridCard>
    </>
  );
}

export default Home;
