<script setup lang="ts">
import Rubrik from './Rubrik.vue'
import Routs from './Routs.vue'

const emit = defineEmits(['loggedOut']);
function loggedOut() {
  emit('loggedOut');
}
</script>

<template>
    <div class="wrapper">
      <Rubrik msg="Brasses Server" />
      <Routs @loggedOut="loggedOut" class="Routs"/>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
  }

.Routs {
    background-color: #8a8a8a;
    border-radius: 8px;
    width: 100%;
}
</style>