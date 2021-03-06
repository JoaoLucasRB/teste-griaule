import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const Content = styled.div`
  min-height: 95vh;
  height: 95vh;
  color: var(--white);
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > div {  
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h2 {
      color: var(--black);
      margin-bottom: 2rem;
    }

    & > div.drag-area {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        width: 33%;
        & > div {
          width: 100% !important;
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  & > span {
    width: 10%;
    font-size: 4rem;
    color: var(--black);
  }

  & > div.drop-area {
    background: #eee;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    p {
      font-size: 1.4rem;
    }

    span {
      font-size: 1.2rem;
    }
    
    & > div {
      height: 100%;
      width: 100%;
      background: var(--grey);
    }

    & > div.empty {
      width: 100%;
      height: 100%;
      border: 2px dotted var(--dark-grey);
      border-radius: 8px;
    }
  }
`