import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background: #182327;
  border-bottom: 3px solid #9d967c;
  font-family: 'Arvo', serif;
`;

export const NavLinkWrapper = styled.div`
  max-width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1000px) {
    margin-left: 100px;
  }
`;

export const NavLink = styled.div`
  color: #9d967c;
  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    color: #c0c0c0;
  }
`;