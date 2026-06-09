# Convenções

> Padrões que toda ferramenta de IA deve seguir ao gerar ou revisar código neste projeto.
> Quando uma convenção mudar, atualize este arquivo e registre no CHANGELOG.md.

---

## Commits

- Padrão: [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
- Tipos: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`
- Idioma das mensagens: _(pt-BR / en)_

---

## Nomenclatura

| Contexto              | Convenção        |
| --------------------- | ---------------- |
| Funções e variáveis   | camelCase        |
| Classes e componentes | PascalCase       |
| Arquivos              | kebab-case       |
| Constantes            | UPPER_SNAKE_CASE |

---

## Imports

_(ex: sempre absolutos via paths do tsconfig, nunca relativos além de 1 nível)_

---

## Testes

_(ex: arquivo de teste ao lado do arquivo testado, sufixo `.spec.ts`)_

---

## Pull Requests

- Template: ver `.github/pull_request_template.md`
- Revisão mínima: _(ex: 1 aprovação)_
- Branch base: `main`
- Nomenclatura de branches: `tipo/descricao-curta` (ex: `feat/login-page`)
