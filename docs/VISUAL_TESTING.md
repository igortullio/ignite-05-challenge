# Visual Regression Testing

Este documento descreve o workflow de testes visuais de regressão usando Chromatic.

## Visão Geral

O Chromatic é integrado ao Storybook para capturar screenshots de todos os componentes e detectar alterações visuais não intencionais. Cada pull request aciona testes visuais automaticamente.

## Configuração

### Requisitos

1. **Chromatic Project Token**: Configure `CHROMATIC_PROJECT_TOKEN` nos secrets do GitHub
   - Acesse [chromatic.com](https://www.chromatic.com)
   - Crie um projeto e copie o token
   - No GitHub: Settings > Secrets and variables > Actions > New repository secret

### Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `chromatic.config.json` | Configuração global do Chromatic |
| `.storybook/modes.ts` | Definição de viewports para testes responsivos |
| `.storybook/preview.ts` | Parâmetros do Chromatic por story |
| `.github/workflows/chromatic.yml` | Workflow de CI para testes visuais |

## Viewports Testados

Os testes visuais são executados em múltiplos viewports:

| Modo | Largura | Uso |
|------|---------|-----|
| `mobile` | 320px | Smartphones |
| `tablet` | 768px | Tablets |
| `desktop` | 1024px | Desktops |
| `wide` | 1440px | Monitores grandes |

Por padrão, stories são capturadas em `mobile` e `desktop`.

## Workflow de Aprovação

### Em Pull Requests

1. O CI executa automaticamente ao abrir/atualizar um PR
2. Chromatic captura screenshots de todas as stories
3. Comparação com a baseline (branch main)
4. Status check no PR indica resultado:
   - ✅ **Passed**: Sem alterações visuais
   - ⚠️ **Changed**: Alterações detectadas (requer revisão)
   - ❌ **Failed**: Erro no build

### Revisando Alterações

1. Clique no link do Chromatic no PR status check
2. Review cada alteração no dashboard
3. **Accept**: Aprovar como nova baseline
4. **Deny**: Rejeitar alteração (PR bloqueado)

### Regras de Branch Protection

Configure no GitHub (Settings > Branches > Branch protection rules):

- Marque "Require status checks to pass"
- Adicione "UI Tests" e "Storybook Publish" como required checks

## Configuração por Story

### Desabilitar Snapshot

```tsx
export const DynamicContent: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}
```

### Viewports Personalizados

```tsx
export const ResponsiveComponent: Story = {
  parameters: {
    chromatic: {
      modes: {
        mobile: { viewport: 320 },
        tablet: { viewport: 768 },
        desktop: { viewport: 1200 },
      },
    },
  },
}
```

### Handling de Animações

```tsx
export const AnimatedComponent: Story = {
  parameters: {
    chromatic: {
      delay: 500,              // Aguardar 500ms antes de capturar
      pauseAnimationAtEnd: true, // Pausar animações CSS
    },
  },
}
```

### Ignorar Elementos Dinâmicos

```tsx
// No componente
<div data-chromatic="ignore">
  <DynamicTimestamp />
</div>
```

### Threshold de Diferença

```tsx
export const SensitiveComponent: Story = {
  parameters: {
    chromatic: {
      diffThreshold: 0.2, // 0-1, menor = mais sensível
    },
  },
}
```

## Comandos Locais

```bash
# Executar Chromatic localmente (requer CHROMATIC_PROJECT_TOKEN)
cd packages/docs
CHROMATIC_PROJECT_TOKEN=xxx npm run chromatic

# Build do Storybook para preview local
npm run build
```

## Troubleshooting

### Falsos Positivos

Se houver muitos falsos positivos:
1. Aumente o `diffThreshold` em `.storybook/preview.ts`
2. Use `data-chromatic="ignore"` em elementos dinâmicos
3. Configure `delay` para componentes com animações

### CI Falhando

1. Verifique se `CHROMATIC_PROJECT_TOKEN` está configurado
2. Confirme que o build do Storybook funciona localmente
3. Verifique logs do GitHub Actions

### Snapshots Inconsistentes

1. Use fontes web (Google Fonts) com `font-display: swap`
2. Evite conteúdo baseado em data/hora
3. Mock dados aleatórios nas stories

## Recursos

- [Chromatic Documentation](https://www.chromatic.com/docs/)
- [Storybook Visual Testing](https://storybook.js.org/docs/writing-tests/visual-testing)
- [GitHub Actions Integration](https://www.chromatic.com/docs/github-actions/)
