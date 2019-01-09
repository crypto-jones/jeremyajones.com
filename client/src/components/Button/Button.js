import React from 'react';
import { Button } from './ButtonStyles';

const NavButton = props => {
  let btnName = props.name;
  let color = props.color;
  let bgColor = props.bgColor;
  let border = props.border;
  let hoverFontColor = props.hoverFontColor;
  let borderColor = props.borderColor;

  return (
    <Button
      color={color}
      bgColor={bgColor}
      border={border}
      hoverFontColor={hoverFontColor}
      borderColor={borderColor}
    >
      {btnName}
    </Button>
  );
};

export default NavButton;
