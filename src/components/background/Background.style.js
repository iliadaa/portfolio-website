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
    ${colors.LighBColor} 0%,
    ${colors.DarkBColor} 100%
  );
  @media (max-width: ${breakpoints.md}) {
    background: linear-gradient(
      to right,
      ${colors.LighBColor} 0%,
      ${colors.DarkBColor} 100%
    );
  }
  @media (max-width: ${breakpoints.xxl}) {
    background: linear-gradient(
      to right,
      ${colors.LighBColor} 0%,
      ${colors.DarkBColor} 100%
    );
  }
  @media (max-width: ${breakpoints.xs}) {
    background: linear-gradient(
      to right,
      ${colors.LighBColor} 0%,
      ${colors.DarkBColor} 100%
    );
  }
`;
