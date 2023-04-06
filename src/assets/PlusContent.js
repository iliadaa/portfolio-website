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

  @media (max-width: ${breakpoints.md}) {
    left: 485px;
    top: 30px;
  }
  @media (max-width: ${breakpoints.sm}) {
    left: 325px;
    top: 77px;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    left: 420px;
    top: 88px;
  }
  @media (max-width: ${breakpoints.xs}) {
    top: 60px;
    left: 235px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    left: 275px;
  }
`;

export default PlusIcon;
