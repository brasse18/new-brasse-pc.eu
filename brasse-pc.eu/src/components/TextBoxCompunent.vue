<script setup lang="ts">
const prop = defineProps<{
  text: String
  lineBreak: Number
  split: boolean
}>()
let textToRender: string[] = [];
if (prop.split) {
    textToRender = prop.text.replace(/\. /g, ".\n").split('\n');
}

if (prop.lineBreak !== 0) {
    modifiedText();
}


function modifiedText() {
  const lines = textToRender;
  const modifiedLines: string[] = [];
  let counter = 1;

  for (let i = 0; i < lines.length; i++) {
    modifiedLines.push(lines[i]);
    if ((counter*prop.lineBreak) - i === 0) {
      modifiedLines.push(''); // Lägger till en extra tom rad var 3:e rad (ej på sista raden)
      modifiedLines.push(' ');

    }
  }

  textToRender = modifiedLines; // Återställer punkterna för att behålla meningsstruktur
};
</script>

<template>
  <div class="box">
    <p v-for="(line, index) in textToRender" :key="index">{{ line }}</p>
  </div>
</template>

<style scoped>
.box {
  display: box;
  white-space: pre-wrap;
}
</style>