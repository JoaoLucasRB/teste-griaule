import styled from "styled-components";

export const PokemonList = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const PokemonItem = styled.div`
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
    height: 45%;
  }

  & > p {
    color: #3238a8;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.3rem;
  }

  & > span {
    
  }
`