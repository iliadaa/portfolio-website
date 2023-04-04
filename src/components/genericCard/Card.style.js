import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
export const CardLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1300px;
  height: 507px;
  background: linear-gradient(
    146.64deg,
    rgba(255, 255, 255, 0.5) -6.76%,
    rgba(0, 71, 255, 0.05) 102.96%
  );
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(10px);
  border-radius: 200px 0px;
  left: 250px;
  top: 200px;
  @media (max-width: ${breakpoints.xxxl}) {
    width: 1100px;
    height: 450px;
  }
  @media (max-width: ${breakpoints.xxl}) {
    height: 450px;
    width: 900px;
    left: 115px;
  }
`;

export const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 401px;
  height: 401px;
  background: #2157f2;
  border: 25px solid #ffffff;
  border-radius: 334px;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);
`;

export const ImageProfile = styled.img`
  border-radius: "50%";
  width: "100px";
  height: "100px";
  object-fit: cover;
  z-index: 2;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
  width: 50%;
  height: 100%;
  z-index: 2;
`;

export const H2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 136%;
  display: flex;
  align-items: center;
  color: #393939;
  text-align: start;
  @media (max-width: ${breakpoints.xxl}) {
    margin: 10px;
  }
`;
export const StyledParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: start;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
