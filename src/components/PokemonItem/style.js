import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  height: 30rem;
  width: 25%;
  padding: 2rem;
  transition: background 0.3s ease-in-out;
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--grey);
  }

  & > img {
    margin-bottom: 1rem;
    width: 100%;
    height: 45%;
  }

  & > p {
    color: var(--dark-blue);
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.3rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    & > p {
      color: var(--dark-blue);
      margin-bottom: 1rem;
      font-weight: 700;
      font-size: 1.3rem;
    }
  }
`