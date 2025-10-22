import { $ } from 'bun';
import { client } from '../src/generated/client.gen';

(async () => {
    const { version } = (await client.get({ url: '../' })).data as {
        version: string;
    };
    await $`bun pm version ${version}`;
})();
