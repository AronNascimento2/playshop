import styled from "styled-components";

export const Container = styled.div`
  .slide-item {
    @media (max-width: 768px) {
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #f46f1d;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
  }

  /* Estilize a cor do controle de paginação ativo (slide atual) */
  .swiper-pagination-bullet-active {
    background-color: #f46f1d;
  }
`;
