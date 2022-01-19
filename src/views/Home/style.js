import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const Content = styled.div`
  min-height: 95vh;
  height: 95vh;
  color: white;
  max-width: 1120px;

  & > h2 {
    width: 100%;
    color: var(--black);
    padding: 2rem;
  }
`