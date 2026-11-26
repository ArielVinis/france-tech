# France Tech

Site institucional da **France Tech** — soluções de software sob medida (web, SaaS e sites).

## Stack

- **Next.js** 16 (App Router) + React 19
- **Tailwind CSS** 4 + **shadcn/ui** (Base UI)
- **GSAP** + **Lenis** (scroll e animações)
- **React Bits** (ShinyText, SplitText, ScrollStack, TrueFocus)
- **next-themes**
- **TypeScript** + **pnpm**

## Começar

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Rotas

| Rota      | Conteúdo                        |
| --------- | ------------------------------- |
| `/`       | Landing France Tech             |
| `/cortex` | Experimento Cortex (preservado) |

## Estrutura

```
src/
  app/              # App Router
  components/       # UI shadcn + React Bits
  data/france-tech.ts
  features/body/    # Secções da landing institucional
  features/cortex/  # Landing Cortex isolada
  lib/              # nav, brand, utils
public/logo.png
```

## Marca

- Tema **escuro** por omissão (branding France Tech)
- Tokens: `#0A0A0A`, `#1E1E1E`, `#C0C0C0`, `#E6E6E6`
- Tipografia: **Sora** (display e corpo — geométrica, sem Inter/Poppins)
- Motion: GSAP estrutural; skills Emil em `.agents/skills/`

## Notas

- Package manager: **pnpm**
- Sem `pnpm build` / commit sem pedido explícito no fluxo de agentes
