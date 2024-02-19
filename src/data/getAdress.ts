import { Endereco } from "../domain/models/cepModel";

export const searchCep = async (cep: string): Promise<Endereco | null> => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data as Endereco;
    } else {
      console.error(`Erro ao buscar CEP: ${res.status}`);
      return null;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
};
