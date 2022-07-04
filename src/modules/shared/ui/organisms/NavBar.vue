<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const BrandLogo = defineAsyncComponent(() => import("$shared/ui/molecules/BrandLogo.vue"));
</script>

<template>
    <header id="header">
        <brand-logo />
        <nav>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </header>
</template>

<style scoped>
#header {
    @apply flex flex-col justify-center md:flex-row md:justify-between md:items-center;
}

#header nav {
    @apply flex justify-evenly;
}

#header nav > a {
    @apply p-4 underline decoration-dotted decoration-2 underline-offset-8;
}

#header nav > a.router-link-active {
    @apply decoration-yellow decoration-solid;
}
</style>
