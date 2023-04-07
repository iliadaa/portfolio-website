import styled from "styled-components";
import { colors } from "../../../config/colors";
import breakpoints from "../../../config/breakpoints";
export const GenericButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.h ?? "100%"};
  width: ${(props) => props.w ?? "100%"};
  color: ${(props) => props.color ?? "transparent"};
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  border: ${colors.blue};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  font-style: normal;
  cursor: ${(props) => props.cursor};
  width: 200px;
  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxxl}) {
    width: 200px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xl}) {
    width: 155px;
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 180px;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 200px;
  }
  @media (max-width: ${breakpoints.xs}) {
    width: 150px;
    height: 45px;
  }
`;

export const IconContainer = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
