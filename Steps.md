repo
│
├─ apps
│ ├─ mobile # Expo app
│ │ ├─ app
│ │ ├─ package.json
│ │ └─ tsconfig.json
│ │
│ └─ api # backend (express / hono / next / lambda)
│ ├─ src
│ ├─ package.json
│ └─ tsconfig.json
│
├─ packages
│ ├─ database # prisma vive aquí
│ │ ├─ prisma
│ │ │ ├─ schema.prisma
│ │ │ └─ migrations
│ │ │
│ │ ├─ src
│ │ │ └─ client.ts
│ │ │
│ │ ├─ package.json
│ │ └─ tsconfig.json
│ │
│ ├─ types
│ │ └─ index.ts
│ │
│ ├─ ui
│ │ └─ components
│
├─ .env
├─ turbo.json
├─ pnpm-workspace.yaml
└─ package.json

## create turbo repo (clean it as you need)

```sh
npx create-turbo@latest
```

## use pnpm

## create expo app (this one has the tabs template)

```sh
cd apps
npx create-expo-app@latest mobile --template tabs
```

# attention here

workspace.yaml

### must have

- packages:
  - "apps/\*"
  - "packages/\*"

## install all packages from root

```sh
pnpm install
```

### all shared packages must set in dependencies

- "dependencies": {
- "@repo/example": "workspace:\*"
- }

### add the metro config that helps expo to find the monorepo packages

- const { getDefaultConfig } = require('expo/metro-config');
- const path = require('path');
- ...

## at this point you can run project from root

- all the apps with "dev" script will run (remember to add the dev script)

```sh
pnpm dev
```

### PRISMA

- create @repo/database package
- create packages/database/package.json

### add the prisma dependencies

- "dependencies": {
- "@prisma/client": "latest"
- },
- "devDependencies": {
- "prisma": "latest"
- }

## run prisma commands

```sh
npx prisma init
```

- this inits all resources that prisma will need (prisma.config, prisma/schema.prisma, .env, etc...)

# configure db

- .env (DATABASE_URL)
