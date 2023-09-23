import styled from "styled-components";

export const Container = styled.div``;

export const WrapperNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  ul {
    display: flex;
  }
  nav {
    flex-wrap: wrap;
    background-color: black;
    color: #fff;
  }
`;

export const WrapperHeader = styled.div`
  background: #f46f1d;
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  .material-symbols-outlined {
    cursor: pointer;
  }
  img {
    &:hover {
      cursor: pointer;
    }
    width: 25px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  display: flex;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  > p span {
    color: black;
  }
`;
