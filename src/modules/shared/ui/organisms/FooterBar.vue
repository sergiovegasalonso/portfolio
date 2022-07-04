<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const MailIcon = defineAsyncComponent(() => import("$shared/ui/atoms/MailIcon.vue"));
</script>

<template>
    <footer id="footer-bar"><span class="made-with-love">Made with love</span><mail-icon /></footer>
</template>

<style scoped>
#footer-bar {
    @apply flex justify-between items-center;
}

#footer-bar > .made-with-love {
    @apply text-xs;
}
</style>
