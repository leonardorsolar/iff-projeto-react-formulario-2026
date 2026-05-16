import { useState } from "react";
import axios from "axios";

function Formulario() {
  const [nome, setNome] = useState("");
  const enviar = async (e) => {
    e.preventDefault();
    localStorage.setItem("nome", nome);
    try {
      await axios.post("http://localhost:3000/usuarios", {
        nome: nome
      });
      alert("Enviado com sucesso");
      setNome("");
    } catch (erro) {
      console.log(erro);
      alert("Erro ao enviar");
    }
  };
  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button type="submit">
        Salvar
      </button>
    </form>
  );
}
export default Formulario;
