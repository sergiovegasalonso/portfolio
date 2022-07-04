<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("$shared/ui/organisms/NavBar.vue"));
const FooterBar = defineAsyncComponent(() => import("$shared/ui/organisms/FooterBar.vue"));
</script>

<template>
    <div id="app-wrapper">
        <nav-bar />
        <div class="page-wrapper">
            <router-view></router-view>
        </div>
        <footer-bar />
    </div>
</template>

<style scoped>
#app-wrapper {
    @apply fixed inset-0 flex flex-col px-4 md:px-16 py-8;
}

#app-wrapper > .page-wrapper {
    @apply flex-1 py-14;
}
</style>
