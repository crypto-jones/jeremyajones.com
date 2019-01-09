import React from 'react';
import { Button } from './ButtonStyles';

const NavButton = props => {
  let btnName = props.name;
  let color = props.color;
  let bgColor = props.bgColor;
  let border = props.border;
  let hoverFontColor = props.hoverFontColor;
  let borderColor = props.borderColor;
  let onClick = props.onClick;

  return (
    <Button
      color={color}
      bgColor={bgColor}
      border={border}
      hoverFontColor={hoverFontColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {btnName}
    </Button>
  );
};

export default NavButton;
