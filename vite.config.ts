import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin()],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            $shared: resolve("./src/modules/shared"),
            $pages: resolve("./src/pages"),
        },
    },
    build: {
        chunkSizeWarningLimit: 400,
        rollupOptions: {
            input: ["index.html", "src/main.ts"],
        },
    },
});
