import React from "react";
import {
  CardContainer,
  Image,
  Label,
  ImageContainer,
} from "./ProgramCard.style";

function ProgramCards({ imageUrl, labelText }) {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image src={imageUrl} />
        </ImageContainer>
        <Label>{labelText}</Label>
      </CardContainer>
    </>
  );
}

export default ProgramCards;
