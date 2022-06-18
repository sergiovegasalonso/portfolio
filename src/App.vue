<script setup lang="ts"></script>

<template>
  <h1>holaaa</h1>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<style>
@font-face {
  font-family: RobotoMono;
  src: url("./assets/Roboto_Mono/static/RobotoMono-Regular.ttf");
  font-display: swap;
}

* {
  font-family: "RobotoMono", monospace;
  color: white;
}

html,
body {
  box-sizing: content-box;
}

body {
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #333;
}
</style>
