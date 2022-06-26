<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("$shared/ui/organisms/NavBar.vue"));
</script>

<template>
    <div id="app-wrapper">
        <nav-bar />
        <div class="page-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
#app-wrapper {
    @apply px-4 md:px-16 py-8;
}

#app-wrapper > .page-wrapper {
    @apply pt-8;
}
</style>
