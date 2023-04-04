import styled from "styled-components";
import { colors } from "../../../config/colors";

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
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  font-style: normal;
  cursor: ${(props) => props.cursor};
`;

export const IconContainer = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  grid-gap: 15px;
`;
