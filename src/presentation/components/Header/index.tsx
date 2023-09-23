import { useNavigate } from "react-router";
import { Input } from "../Input";
import { LoginHeader } from "../LoginHeader";
import { MenuResponsive } from "./components/menuresponsive";
import * as S from "./styles";

export const Header = () => {
  const history = useNavigate();

  const handleClick = () => {
    // Redireciona para a página de compra com o objeto product
    history(`/`);
  };

  const handleProductClick = () => {
    // Redireciona para a página de compra com o objeto product
    history(`/cartItems`);
  };
  return (
    <S.Container>
      <S.WrapperHeader>
        <div className="flex items-center gap-4">
          <MenuResponsive />
          <S.Title onClick={handleClick}>
            <p>
              Play<span>Shop</span>
            </p>
          </S.Title>
        </div>
        <Input />
        <LoginHeader />
        <div className="flex gap-4">
          <img src="favorite.png" alt="" />
          <img onClick={handleProductClick} src="cart.png" alt="" />
        </div>
      </S.WrapperHeader>
      <S.WrapperNav>
        <nav className="h-11 bg-black flex justify-center items-center">
          <ul className="flex gap-8">
            <li>Por departamentos</li>
            <li>Smartphones</li>
            <li>Eletrodomésticos</li>
            <li>Tvs</li>
            <li>Móveis</li>
            <li>Eletroportáteis</li>
            <li>Informática</li>
            <li>Serviços</li>
          </ul>
        </nav>
      </S.WrapperNav>
    </S.Container>
  );
};
