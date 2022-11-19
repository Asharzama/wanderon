import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(3, 61, 53, 255);
  height: 10vh;
  font-size: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 5vw;
  @media (max-width: 900px){
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    position: relative;
    background-color: rgba(4,93,81,255);
  }
`;

export const List = styled.ul`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 4.5rem;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListItems = styled.li`
  cursor: pointer;

  &:hover {
    color: lightgreen;
  }
`;

export const Menu = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
    z-index: 999;
  }
`;

export const Nav = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    height: 50vh;
    background-color: rgba(4,93,81,255);
    position: absolute;
    top: 10vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: all 0.5s linear;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    ${({ active }) =>
      active &&
      `
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    z-index: 1;
  `}
  }
`;
