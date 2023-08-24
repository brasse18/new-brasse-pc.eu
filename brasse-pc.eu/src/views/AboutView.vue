<script setup lang="ts">
import TextBoxCompunrnt from '../components/TextBoxCompunent.vue'
import RuneSton from '@/components/RuneSton.vue';
//import TextAboutMe from 'raw-loader!../assets/about.txt'
const prop = defineProps<{
  text: String
  width: Number
}>()
</script>

<template>
  <RuneSton />

</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: grid;
    align-items: center;
  }
}
</style>
