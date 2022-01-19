import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5vh;
  background: var(--dark-blue);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1080px;
  width: 100%;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > div {
    & > a {
      color: var(--white);
      text-decoration: none;
      padding: 0 1rem;
      transition: color 0.3s, ease-in-out;

      &:hover {
        color: var(--grey);
      }
    }
  }
`