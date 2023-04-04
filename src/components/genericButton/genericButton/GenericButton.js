import React from "react";
import { GenericButtonStyle, IconContainer } from "./GenericButton.style";

function GenericButton(props) {
  return (
    <GenericButtonStyle
      onClick={props.onClick}
      h={props.buttonHeight}
      w={props.buttonWidth}
      borderRadius={props.borderRadius}
      backgroundColor={props.backgroundColor}
      color={props.color}
      cursor={props.cursor}
    >
      <IconContainer color={props.color}>
        {props.name}
        {props.icon}
      </IconContainer>
    </GenericButtonStyle>
  );
}

export default GenericButton;
