# 💰 CRUD Mobile de Moedas
Aplicativo mobile desenvolvido com React Native e Spring Boot para gerenciamento de coleções de moedas. Permite ao usuário cadastrar, editar, visualizar e remover moedas com informações como nome, descrição, país e imagem.

# 🛠️ Tecnologias Utilizadas

## 📱 Front-end
React Native

Expo

Axios (para requisições HTTP)

React Navigation

## 🖥️ Back-end
Java

Spring Boot

MongoDB

API hospedada na Render

## 📂 Estrutura de Pastas
plaintext
Copiar
Editar
CRUD-MOBILE-MOEDAS
├── .expo/                     # Configurações do Expo
├── src/
│   ├── assets/
│   │   └── imagens/
│   │       ├── icones/
│   │       └── moedas/
│   │       ├── placeholder.png
│   │       ├── adaptive-icon.png
│   │       ├── favicon.png
│   │       ├── icon.png
│   │       └── splash-icon.png
│   ├── navigation/            # Navegação entre telas
│   └── screens/               # Telas do app
│       ├── adicionar.js       # Tela para adicionar moeda
│       ├── editar.js          # Tela para editar moeda
│       └── home.js            # Tela principal (lista de moedas)
├── App.js                     # Arquivo principal do aplicativo
├── app.json                   # Configurações do projeto
├── index.js                   # Entrada principal do app
├── package.json               # Dependências do projeto
├── package-lock.json
├── tsconfig.json              # Configuração TypeScript (opcional)
└── README.md
## 📋 Funcionalidades
- 📥 Cadastrar Moedas
Permite inserir uma nova moeda com nome, descrição, país e imagem.

- 🔍 Visualizar Moedas
Lista as moedas cadastradas e mostra detalhes de cada uma.

- ✏️ Editar Moedas
Atualiza as informações de uma moeda existente.

- 🗑️ Remover Moedas
Exclui moedas da coleção.

## 🖼️ Capturas de Tela
(⚠️ Adicione aqui prints da interface do app ou GIFs demonstrativos.)

## 🚀 Instalação e Execução
✅ Pré-requisitos
Node.js (versão recomendada: 16+)

Expo CLI

Java JDK (versão recomendada: 11+)

Android Studio ou outro emulador de dispositivo móvel

MongoDB (local ou na nuvem, como MongoDB Atlas)

## 🔧 Instalação
bash
Copiar
Editar
# Clone o repositório
git clone https://github.com/PedroMoraes1/CRUD-mobile-moedas.git
cd CRUD-mobile-moedas

# Instale as dependências do projeto
npm install

# Inicie o app com Expo
npx expo start
🌐 API
O back-end está hospedado em:
https://crud-mobile-moedas.onrender.com/api/moedas

Exemplo de objeto moeda:
json
Copiar
Editar
{
  "nome": "Real",
  "descricao": "Moeda do Brasil",
  "pais": "Brasil",
  "imagemUrl": "https://link-da-imagem.com/real.png"
}
## 👥 Contribuidores
- Pedro Henrique Alves de Moraes
- Isabelle Rios
- Maria Júlia

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhe
