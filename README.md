# Portfólio de Desenvolvimento Web

Este repositório contém um portfólio moderno de desenvolvimento web, com frontend em Next.js, backend em NestJS e um core compartilhado de tipos e modelos. O objetivo é apresentar projetos, tecnologias e experiências de forma interativa, responsiva e escalável.

## Estrutura do Projeto

```
/
├── backend/   # API NestJS + Prisma
├── core/      # Tipos e modelos TypeScript compartilhados
└── frontend/  # Aplicação Next.js (React)
```

- **backend/**: API RESTful para projetos e tecnologias, integra com banco PostgreSQL via Prisma.
- **core/**: Tipos TypeScript reutilizados no frontend e backend.
- **frontend/**: Interface web responsiva, com carrossel de projetos, chat interativo e integração com a API.

## Tecnologias Utilizadas

- **Frontend:** Next.js, React, Tailwind CSS, Radix UI, Embla Carousel, React Markdown
- **Backend:** NestJS, Prisma ORM, PostgreSQL
- **Compartilhado:** TypeScript
- **Outros:** Docker, ESLint, Prettier

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Docker (opcional, para banco de dados)
- PostgreSQL (caso não use Docker)

### 1. Clone o repositório

```bash
git clone https://github.com/tematz/ai_portfolio.git
cd ai_portfolio
```

### 2. Configure o banco de dados

Você pode rodar um PostgreSQL localmente ou via Docker:

```bash
docker run --name portfolio-db -e POSTGRES_PASSWORD=senha -e POSTGRES_DB=portfolio -p 5432:5432 -d postgres
```

Crie um arquivo `.env` em `/backend` com:

```
DATABASE_URL=postgresql://postgres:senha@localhost:5432/portfolio
```

### 3. Instale as dependências

```bash
npm install
cd backend && npm install
cd ../core && npm install
cd ../frontend && npm install
```

### 4. Rode as migrações e popular o banco

```bash
cd backend
npx prisma migrate deploy
npx prisma db seed # (se houver seed configurado)
```

### 5. Inicie o projeto

Na raiz do projeto:

```bash
npm run dev
```

Isso irá iniciar o backend (NestJS) e o frontend (Next.js) simultaneamente.

Acesse [http://localhost:3000](http://localhost:3000) para ver o portfólio.

## Scripts úteis

- `npm run dev` — Inicia frontend e backend em modo desenvolvimento
- `npm run build` — Gera build de produção do frontend
- `cd backend && npm run start:dev` — Apenas backend
- `cd frontend && npm run dev` — Apenas frontend

## Deploy

- O frontend pode ser facilmente hospedado no [Vercel](https://vercel.com).
- O backend pode ser deployado em qualquer serviço Node.js (Heroku, Railway, AWS, etc).
- Use o Dockerfile para deploy simplificado do backend.
