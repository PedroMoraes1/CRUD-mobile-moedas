💰 CRUD Mobile de Moedas
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

## 📂 Estrutura de PastasCRUD-MOBILE-MOEDAS
```
CRUD-MOBILE-MOEDAS
├── src/
|   ├── assets/
│   │      ├──imagens/
│   │        ├──icones/
│   │        ├── moedas/   
│   ├── navigation/
│   └── screens/
│       ├── adicionar.js
│       ├── editar.js
│       └── home.js
├── App.js
├── README.md
├── App.json
├── index.js
├── package-lock.json
├── package.json
└── tsconfig.json
```


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
