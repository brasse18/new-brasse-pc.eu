<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OList from '../components/OList.vue'
import { DataHandler } from '../components/DataHandler'
import type { Item } from '../components/ItamObjekt'

const dataHandler: DataHandler = new DataHandler;
const listKey = ref(0);

function updateList() {
    listKey.value += 1;
}

function addItem(item: Item) {
    dataHandler.addItem(item);
    updateList();
}

function delItem(index: number) {
    console.log("lsakjlaksjdlkajsldkjas");
    dataHandler.delItem(index);
    updateList();
}

function editItem(index: number, item: Item) {
    dataHandler.editItem(index, item);
}

onMounted(() => {
    console.log("Mounted hook called");
});

</script>

<template>
    <main>
        <OList @addItem="addItem" @delItem="delItem" @ediItem="editItem" msg="Önskelista" :arr="dataHandler.getData()" :key="listKey" />
        <p>Här är några runor: &#5792;&#5794;&#5798;&#5801;</p>
    </main>
</template>

<style scoped>
@font-face {
    font-family: "Junicode";
    /* Ge typsnittet ett namn */
    src: url('@/assets/fonts/Junicode.ttf');
}

p {
    font-family: 'Junicode', sans-serif;
}

.item {
    display: inline-block;
    padding-inline: 10px;
}
</style>