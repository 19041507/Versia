# Versia - Plataforma de Treinamento Corporativo

Plataforma premium de treinamento corporativo com identidade visual futurista B2B dark usando Next.js 15.

## 🚀 Tecnologias

- **Next.js 15** - App Router
- **React 18.3**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** - Ícones
- **Motion** - Animações

## 🎨 Identidade Visual

- Gradientes ciano/azul/roxo/magenta (#63E3FF, #2FA7FF, #7A2CFF, #E548FF)
- Fundo escuro (#050505)
- Interface premium B2B
- 100% Responsivo (Mobile + Desktop)

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Rodar produção
pnpm start
```

## 📁 Estrutura do Projeto

```
app/
├── page.tsx                    # Página inicial (detecta mobile/desktop)
├── login-desktop/             # Login Desktop
├── login-mobile/              # Login Mobile
├── dashboard/                 # Dashboard principal
├── courses/                   # Lista de cursos
├── course/[id]/              # Detalhes do curso
├── lesson/[id]/              # Visualização de aula
├── certificate/               # Certificados e conquistas
├── subscription/              # Plano premium
└── profile/                   # Perfil do usuário

components/                  # Componentes reutilizáveis
src/styles/                    # Estilos globais
src/imports/                   # Assets importados
```

## 🔑 Páginas Principais

1. **Login** - Desktop e Mobile adaptáveis
2. **Dashboard** - Estilo streaming com hero header
3. **Cursos** - Catálogo com busca e filtros
4. **Aula** - Modo cinema com player de vídeo
5. **Certificados** - Badges e gamificação
6. **Perfil** - Informações e estatísticas do usuário
7. **Assinatura Premium** - R$ 24,90/mês

## 🎯 Features

- ✅ Auto-detecção de dispositivo (Mobile/Desktop)
- ✅ Navegação fluida com Next.js App Router
- ✅ Sistema de assinatura premium
- ✅ Gamificação com badges e certificados
- ✅ 100% Responsivo
- ✅ Dark theme premium

## 📝 Notas da Migração

Este projeto foi migrado de **Vite** para **Next.js 15** mantendo 100% da identidade visual original.

### Mudanças principais:
- React Router → Next.js App Router (file-based routing)
- `Link` do react-router → `Link` do next/link
- `useNavigate` → `useRouter` (next/navigation)
- Todos os componentes interativos marcados com `'use client'`
- Estrutura de pastas adaptada para App Router

---

**© 2026 Versia** - Plataforma de Treinamento Corporativo Premium
