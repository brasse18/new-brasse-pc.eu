<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menue from './components/Menu.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <Menue id="Menue"/>
  </header>

  <RouterView id="RouterView" />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  width: 100%;
}

.logo {
  padding: 10px;
}

#Menue {
  width: 100%;
}

#RouterView {
  padding-top: 30px;
  padding-left: 30px;
}
</style>
