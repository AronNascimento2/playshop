import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
  .text {
    font-size: 15px;
    width: 180px;
  }
`;
