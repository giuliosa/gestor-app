# Decisões de Arquitetura (ADRs)

Registro de decisões técnicas e arquiteturais relevantes do projeto.

> **Quando criar um ADR?**
> Sempre que uma decisão for difícil de reverter, afetar múltiplas partes do sistema,
> ou que no futuro alguém possa questionar "por que fizemos assim?".

---

## Índice

| #                        | Título                            | Status | Data |
| ------------------------ | --------------------------------- | ------ | ---- |
| [0000](0000-template.md) | Template (não usar como ADR real) | —      | —    |

---

## Como criar um novo ADR

1. Copie `0000-template.md`
2. Renomeie para o próximo número sequencial: `0001-titulo-da-decisao.md`
3. Preencha todos os campos
4. Adicione uma linha na tabela acima
5. Adicione uma entrada no `CHANGELOG.md` da raiz

## Status possíveis

| Status        | Significado                                  |
| ------------- | -------------------------------------------- |
| `proposto`    | Em discussão, ainda não aprovado             |
| `aceito`      | Aprovado e em vigor                          |
| `depreciado`  | Não recomendado, mas ainda em uso            |
| `substituído` | Substituído por outro ADR (link obrigatório) |
