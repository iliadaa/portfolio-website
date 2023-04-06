import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
export const CardLayout = styled.div`
  position: absolute;
  width: 161px;
  height: 91px;
  margin: auto;
  margin-left: 32%;
  margin-top: 2%;
  background: #a6bcfa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  z-index: 1;
  @media (max-width: ${breakpoints.xxl}) {
    /* left: 350px;
    top: 720px; */
  }
  @media (max-width: ${breakpoints.xxxl}) {
    /* top: 740px; */
  }
`;

export const CardLabel = styled.label`
  position: absolute;
  width: 98px;
  height: 27px;
  left: 533px;
  top: 819px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 136%;
  color: #ffffff;
`;
