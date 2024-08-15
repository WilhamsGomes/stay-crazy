import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }

  @media screen and (max-width: 720px) {
   height: auto;
  }
`;

export const ContentText = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 920px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
   height: auto;
  }

  span {
    background: red;
    padding: 5px 10px;
    border-radius: 10px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #242424;
  }

  p {
    text-align: justify;
  }

  h1 {
    font-size: 58px;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;

export const ContentView = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    max-width: 100%;
    height: 100%;
    max-height: 800px;
  }

  @media screen and (max-width: 720px) {
   display: none;
  }
`;
