import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin()],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    build: {
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            input: ["index.html", "src/main.ts"],
        },
    },
});
