import styled from "styled-components";
import { colors } from "../../config/colors";
import breakpoints from "../../config/breakpoints";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${colors.BabyBlue} 30%,
    ${colors.white} 30%
  );
  z-index: 1;
  @media (max-width: ${breakpoints.md}) {
    background: linear-gradient(
      to right,
      ${colors.BabyBlue} 40%,
      ${colors.white} 30%
    );
  }
  @media (max-width: ${breakpoints.xxl}) {
    background: linear-gradient(
      to right,
      ${colors.BabyBlue} 53%,
      ${colors.white} 53%
    );
  }
  @media (max-width: ${breakpoints.xs}) {
    background: linear-gradient(
      to right,
      rgb(166, 188, 250) 53%,
      rgb(255, 255, 255) 53%
    );
  }
`;
