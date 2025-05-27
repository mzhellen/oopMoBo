import { useState } from "react";

export default function TelaInicial() {
  const [itens, setItens] = useState([
    { id: 1, tipo: "filme", capa: "https://link-da-imagem1.jpg" },
    { id: 2, tipo: "livro", capa: "https://link-da-imagem2.jpg" },
  ]);

  const adicionarItem = () => {
    const novaCapa = prompt("Cole aqui o link da imagem da capa:");
    if (novaCapa) {
      setItens([...itens, { id: Date.now(), tipo: "livro", capa: novaCapa }]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-pink-50">
      <h1 className="mb-6 text-3xl font-bold text-pink-600">Minha lista Mo-Bo</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {itens.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            <img src={item.capa} alt="Capa" className="object-cover w-full h-48" />
          </div>
        ))}
      </div>

      <button
        onClick={adicionarItem}
        className="px-4 py-2 mt-6 font-semibold text-white bg-pink-500 rounded hover:bg-pink-600"
      >
        + Adicionar item
      </button>
    </div>
  );
}
