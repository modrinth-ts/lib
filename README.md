<h1 align="center">
    <img src="https://github.com/modrinth-ts.png" width="75" height="auto">
    <p>@modrinth-ts/lib</p>
</h1>
<p align="center">
    <i>TypeScript client for Labirinth, Modrinth's REST API</i>
</p>

## ⬇️ Installing

```bash
npm install @modrinth-ts/lib
```

```bash
bun add @modrinth-ts/lib
```

```bash
pnpm add @modrinth-ts/lib
```

```bash
yarn add @modrinth-ts/lib
```

## 📦 Importing

### 🧩 SDK

This is the main entry point you should use.

```ts
import * as modrinth from '@modrinth-ts/lib';
```

### 🤝 Underlying client

Use this only when configuring authentication.

```ts
import { client } from '@modrinth-ts/lib/client';
```

> [!IMPORTANT]
> Refer to the [**official Labirinth documentation**](https://docs.modrinth.com/api/) for usage.

> [!IMPORTANT]
> Refer to the [**@hey-api/client-fetch documentation**](https://heyapi.dev/openapi-ts/clients/fetch#auth) for authentication setup.

> [!NOTE]  
> The library version matches [**Labirinth's version**](https://docs.modrinth.com/api/#overview) at the time of syncing, except for the first one.

> [!NOTE]  
> This client is generated using [**@hey-api/openapi-ts**](https://github.com/hey-api/openapi-ts) - consider giving them a star ⭐