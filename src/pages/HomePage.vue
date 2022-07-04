<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const PseudoFooter = defineAsyncComponent(() => import("$shared/ui/organisms/PseudoFooter.vue"));
</script>

<template>
    <main id="home-page" class="relative h-full">Home page.<pseudo-footer class="absolute bottom-0" /></main>
</template>
