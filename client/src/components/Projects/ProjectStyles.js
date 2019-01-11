import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background: #f5f5f5;
  padding-bottom: 100px;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ProjectHeader = styled.div`
  text-align: center;
  font-family: 'Arvo', serif;
  font-size: 3rem;
  font-weight: 600;
  color: #444649;
  padding-top: 50px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
`;

export const Thumbnail = styled.img`
  margin: 15px;
  border: 5px solid black;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const FullSize = styled.img`
  border: 5px solid black;
`;

export const Astyle = styled.a`
  color: #708090;
  padding: 0 15px;
  border-radius: 10px;

  &:hover {
    color: #e31b6d;
  }
`;

export const ModalTextWrapper = styled.div`
  padding: 0 15px;
`;

export const ModalTitle = styled.h2`
  font-family: 'Arvo', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
`;

export const ModalSubTitle = styled.h4`
  font-family: 'Arvo', serif;
  font-size: 1.2rem;
  color: #c0c0c0;
`;

export const ModalDescription = styled.p`
  font-family: 'Arvo', serif;
  color: #444;
  font-size: 1.1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
