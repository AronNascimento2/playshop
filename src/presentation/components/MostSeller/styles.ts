import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 1rem;

    width: auto;
    h2 {
      font-size: 25px;
      margin-left: 0.5rem;
    }
  }
  h2 {
    color: #f46f1d;
  }
  
  .prev-button {
    top: 220px;
    right: 20px;
    position: relative;
    z-index: 999;
    width: 40px;
    height: 60px;
    border: 1px solid lightgray;
    background-color: #fff;
  }
  .next-button {
    bottom:355px;
    left: 91.8%;
    position: relative;
    z-index: 999;
    width: 40px;
    height: 60px;
    border: 1px solid lightgray;
    background-color: #fff;

  }
`;
