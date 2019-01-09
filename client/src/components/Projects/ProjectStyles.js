import styled from 'styled-components';

export const ProjectContainer = styled.div`
  height: 100vh;

  background: #f5f5f5;
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
  // width: 100%;
  margin-top: 60px;
`;

export const Thumbnail = styled.img`
  margin: 15px;
  border: 5px solid black;

  &:hover {
    cursor: pointer;
  }
`;
