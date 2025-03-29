![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# Gestor App 🚀

Gestor App é uma aplicação modular para gestão empresarial, utilizando monorepo com Turborepo. O objetivo é permitir a expansão para diversos módulos no futuro, começando pelo gerenciamento de funcionários.

## Documentação

[Notion](https://www.notion.so/giulio-sa/Gestor-App-1c5afa9effc5809b908fe5c69a9ae132?pvs=4)

### 📂 Estrutura do Projeto

gestor-app:

- apps/
  - frontend/ Aplicação Angular
  - backend/ Backend NestJS (BFF)
- packages/
  - shared/ # Módulos compartilhados entre frontend e backend
- package.json
- turbo.json # Configuração do Turborepo
- README.md

### 🔧 Como Funciona o Monorepo com Turbo?

    apps/ → Contém os aplicativos principais (Frontend e Backend).

    packages/ → Contém módulos reutilizáveis.

    turbo.json → Define tarefas paralelas para otimizar a execução.

    infra/ → Contém o banco de dados e configurações de Docker

## 📌 Tecnologias Utilizadas

**Client:** Angular, Turborepo, TailwindCSS

**Server:** Node, NestJs, Go, Kafka

**Infra:** Docker

## ⚙️ Como Rodar o Projeto

1️⃣ Instalar Dependências

```bash
  npm install
```

2️⃣ Rodar em Desenvolvimento

```bash
npm run start
```

Este comando executa todos os pacotes em modo de desenvolvimento utilizando o Turbo.

3️⃣ Build do Projeto

```bash
npm run build
```

4️⃣ Verificar Erros de Código

```bash
npm run lint
```

## 📜 Licença

[MIT](https://choosealicense.com/licenses/mit/)

## ✉️ Authors

- [@giuliosa](https://github.com/giuliosa)
