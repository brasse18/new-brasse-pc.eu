<script setup lang="ts">
import inputComp from "../components/Input.vue"
import buttonComp from "../components/Button.vue"
import type { Item } from '../components/ItamObjekt'

const prop = defineProps<{
    startItem: Item
}>()

let newItem: Item = { name: "", cost: 0, url: "" };
const emit = defineEmits(['addItem'])

function addItem() {
    emit('addItem', newItem);
}

function setNewName(input: string) {
    newItem.name = input;
}

function setNewCost(input: string) {
    newItem.cost = Number(input);
}

function setNewUrl(input: string) {
    newItem.url = input;
}

</script>
<template>
    <inputComp :startString="startItem.name"  @get-string="setNewName" width="100%" class="item string" />
    <inputComp :startString="String(startItem.cost)"  @get-string="setNewCost" width="100%" class="item cost" />
    <inputComp :startString="startItem.url"  @get-string="setNewUrl"  width="100%" class="item string" />
    <buttonComp @klick-Event="addItem"   label="Save" class="item" />
</template>

<style scoped>
.item {
    display: inline-block;
    padding-inline: 10px;
}

.cost {
    width: 10%;
}

.string {
    width: 30%;
}
</style>