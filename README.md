# 🍪 CookieCost

## Calculadora de Custos para Receitas de Cookies

O CookieCost é uma aplicação web desenvolvida para calcular o custo real de uma receita, ajudando no controle de gastos e na precificação dos produtos.

O aplicativo funciona como um **PWA (Progressive Web App)**, podendo ser instalado em:

- 📱 iPhone
- 📱 Android
- 📲 iPad / Tablet
- 💻 Windows
- 💻 macOS
- 🌐 Navegadores modernos

---

# ✨ Funcionalidades

## 📦 Cadastro de ingredientes

Permite informar:

- Quantidade comprada do ingrediente;
- Valor pago;
- Custo por grama ou unidade.

Ingredientes cadastrados inicialmente:

- Farinha;
- Chocolate;
- Fermento;
- Ovos;
- Açúcar refinado;
- Açúcar mascavo;
- Amido;
- Bicarbonato.

---

## 🥣 Cálculo da receita

O aplicativo calcula:

- Quantidade utilizada de cada ingrediente;
- Custo individual;
- Custo total da receita.

---

## 💰 Precificação

Recursos:

- Custos extras configuráveis;
- Margem de lucro;
- Custo por unidade;
- Preço sugerido de venda.

---

## 💾 Armazenamento

Os dados são salvos no próprio navegador usando:

```
localStorage
```

Não utiliza:

- Banco de dados;
- Servidor;
- Cadastro de usuário.

---

# 📱 Instalação como aplicativo

## iPhone / iPad

1. Abrir o site pelo Safari.
2. Clicar em:

```
Compartilhar
```

3. Escolher:

```
Adicionar à Tela de Início
```

4. Confirmar.

O aplicativo aparecerá com o ícone personalizado.

---

## Android

1. Abrir pelo Chrome.
2. Escolher:

```
Instalar aplicativo
```

ou:

```
Adicionar à tela inicial
```

---

## Windows / Mac

Nos navegadores compatíveis:

- Chrome;
- Edge.

Escolher:

```
Instalar CookieCost
```

---

# 📁 Estrutura do Projeto

```
CookieCost/

│
├── index.html
│   Página principal da aplicação
│
├── style.css
│   Estilos e layout visual
│
├── script.js
│   Lógica dos cálculos e funcionalidades
│
├── manifest.json
│   Configuração do aplicativo PWA
│
├── service-worker.js
│   Funcionamento offline
│
└── assets/

    ├── logo.png
    ├── icon-192.png
    ├── icon-512.png
    └── favicon.ico
```

---

# 🛠️ Tecnologias utilizadas

## HTML5

Responsável pela estrutura da aplicação.

## CSS3

Responsável pelo design:

- Responsividade;
- Cores;
- Layout;
- Animações.

## JavaScript

Responsável por:

- Cálculos;
- Salvamento dos dados;
- Interações;
- Resultados.

## PWA

Responsável pela instalação como aplicativo.

---

# 🚀 Como executar localmente

## Opção 1 - Abrir diretamente

Clique duas vezes no:

```
index.html
```

---

## Opção 2 - Usar VS Code

Instalar a extensão:

```
Live Server
```

Depois:

Botão direito no `index.html`

↓

```
Open with Live Server
```

---

# 🌐 Publicação

O projeto pode ser publicado gratuitamente usando:

- GitHub Pages;
- Netlify;
- Vercel.

Após publicado, qualquer pessoa poderá acessar pelo navegador.

---

# 🔮 Possíveis melhorias futuras

Recursos que podem ser adicionados:

- Cadastro de várias receitas;
- Controle de estoque;
- Controle de embalagens;
- Custos de energia e gás;
- Exportação de relatórios;
- Geração de etiquetas;
- Controle de vendas;
- Sincronização entre dispositivos.

---

# 🍪 Projeto CookieCost

Desenvolvido para facilitar o controle de custos e melhorar a precisão da precificação de produtos artesanais.