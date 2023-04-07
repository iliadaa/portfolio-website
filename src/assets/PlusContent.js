import styled from "styled-components";
import { colors } from "../config/colors";
import breakpoints from "../config/breakpoints";

const PlusIcon = styled.div`
  position: absolute;
  width: 88px;
  height: 88px;
  left: ${(props) => props.left ?? "8%"};
  bottom: ${(props) => props.bottom ?? ""};
  top: ${(props) => props.top ?? "38%"};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 230px;
  line-height: 204px;
  display: flex;
  color: ${colors.plusColor};
  &::before {
    content: "+";
    transform: rotate(-45deg);
  }
  @media (max-width: ${breakpoints.md}) {
    left: ${(props) => props.leftMd};
    bottom: ${(props) => props.bottomMd};
    top: ${(props) => props.topMd};
  }
  @media (max-width: ${breakpoints.xs}) {
    left: ${(props) => props.leftXs};
    bottom: ${(props) => props.bottomXs};
    top: ${(props) => props.topXs};
  }
`;

export default PlusIcon;
