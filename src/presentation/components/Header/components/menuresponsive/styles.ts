import styled from "styled-components";

export const Container = styled.div`
  .drawer {
    position: fixed;
    top: 0;
    left: -300px; /* Comece o Drawer fora da tela */
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 999;
  }

  .drawer.open {
    left: 0; /* Abra o Drawer */
  }

  .drawer-header {
    background-color: #f46f1d;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  .wrapper {
    background-color: lightgray;
    height: 100px;
  }
  .login-drawer {
    width: 170px;
    font-size: 12px;
    padding: 20px;
  }
  .toggle-button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .drawer-content {
    height: 100%;
    .items {
      padding: 20px;
      li {
        font-size: 15px;
        color: gray;

        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
      }
    }
    .infos {
      border: 1px solid lightgray;
      margin: 1rem;
      border-radius: 8px;
      li {
        font-size: 15px;
        font-weight: 600;
        color: gray;
        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  /* Adicione estilos adicionais conforme necessário */
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
    z-index: 999; /* Garante que a camada de fundo esteja acima de outros elementos */
  }

  .menu {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
