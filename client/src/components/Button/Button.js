import React from 'react';
import { CustomButton } from './ButtonStyles';

const NavButton = props => {
  let btnName = props.name;
  let color = props.color;
  let bgColor = props.bgColor;
  let border = props.border;
  let hoverFontColor = props.hoverFontColor;
  let borderColor = props.borderColor;
  let onClick = props.onClick;
  let fontSize = props.fontSize;
  let width = props.width;

  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      border={border}
      hoverFontColor={hoverFontColor}
      borderColor={borderColor}
      onClick={onClick}
      width={width}
      fontSize={fontSize}
    >
      {btnName}
    </CustomButton>
  );
};

export default NavButton;
