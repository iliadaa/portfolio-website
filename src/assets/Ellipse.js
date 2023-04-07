import styled from "styled-components";
import breakpoints from "../config/breakpoints";
const Ellipse = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width ?? "152px"};
  height: ${(props) => props.height ?? "152px"};
  border: ${(props) => props.border ?? "25px solid rgba(33, 87, 242, 0.4)"};
  z-index: ${(props) => props.index ?? "-1"};
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  background-color: ${(props) => props.background};
  left: ${(props) => props.left ?? "82%"};
  bottom: ${(props) => props.bottom ?? "25%"};
  top: ${(props) => props.top ?? ""};
  position: absolute;

  @media (max-width: ${breakpoints.lg}) {
    left: 80%;
    bottom: 23%;
  }

  @media (max-width: ${breakpoints.md}) {
    left: 65%;
    bottom: 27%;
  }
  @media (max-width: ${breakpoints.md}) {
    left: 55%;
    bottom: 30%;
  }
  @media (max-width: ${breakpoints.xs}) {
    left: ${(props) => props.leftXs};
    bottom: ${(props) => props.bottomXs};
    top: ${(props) => props.topXs};
  }
`;

export default Ellipse;
