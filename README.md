Gestor App 🚀

Gestor App é uma aplicação modular para gestão empresarial, utilizando monorepo com Turborepo. O objetivo é permitir a expansão para diversos módulos no futuro, começando pelo gerenciamento de funcionários.

📌 Tecnologias Utilizadas

    Turborepo → Gerenciamento eficiente do monorepo

    Angular → Frontend modular e escalável

    NestJS → Backend estruturado e robusto

    Go → Cálculos e processamento assíncrono

    Kafka → Comunicação eficiente entre serviços

    Docker → Facilitação do ambiente de desenvolvimento

📂 Estrutura do Projeto

gestor-app/
│── apps/
│ ├── frontend/ # Aplicação Angular
│ ├── backend/ # Backend NestJS (BFF)
│── packages/
│ ├── shared/ # Módulos compartilhados entre frontend e backend
│── package.json
│── turbo.json # Configuração do Turborepo
└── README.md

⚙️ Como Rodar o Projeto
1️⃣ Instalar Dependências

npm install

2️⃣ Rodar em Desenvolvimento

npm run start

Este comando executa todos os pacotes em modo de desenvolvimento utilizando o Turbo.
3️⃣ Build do Projeto

npm run build

4️⃣ Verificar Erros de Código

npm run lint

🔧 Como Funciona o Monorepo com Turbo?

    apps/ → Contém os aplicativos principais (Frontend e Backend).

    packages/ → Contém módulos reutilizáveis.

    turbo.json → Define tarefas paralelas para otimizar a execução.

    infra/ → Contém o banco de dados e configurações de Docker

📜 Licença

Este projeto está sob a licença ISC.

✉️ Autor

Desenvolvido por Giulio Sá.
