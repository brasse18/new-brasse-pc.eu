<script setup lang="ts">
import {  onMounted, ref } from 'vue'
import OList from '../components/OList.vue'
import savedData from '../assets/json/data.json'
import type { Item } from '../components/ItamObjekt'
import { postData, handleSubmit} from "../components/save"
import inputComp from "../components/Input.vue"
import { getCookie } from '../components/CookiHandler'

function saveData(inItem: Item) {
  console.log("endrat till: " + inItem.name);
  itemList.push(inItem);
  componentKey.value += 1;
  postData(JSON.parse(JSON.stringify(itemList)));
  handleSubmit(JSON.parse(JSON.stringify(itemList)), getCookie("token"));
}

//postData(savedData);

const itemList: Array<Item> = [];
    savedData.forEach(x => {
    //console.log(x.name , x.pris , x.url);
    const newItem: Item = { name: x.name, cost: x.cost, url: x.url };
    itemList.push(newItem);
})
const componentKey = ref(0);

onMounted(() => {
    console.log("Mounted hook called");
});

const t: Array<Function> = [() => { alert("HEJ!"); }];

const f: Array<Object> = [];

</script>

<template>
    <main>
        <OList @saveItem="saveData" msg="Önskelista" :arr="itemList" :key="componentKey" />
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