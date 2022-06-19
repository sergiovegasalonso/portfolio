<script setup lang="ts">
const BrandLogo = () => import("$shared/ui/molecules/BrandLogo.vue");
import("pixi.js").then((PIXI) => {
    console.log(PIXI);
});
</script>

<template>
    <div id="app-wrapper">
        <brand-logo />
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <div class="page-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
#app-wrapper {
    @apply px-16 py-8;
}

#app-wrapper > .page-wrapper {
    @apply pt-8;
}
</style>
