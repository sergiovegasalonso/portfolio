<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const AnimationsBar = defineAsyncComponent(() => import("$shared/ui/organisms/AnimationsBar.vue"));
</script>

<template>
    <main id="home-page" class="relative h-full">Home page.<animations-bar class="absolute bottom-0" /></main>
</template>
