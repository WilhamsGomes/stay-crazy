import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.div`
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  span {
    background: #f8330c;
    height: 50px;
    display: flex;
    align-items: center;
    width: 120px;
    border-radius: 8px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 44px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 50px;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  p {
    text-align: justify;
    max-width: 80%;
    font-size: 18px;

    span {
      color: #f8330c;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 920px) {
    width: 100%;

    p {
      max-width: 100%;
    }
  }
`;

export const Images = styled(Text)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const DivImage = styled.div`
  /* width: 250px;
  height: 250px;
  background: #f8330c; */
  @media screen and (max-width: 920px) {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
