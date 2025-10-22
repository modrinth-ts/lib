<h1 align="center">
    <img src="https://github.com/modrinth-ts.png" width="75" height="auto">
    <p>@modrinth-ts/lib</p>
</h1>
<p align="center">
    <i>TypeScript client for Labirinth, Modrinth's REST API</i>
</p>

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
> The library version matches [**Labirinth's version**](https://docs.modrinth.com/api/#overview) at the time of syncing.

> [!NOTE]  
> This client is generated using [**@hey-api/openapi-ts**](https://github.com/hey-api/openapi-ts) - consider giving them a star ⭐