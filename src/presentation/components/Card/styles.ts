import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgb(204, 204, 204) 0px 4px 8px -4px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 496px;
    width: 100%;
  }
  .priceParcel-description{
    font-size: 12px;
  }
  .title {
    color: #404040;
    font-family: "Sarabun", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.02em;
    min-height: 2.625rem;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .price-before {
    font-size: 0.875rem;
    line-height: 2;
    color: #575757;
    text-decoration: line-through;
  }
  p {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #575757;
  }
  .pix {
    color: #c75000;
    font-weight: 600;
    font-size: 22px;
    font-family: "Sarabun", arial, sans-serif;
  }
  .pix.text{
    font-size: 12px;

  }
  @media (max-width: 768px) {
    .pix {
   
    font-size: 16px;
  }
  .pix.text{
    font-size: 12px;

  }
  }
`;
export const Wrapper = styled.div``;
