import React from "react";
import {
  CardLayout,
  ImageProfile,
  CardContent,
  H2,
  ImageContainer,
  StyledParagraph,
  ButtonContainer,
} from "./Card.style";
import imageProfile from "../../assets/image/IMG_4224.PNG";
import GenericButton from "../genericButton/genericButton/GenericButton";
import { colors } from "../../config/colors";
import { BsArrowRight } from "react-icons/bs";
function GenericCard() {
  return (
    <>
      <CardLayout>
        <ImageContainer>
          <ImageProfile src={imageProfile} />
        </ImageContainer>
        <CardContent>
          <H2>I’m Iliada Arapi</H2>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut mi
            leo. Sed vestibulum, tortor eu pharetra tincidunt, lacus arcu
            pellentesque augue, vel molestie lectus nisi id ipsum.
          </StyledParagraph>
          <ButtonContainer>
            <GenericButton
              name={"See Projects"}
              icon={<BsArrowRight size={25} />}
              buttonHeight="54px"
              buttonWidth="140px"
              borderRadius="20px"
              fontFamily="Roboto"
              fontStyle="normal"
              fontWeight=" 600"
              fontSize="15px"
              lineHeight="22px"
              backgroundColor={colors.blue}
              color={colors.white}
              cursor="pointer"
            />
            <GenericButton
              name="Download Resume"
              buttonHeight="54px"
              buttonWidth="140px"
              borderRadius="20px"
              fontFamily="Roboto"
              fontStyle="normal"
              fontWeight=" 600"
              fontSize="15px"
              lineHeight="22px"
              color={colors.cornflowerBlue}
              cursor="pointer"
            />
          </ButtonContainer>
        </CardContent>
      </CardLayout>
    </>
  );
}

export default GenericCard;
