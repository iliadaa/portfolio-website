import React from "react";
import { CardLayout } from "./ProgramCard.style";
import GenericButton from "../genericButton/genericButton/GenericButton";
import { colors } from "../../config/colors";
import image from "../../assets/image/IMG_4224.PNG";
import Ellipse from "../../assets/Ellipse";
function ProgramCards({ left, top }) {
  return (
    <>
      <CardLayout style={{ left, top }}>
        <Ellipse
          width="60px"
          height="60px"
          left="50px"
          top="-30px"
          border="10px solid #FFFFFF;"
          backgroundImage={image}
          background="#D9D9D9"
        />
        <GenericButton name="PhotoShop" color={colors.white} />
      </CardLayout>
    </>
  );
}

export default ProgramCards;
