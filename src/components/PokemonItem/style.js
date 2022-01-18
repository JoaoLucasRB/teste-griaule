import styled from "styled-components";

export const Container = styled.div`
  background: white;
  height: 30rem;
  width: 25%;
  padding: 2rem;
  transition: background 0.3s ease-in-out;
  color: black;

  &:hover {
    background: #eee;
  }

  & > img {
    margin-bottom: 1rem;
    width: 100%;
    height: 45%;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & > p {
      color: #3238a8;
      margin-bottom: 1rem;
      font-weight: 700;
      font-size: 1.3rem;
    }
  }

  & > span {
    
  }
`