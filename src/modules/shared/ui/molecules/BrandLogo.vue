<template>
    <router-link to="/">
        <span class="gradient-text break-word span-with-gradient">Sergio Vegas Alonso</span>
    </router-link>
</template>

<style scoped>
span.span-with-gradient {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: clamp(1.25rem, 5vw, 1.5rem);
    word-wrap: break-word;
    background: linear-gradient(264.51deg, #ffe580 4.38%, #ff7571 11.51%, #ff7270 25.06%, #ea5dad 36.04%, #c2a0fd 47.63%, #9867f0 59.03%, #3bf0e4 69.96%, #33ce43 83.74%, #b2f4b6 95.62%);
    background-position: 58% 50%;
    background-size: 500%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-animation: gradient-shift 15s ease infinite;
    animation: gradient-shift 15s ease infinite;
    -webkit-text-fill-color: transparent;
}

@keyframes gradient-shift {
    0% {
        background-position: 58% 50%;
    }
    25% {
        background-position: 100% 0%;
    }
    75% {
        background-position: 10% 50%;
    }
    to {
        background-position: 58% 50%;
    }
}
</style>
