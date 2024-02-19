import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  margin: 4rem;
  .container-img{
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
  }
  }
  @media (max-width: 768px) {
    display: block;
  }
  .price-before {
    font-size: 14px;
    line-height: 2;
    color: #575757;
    text-decoration: line-through;
  }

  .pix {
    color: #c75000;
    font-weight: 600;
    font-size: 28px;
    font-family: "Sarabun", arial, sans-serif;
  }
  .info-buy {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .wrapper-infos {
    a {
      font-size: 12px;
      text-decoration: underline;
      font-weight: 600;
      color: #f46f1d;
    }
  }
  .description {
    font-size: 22px;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 768px) {
      align-items: center;
    }
    button {
      width: 280px;
      height: 48px;
      border-radius: 30px;
      background-color: #f46f1d;
      @media (max-width: 768px) {
      
      width: 100%;
    }
    }
    .button_peek {
      color: #fcfcfc;

      background-color: #1b1918;
    }
  }
  .forms-to-pay {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .form-to-pay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 80px;
    font-weight: 600;
    color: #575757;
    border-bottom: 1px solid lightgray;
    > span {
      font-weight: 400;
      font-size: 11px;
    }
  }
  .cep {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    height: 60px;
    padding: 3rem 2rem;
    border-radius: 8px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
      height: auto;
    }
    > div {
      display: flex;
      gap: 1rem;
    }
    p {
      font-weight: 600;
      @media (max-width: 768px) {
     padding-bottom: 0.5rem;
    }
    }
    input {
      width: 160px;
      height: 44px;
      border: 1px solid gray;
    }
    button {
      height: 44px;
      border-radius: 40px;
      width: 100px;
      color: #fcfcfc;
      background-color: #1b1918;
    }
  }
`;
