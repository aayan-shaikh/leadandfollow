import { defineConfig } from 'vite';
import decapCMS from 'vite-plugin-decap-cms';

export default defineConfig({
    plugins: [
        decapCMS(), // ← does all the noExternal / optimizeDeps magic for you
        // …your other plugins
    ],
});