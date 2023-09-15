import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  min-width: 300px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 3rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
