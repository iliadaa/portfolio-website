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
`;
