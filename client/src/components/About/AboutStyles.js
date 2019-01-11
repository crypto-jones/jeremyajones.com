import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: FFFDFF;
  font-family: 'Arvo', serif;
  padding-bottom: 100px;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeader = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #444649;
  padding: 50px 0 30px 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const AboutSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #c0c0c0;
  padding-top: 20px;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const IconTextWrapper = styled.div`
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;

  @media (max-width: 600px) {
    max-width: 190px;
  }
`;

export const IconHeader = styled.div`
  color: #c0c0c0
  font-size: 1.25rem
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const IconText = styled.div`
  text-align: center;
  color: #616161;
  padding-top: 5px;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Icon = styled.i`
  color: #04c2c9;
  padding: 5px 80px;
  text-shadow: 3px 3px 10px #444649;
  font-size: 6em;

  @media (max-width: 600px) {
    font-size: 4em;
  }
`;

export const ProfilePic = styled.img`
  width: 200px
  border-radius: 50%
  border: 3px solid #444649;

`;

export const SocialContainer = styled.div`
  justify-content: center;
`;

export const Astyle = styled.a`
  color: #708090;
  padding: 0 15px;
  border-radius: 10px;

  &:hover {
    color: #e31b6d;
  }
`;
