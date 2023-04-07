import styled from "styled-components";
import { colors } from "../../config/colors";
import { Grid } from "@mui/material";
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 90px;
  background: #a6bcfa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  margin: auto;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 20px;
  color: ${colors.white};
  font-style: "SemiBold";
  font-family: Roboto, sans-serif;
`;

export const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: 10px solid transparent;
  background-size: cover;
  background-position: center center;
  margin-top: -27.5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -11px;
    left: -10px;
    right: -10px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(
      to bottom,
      rgb(95 136 250 / 0%) 50%,
      rgb(255 255 255) 50%
    );
    z-index: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
`;

export const GridCard = styled(Grid)`
  margin: auto;
`;

export const GridItem = styled(Grid)``;