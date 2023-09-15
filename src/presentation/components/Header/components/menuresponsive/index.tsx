import { useState } from "react";
import * as S from "./styles.ts";

export const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      {/* Camada de fundo esmaecido */}
      {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
      <img className="menu" src="menu.png" alt="" onClick={toggleDrawer} />
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="toggle-button" onClick={toggleDrawer}>
            {isOpen ? "Fechar" : "Abrir"}
          </button>
        </div>
        <div className="drawer-content">
          <div className="wrapper">
            <div className="login-drawer">
              <span>Entre ou cadastre-se</span> para ver seus pedidos
            </div>
            <div className=" flex text-xs pl-5 pr-5 justify-between">
              <p>Meus pedidos</p>
              <p>Favoritos</p>
            </div>
          </div>
          <ul className="items">
            <li>Por departamentos</li>
            <li>Smartphones</li>
            <li>Eletrodomésticos</li>
            <li>Tvs</li>
            <li>Móveis</li>
            <li>Eletroportáteis</li>
            <li>Informática</li>
            <li>Serviços</li>
          </ul>
          <div className="infos">
            <ul>
              <li>Dúvidas e Atendimento</li>
              <li>Televendas</li>
              <li>Política e Privacidade</li>
              <li>Sobre a PlayShop</li>
              <li>Compra segura</li>
            </ul>
          </div>
        </div>
      </div>
    </S.Container>
  );
};
