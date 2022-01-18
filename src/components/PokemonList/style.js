import styled from "styled-components"

export const Container = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Navigation = styled.div`
  background: #eee;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  & > button{
    background: var(--dark-blue);
    color: white;
    border-style: none;
    padding: 0.5rem;
    width: 5rem;
    font-weight: 700;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--darker-blue);
    }
  }
`