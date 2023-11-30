import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./presentation/components/Header";
import { useEffect, useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Executar o alerta somente na primeira renderização
    if (showAlert) {
      alert('Este projeto ainda está em andamento, ele pode não funcionar da maneira esperada');
      setShowAlert(false); // Altera o estado para não exibir o alerta novamente
    }
  }, [showAlert]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
