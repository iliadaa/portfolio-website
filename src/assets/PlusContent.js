import styled from "styled-components";
import { colors } from "../config/colors";
import breakpoints from "../config/breakpoints";

const PlusIcon = styled.div`
  position: absolute;
  width: 88px;
  height: 88px;
  left: 590px;
  top: 90px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 150px;
  line-height: 204px;
  display: flex;
  color: ${colors.BabyBlue};
  &::before {
    content: "+";
    transform: rotate(-45deg);
  }
  z-index: 2;
  @media (max-width: ${breakpoints.md}) {
    left: 115px;
    top: 50px;
    line-height: 170px;
    z-index: 1;
  }
`;

export default PlusIcon;
