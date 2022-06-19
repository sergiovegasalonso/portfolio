<script setup lang="ts">
import("pixi.js").then((PIXI) => {
  console.log(PIXI);
});
</script>

<template>
  <h1>holaaa</h1>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<style></style>
