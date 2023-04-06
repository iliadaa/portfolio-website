import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
export const CardLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  background: linear-gradient(
    146.64deg,
    rgba(255, 255, 255, 0.5) -6.76%,
    rgba(0, 71, 255, 0.05) 102.96%
  );
  backdrop-filter: blur(10px);
  border-radius: 200px 0px;
  margin: auto;
  margin-top: 6%;
  margin-bottom: 4%;
  gap: 5%;
  @media (max-width: ${breakpoints.xxl}) {
    margin-top: 8%;
    width: 90%;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    height: 75%;
    background: linear-gradient(
      149.93deg,
      rgba(255, 255, 255, 0.5) 4.86%,
      rgba(0, 71, 255, 0.05) 120.1%
    );
    border-radius: 200px 0px 0;
    gap: 0;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    height: 80%;
    gap: 0;
  }
`;

export const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 401px;
  height: 401px;
  background: #2157f2;
  border: 25px solid #ffffff;
  border-radius: 50%;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  @media (max-width: ${breakpoints.lg}) {
    width: 335px;
    height: 335px;
  }
  @media (max-width: ${breakpoints.xs}) {
    width: 200px;
    height: 200px;
    border: 14px solid #ffffff;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    width: 260px;
    height: 260px;
    border: 15px solid #ffffff;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 300px;
    height: 300px;
  }
`;

export const ImageProfile = styled.img`
  width: 115%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  @media (max-width: ${breakpoints.lg}) {
    width: 42%;
    height: 50%;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    width: 77%;
    padding-left: 0;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    padding-right: 26px;
  }
`;

export const H2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 136%;
  display: flex;
  align-items: center;
  color: #393939;
  text-align: start;
  @media (max-width: ${breakpoints.xxl}) {
    margin: 10px;
  }
  @media (max-width: ${breakpoints.lg}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 30px;
    margin: 10px;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    font-size: 35px;
  }
`;
export const StyledParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 150%;
  text-align: justify;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    font-size: 22px;
    margin-bottom: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5%;

  @media (max-width: ${breakpoints.xs}) {
    width: inherit;
    gap: 5px;
    padding-right: 13%;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.xl}) {
    padding-top: 10%;
    padding-right: 17%;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    padding-top: 0;
  }
`;
