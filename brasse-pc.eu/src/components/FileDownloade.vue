<script setup lang="ts">
import { FileDownloadedHandler } from '../components/FileDownloadedHandler'
import buttonCompunent from '../components/Button.vue'
import { ref } from 'vue'

const prop = defineProps<{
  name: string
  beskrivning: string
  filePath: string
}>()
const file = new FileDownloadedHandler(prop.filePath, prop.name);
const sohwAbout = ref(false);
const aboutKey = ref(0);

function toogelAbout() {
  sohwAbout.value = !sohwAbout.value;
  aboutKey.value += 1;
}

</script>

<template>
  <div class="file">
    <h1 class="FileName green">{{ name }}</h1>
    <p class="FileBeskrivning" v-if="sohwAbout" :key="aboutKey"> {{ beskrivning }} </p>
    <div class="control">
      <buttonCompunent label="Downloade" @klick-Event="file.download" />
      <buttonCompunent class="right" label="Show Deskriptning" @klick-Event="toogelAbout" />
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped>
.right {
  right: 0px;
}
.control {
  display: flex;
}
.FileBeskrivning {
  margin-top: -44px;
}
.file {
  height: 100px;
  border-radius: 8px;
  background:linear-gradient(to bottom, grey, black);
  display: inline-block;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  padding: 10px;
  text-align: center;
}

p {
  background-color: #888888;
  padding: 10px;
}
</style>