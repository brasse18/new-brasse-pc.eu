<script setup lang="ts">
import ListItem from './ListRow.vue'
import type { Item } from '../components/ItamObjekt'
import inputComp from "../components/Input.vue"
import buttonComp from "../components/Button.vue" 
defineProps<{
    msg: string
    arr: Array<Item>
}>()

let newItem: Item = {name: "", cost: 0, url: "" };
const emit = defineEmits(['saveItem'])

function saveButton(){
console.log("yyyyyyeeeeeeyyyyyyy");
console.log("Name: " + newItem.name + " Cost: " + newItem.cost + " Url: " + newItem.url)
emit('saveItem', newItem);
}

function setNewName(input)
{
    newItem.name = input;
}

function setNewCost(input)
{
    newItem.cost = input;
}

function setNewUrl(input)
{
    newItem.url = input;
}

</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <div v-for="item in arr">
            <ListItem :item="item"/>
        </div>
    </div>
    <div>
        <inputComp @get-string="setNewName" width="100%" class="item string"/>
        <inputComp @get-string="setNewCost" width="100%" class="item cost"/>
        <inputComp @get-string="setNewUrl" width="100%" class="item string"/>
        <buttonComp @some-event="saveButton" label="Save"  class="item"/>
    </div>

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
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>