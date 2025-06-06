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

## 📂 Estrutura de PastasCRUD-MOBILE-MOEDAS
```
CRUD-MOBILE-MOEDAS
├── src/
|   ├── assets/
│   │      ├──imagens/
│   │        ├──icones/
│   │        ├── moedas/
|   ├──img/ 
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

## 📂 Estrutura de PastasAPI-MOEDAS
```
projeto-moedas
├── .idea
├── src
│   └── main
│       ├── java
│       │   └── com.pedro.projeto_moedas
│       │       ├── controller
│       │       │   └── MoedaController.java
│       │       ├── model
│       │       │   └── Moeda.java
│       │       ├── repository
│       │       │   └── MoedaRepository.java
│       │       └── service
│       │           ├── MoedaService.java
│       │           └── ProjetoMoedasApplication.java
│       └── resources
│           └── application.properties
├── target
├── HELP.md
├── README.md
├── mvnw
├── mvnw.cmd
└── pom.xml
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

https://github.com/user-attachments/assets/bef9b135-f901-4896-a1ec-b4b2f7b4e250

https://github.com/PedroMoraes1/CRUD-mobile-moedas/blob/front/src/img/WhatsApp%20Image%202025-05-30%20at%2008.36.45.jpeg

https://github.com/PedroMoraes1/CRUD-mobile-moedas/blob/front/src/img/WhatsApp%20Image%202025-05-30%20at%2008.37.12.jpeg

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
```{
  "nome": "Real",
  "descricao": "Moeda do Brasil",
  "pais": "Brasil",
  "preco": 10,00,
  "imagemUrl": "https://link-da-imagem.com/real.png"
}
```
## 👥 Contribuidores
- Pedro Henrique Alves de Moraes
- Isabelle Rios
- Maria Júlia

## 📄 Figma
Este é o link do figma https://www.figma.com/design/x3027mL92APjLNtHRtt0jN/CRUD-Mobile-Moedas?node-id=0-1&t=NgwpLwET1DmcGv0V-1
