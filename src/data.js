// Importando imagens da pasta src/assets
import ps5Digital from "./assets/ps5-digital.jpg";
import ps5Disc from "./assets/ps5-disc.jpg";
import xboxX from "./assets/xbox-series-x.webp";
import xboxS from "./assets/xbox-series-s.webp";
import switch2 from "./assets/switch-2.webp";
import battlefield6 from "./assets/battlefield-6.webp";
import codBo6 from "./assets/cod-bo6.webp";
import eaFc26 from "./assets/ea-fc-26.webp";
import outerWorlds2 from "./assets/outer-worlds-2.png";
import silentHillF from "./assets/silent hill-f.jpg";
import controleXbox from "./assets/xbox-control.webp";
import dualsense from "./assets/dualsense.jpg";
import gamepassEssential from "./assets/gamepass-essential.webp";
import gamepassPremium from "./assets/gamepass-premium.webp";
import gamepassUltimate from "./assets/gamepass-ultimate.webp";
import psn from "./assets/psn.webp";

const produtos = [
  // Consoles
  { id: 1, nome: "PlayStation 5 Digital", categoria: "Consoles", preco: 3999.99, stock:10, imagem: ps5Digital },
  { id: 2, nome: "PlayStation 5 Disc", categoria: "Consoles", preco: 4499.99, imagem: ps5Disc },
  { id: 3, nome: "Xbox Series X", categoria: "Consoles", preco: 4299.99, imagem: xboxX },
  { id: 4, nome: "Xbox Series S", categoria: "Consoles", preco: 2999.99, stock: 7, imagem: xboxS },
  { id: 5, nome: "Nintendo Switch 2", categoria: "Consoles", preco: 3599.99, imagem: switch2 },

  // Jogos
  { id: 6, nome: "Battlefield 6", categoria: "Jogos", preco: 349.99, imagem: battlefield6 },
  { id: 7, nome: "Call of Duty: Black Ops 6", categoria: "Jogos", preco: 399.99, imagem: codBo6 },
  { id: 8, nome: "EA FC 26", categoria: "Jogos", preco: 349.99, imagem: eaFc26 },
  { id: 9, nome: "Outer Worlds 2", categoria: "Jogos", preco: 299.99, imagem: outerWorlds2 },
  { id: 10, nome: "Silent Hill F", categoria: "Jogos", preco: 369.99, imagem: silentHillF },

  // Acessórios
  { id: 11, nome: "Controle Wireless Xbox XS", categoria: "Acessórios", preco: 599.99, imagem: controleXbox },
  { id: 12, nome: "Controle DualSense", categoria: "Acessórios", preco: 499.99, imagem: dualsense },

  // Assinaturas
  { id: 13, nome: "Game Pass Essential (12 meses)", categoria: "Assinaturas", preco: 349.99, imagem: gamepassEssential },
  { id: 14, nome: "Game Pass Premium (9 meses)", categoria: "Assinaturas", preco: 299.99, imagem: gamepassPremium },
  { id: 15, nome: "Game Pass Ultimate (1 mês)", categoria: "Assinaturas", preco: 69.99, imagem: gamepassUltimate },
  { id: 16, nome: "PSN Plus", categoria: "Assinaturas", preco: 299.99, imagem: psn },
];

export default produtos;
