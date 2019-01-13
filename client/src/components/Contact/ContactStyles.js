import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: #182327;
  padding-bottom: 100px;
  font-family: 'Arvo', serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ContactHeader = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #9d967c
  padding-top: 50px;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const ContactSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #c0c0c0;
  padding-top: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
