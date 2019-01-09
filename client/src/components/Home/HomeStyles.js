import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #252934;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,700');
  font-family: 'Arvo', serif;
  display: flex;
  flex-direction: column; /* NEW */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 40%;
`;

export const TextContainer = styled.div`
  font-size: 2.2rem;
  text-align: center;
  color: white;
  margin-bottom: 10px;
`;

export const Highlight = styled.div`
  font-size: 3rem;
  padding-bottom: 5px;
  font-weight: 700;
  color: #e31b6d;
`;
