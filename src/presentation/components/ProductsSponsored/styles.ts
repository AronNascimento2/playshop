import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: auto;
    h2 {
      font-size: 25px;
      margin-left: 0.5rem;
    }
  }
  h2 {
    color: #f46f1d;
  }
`;
