import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem;
  .title {
    font-size: 30px;
  }
  .wrapper-info {
    display: flex;
    gap: 1rem;
    p {
      font-size: 22px;
      width: 650px;
      color: #575757;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid lightgray;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .title {
    border-bottom: 1px solid lightgray;
  }
  .price-before {
    font-size: 0.875rem;
    line-height: 2;
    color: #575757;
  }

  .pix {
    color: #c75000;
    font-weight: 600;
    font-size: 22px;
    font-family: "Sarabun", arial, sans-serif;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .pix-text {
    font-weight: 400;

    color: #c75000;
  }
  .resume-container {
    border-bottom: 1px solid lightgray;
    margin-bottom: 1rem;
  }
  .items {
    display: flex;
    justify-content: space-between;
  }
  .items-text {
    text-align: right;
    
  }
  .items-text.green {
    color: #0E8154; /* Estilo específico para a classe 'green' */
}
  .total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    padding-top: 1rem;
  }
  .total-text {
    text-align: right;
  }
  .info-buy {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
      justify-content: space-between;
    }
    select {
      width: 60px;
      height: 40px;
    }
  }
  .wrapper-payment {
    display: flex;
    gap: 3rem;
    justify-content: center;
    margin-top: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .container-shipment {
    background-color: lightgray;
    padding: 1rem;
    width: 600px;
    @media (max-width: 768px) {
      width: auto;
      font-size: 14px;
    }
    .container-location {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .location {
        width: 200px;
      }
      .price {
        font-weight: 600;
        color: #0E8154;
      }
    }

    div {
      margin-bottom: 1rem;
    }
  }
  .container-payment {
    @media (max-width: 768px) {
      font-size: 14px;
    }
    div {
      padding-bottom: 1rem;
    }
    button {
      width: 180px;
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
  .buttons {
    display: flex;

    gap: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
