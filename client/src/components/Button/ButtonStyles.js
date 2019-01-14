import styled from 'styled-components';

export const CustomButton = styled.div`
  // width: 180px;
  width: ${props => props.width};
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  border: ${props => props.border};
  margin: 10px;
  padding: 10px;
  // font-size: 1.2rem;
  font-size: ${props => props.fontSize};
  font-family: 'Arvo', serif;

  &:hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.hoverFontColor};
    cursor: pointer;
    border-color: ${props => props.borderColor};
  }
`;
