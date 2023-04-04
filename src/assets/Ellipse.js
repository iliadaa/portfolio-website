import styled from "styled-components";
const Ellipse = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => props.width ?? "152px"};
  height: ${(props) => props.height ?? "152px"};
  left: ${(props) => props.left ?? "1168px"};
  top: ${(props) => props.top ?? "594px"};
  border: ${(props) => props.border ?? "25px solid rgba(33, 87, 242, 0.4)"};
  z-index: 1;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  background-color: ${(props) => props.background};
`;

export default Ellipse;
