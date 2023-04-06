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
  margin-top: ${(props) => props.margintop ?? "-8%"};
  margin-left: ${(props) => props.marginLeft ?? "70%"};
  margin: ${(props) => props.margin ?? "auto"};

  @media (max-width: ${breakpoints.xxxl}) {
  }
  @media (max-width: ${breakpoints.xxl}) {
  }
`;

export default Ellipse;
