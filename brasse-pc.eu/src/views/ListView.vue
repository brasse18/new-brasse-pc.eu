<script setup lang="ts">
import { onMounted } from 'vue';
import OList from '../components/OList.vue'
import json from '../assets/json/listData.json'
import type { Item } from '../components/ItamObjekt'



const itemList: Array<Item> = [];
json.forEach(x => {
    //console.log(x.name , x.pris , x.url);
    const newItem: Item = { name: x.name, cost: x.pris, url: x.url };
    itemList.push(newItem);
})

onMounted(() => {
    console.log("Mounted hook called");
    json.push({
        name: "kod",
        pris: 666,
        url: "google.se"
    })
    
});

const t: Array<Function> = [() => { alert("HEJ!"); }];

const f: Array<Object> = [];
</script>

<template>
    <main>
        <OList msg="Önskelista" :arr="itemList" />
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