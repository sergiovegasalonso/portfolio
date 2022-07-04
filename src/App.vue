<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("$shared/ui/organisms/NavBar.vue"));
const PseudoFooter = defineAsyncComponent(() => import("$shared/ui/organisms/PseudoFooter.vue"));
</script>

<template>
    <div id="app-wrapper">
        <nav-bar />
        <div class="page-wrapper">
            <router-view></router-view>
        </div>
        <pseudo-footer />
    </div>
</template>

<style scoped>
#app-wrapper {
    @apply flex flex-col h-screen px-4 md:px-16 py-8;
}

#app-wrapper > .page-wrapper {
    @apply flex-1 pt-8;
}
</style>
