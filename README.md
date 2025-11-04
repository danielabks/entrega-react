# GameZone - Web App de E-commerce

## Descrição
GameZone é uma **Single Page Application (SPA)** de e-commerce desenvolvida com **React**, permitindo a navegação entre categorias de produtos, detalhes individuais e carrinho de compras, sem recarregar a página.

O projeto utiliza **Firebase Firestore** para armazenar produtos e registrar compras, além de um **Context API** para gerenciar o estado global do carrinho.

---

## Funcionalidades

- Listagem de produtos por categoria ou catálogo completo.
- Visualização detalhada de cada produto.
- Seleção de quantidade e adição ao carrinho.
- Carrinho de compras com:
  - Exibição de produtos, quantidade e subtotal.
  - Total acumulado.
  - Remoção de itens e limpeza do carrinho.
- Navegação entre páginas sem reload (SPA).
- Registro de compras no Firebase Firestore.
- Feedbacks de usuário, como:
  - Produto não encontrado.
  - Carrinho vazio.
  - Produto adicionado ao carrinho.

---

## Estrutura de Componentes

- **App**
- **NavBar**
- **CartWidget**
- **ItemListContainer** / **ItemList**
- **ItemDetailContainer** / **ItemDetail** / **ItemCount**
- **Cart** / **CartItem**
- **CheckoutForm**
- **NotFound**

---

## Tecnologias Utilizadas

- **React** (SPA, Hooks, Context API)
- **React Router** (navegação entre páginas)
- **Firebase Firestore** (banco de dados)
- **CSS inline** (estilização rápida)
- **JavaScript ES6+**

---

## Como Rodar

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
