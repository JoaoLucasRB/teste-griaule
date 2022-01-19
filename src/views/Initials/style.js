import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const Content = styled.header`
  min-height: 95vh;
  height: 95vh;
  color: white;
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
      color: #1f1f1f;
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
    color: #1f1f1f;
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
      background: #eee;
    }

    & > div.empty {
      width: 100%;
      height: 100%;
      border: 2px dotted #ccc;
      border-radius: 8px;
    }
  }
`