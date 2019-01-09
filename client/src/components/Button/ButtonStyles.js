import styled from 'styled-components';

export const CustomButton = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  border: ${props => props.border};
  margin: 10px;
  padding: 10px;
  font-size: 1.2rem;

  &:hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.hoverFontColor};
    cursor: pointer;
    border-color: ${props => props.borderColor};
  }
`;
