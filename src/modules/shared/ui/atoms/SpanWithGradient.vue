<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: "Default text",
    },
    gradient: {
        type: String,
        default: "#ff0000 #ffff00 #00ff00 #00ffff #0000ff #ff00ff #ff0000",
    },
});
</script>
<template>
    <span class="span-with-gradient">{{ text }}</span>
</template>

<style scoped>
span.span-with-gradient {
    @apply relative text-white;
}

span.span-with-gradient::before {
    background: linear-gradient(90deg, blue, red);
}
</style>
