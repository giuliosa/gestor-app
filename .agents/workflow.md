# Fluxos de Trabalho

---

## Fluxo de desenvolvimento

```
branch feature  →  PR aberto  →  revisão  →  aprovado  →  merge
                                                  ↓
                                         documentar alteração
                                         (ai-docs/ + CHANGELOG)
```

---

## Documentar uma alteração (obrigatório após merge)

### Se afetou arquitetura ou decisão técnica relevante

1. Copie `ai-docs/decisions/0000-template.md`
2. Renomeie para o próximo número: `XXXX-titulo.md`
3. Preencha contexto, decisão, alternativas e consequências
4. Adicione entrada no índice `ai-docs/decisions/README.md`
5. Adicione entrada no `CHANGELOG.md`

### Se alterou uma convenção existente

1. Edite o arquivo correspondente em `ai-docs/`
2. Adicione entrada no `CHANGELOG.md`

### Se foi só bugfix ou refactor interno

1. Adicione entrada no `CHANGELOG.md` apenas

---

## Versionamento

_(Defina aqui quando e como versões são criadas — ex: manual, via CI, por tag git)_
