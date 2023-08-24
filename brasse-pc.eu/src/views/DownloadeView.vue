<script setup lang="ts">
import RubrikCompunent from '../components/Rubrik.vue'
import fileItem from '../components/FileDownloade.vue'
import { FileHandler } from '../components/FileHandler';
import type { FileTyp } from '../components/fileDataTyp'

const fileHandler: FileHandler = new FileHandler;
const fileList: Array<FileTyp> = fileHandler.getData();


</script>

<template>
  <main>
    <RubrikCompunent msg="Nerladdning" />
    <div class="files" v-for="(item) in fileList">
      <fileItem class="file" :name=item.name :beskrivning=item.description :filePath=item.path />
    </div>
    
  </main>
</template>

<style scoped>
.file {
  margin: 5px;
  height: 100px;
} 
</style>