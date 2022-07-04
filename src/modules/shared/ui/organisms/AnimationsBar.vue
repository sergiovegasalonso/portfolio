<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const SquaresAnimation = defineAsyncComponent(() => import("$shared/ui/molecules/SquaresAnimation.vue"));
</script>

<template>
    <footer id="pseudo-footer">
        <squares-animation />
    </footer>
</template>
