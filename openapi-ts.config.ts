import { defineConfig } from '@hey-api/openapi-ts';

const MODRINTH_API_SPEC_URL = 'https://docs.modrinth.com/openapi.yaml';

export default defineConfig({
    input: MODRINTH_API_SPEC_URL,
    output: './src/generated',
    plugins: ['@hey-api/client-axios'],
});
