import { defineConfig } from '@hey-api/openapi-ts';

const MODRINTH_API_SPEC_URL =
    'https://raw.githubusercontent.com/modrinth/code/refs/heads/main/apps/docs/public/openapi.yaml';

export default defineConfig({
    input: MODRINTH_API_SPEC_URL,
    output: './src/generated',
    plugins: ['@hey-api/client-fetch'],
});
