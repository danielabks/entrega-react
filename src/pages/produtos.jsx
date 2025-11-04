import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function produtos() {
  const produtos = [
    // 🕹 Consoles
    {
      categoria: "Consoles",
      itens: [
        { nome: "PS5 Digital", imagem: "/src/assets/ps5-digital.jpg", preco: "R$ 3.799,00" },
        { nome: "PS5 Disc", imagem: "/src/assets/ps5-disc.jpg", preco: "R$ 4.299,00" },
        { nome: "Xbox Series X", imagem: "/src/assets/xbox-series-x.jpg", preco: "R$ 4.499,00" },
        { nome: "Xbox Series S", imagem: "/src/assets/xbox-series-s.jpg", preco: "R$ 2.999,00" },
        { nome: "Nintendo Switch 2", imagem: "/src/assets/switch-2.jpg", preco: "R$ 3.999,00" },
      ],
    },

    // 🎮 Jogos
    {
      categoria: "Jogos",
      itens: [
        { nome: "Battlefield 6", imagem: "/src/assets/battlefield-6.jpg", preco: "R$ 349,00" },
        { nome: "Call of Duty: Black Ops 6", imagem: "/src/assets/cod-bo6.jpg", preco: "R$ 379,00" },
        { nome: "EA FC 26", imagem: "/src/assets/ea-fc-26.jpg", preco: "R$ 369,00" },
        { nome: "Outer Worlds 2", imagem: "/src/assets/outer-worlds-2.jpg", preco: "R$ 299,00" },
        { nome: "Silent Hill F", imagem: "/src/assets/silent-hill-f.jpg", preco: "R$ 329,00" },
      ],
    },

    // 🧩 Acessórios
    {
      categoria: "Acessórios",
      itens: [
        { nome: "Controle Wireless Xbox XS", imagem: "/src/assets/controle-xbox.jpg", preco: "R$ 599,00" },
        { nome: "Controle DualSense", imagem: "/src/assets/dualsense.jpg", preco: "R$ 649,00" },
      ],
    },

    // 💳 Assinaturas
    {
      categoria: "Assinaturas",
      itens: [
        { nome: "Game Pass Essential - 12 meses", imagem: "/src/assets/gamepass-essential.jpg", preco: "R$ 349,00" },
        { nome: "Game Pass Premium - 9 meses", imagem: "/src/assets/gamepass-premium.jpg", preco: "R$ 299,00" },
        { nome: "Game Pass Ultimate - 1 mês", imagem: "/src/assets/gamepass-ultimate.jpg", preco: "R$ 59,00" },
        { nome: "PSN", imagem: "/src/assets/psn.jpg", preco: "R$ 249,00" },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🕹 Loja de Games</h1>

      {produtos.map((categoria) => (
        <section key={categoria.categoria} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{categoria.categoria}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoria.itens.map((item) => (
              <Card key={item.nome} className="shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold">{item.nome}</h3>
                  <p className="text-gray-600 mb-3">{item.preco}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Adicionar ao carrinho
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
