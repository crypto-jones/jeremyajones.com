import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #171e26;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,700');
  font-family: 'Arvo', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 35%;
`;

export const TextContainer = styled.div`
  font-size: 2.5rem;
  text-align: center;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Highlight = styled.div`
  font-size: 4rem;
  padding-bottom: 5px;
  font-weight: 700;
  color: #e31b6d;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;
