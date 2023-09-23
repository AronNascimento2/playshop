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
      font-size: 15px;
      width: 650px;
      color: #575757;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid lightgray;
  }
  .title {
    border-bottom: 1px solid lightgray;
  }
  .price-before {
    font-size: 0.875rem;
    line-height: 2;
    color: #575757;
    text-decoration: line-through;
  }

  .pix {
    color: #c75000;
    font-weight: 600;
    font-size: 22px;
    font-family: "Sarabun", arial, sans-serif;
  }
  .pix-text {
    font-weight: 400;

    color: #c75000;
  }
  .info-buy {
    display: flex;
    align-items: center;
    gap: 1rem;
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
  }

  .container-shipment {
    background-color: lightgray;
    padding: 1rem;
    width: 600px;
    .container-location {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .location {
        width: 200px;
      }
      .price {
        font-weight: 600;
      }
    }

    div {
      margin-bottom: 1rem;
    }
  }
  .container-payment {
    div {
      padding-bottom: 1rem;
    }
    button {
      width: 180px;
      height: 48px;
      border-radius: 30px;
      background-color: #f46f1d;
    }
    .button_peek {
      color: #fcfcfc;

      background-color: #1b1918;
    }
  }
  .buttons {
    display: flex;

    gap: 1rem;
  }
`;
