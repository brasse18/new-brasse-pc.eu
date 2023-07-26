<script setup lang="ts">
import { ref } from 'vue'
import ListRow from './ListRow.vue'
import type { Item } from '../components/ItamObjekt'
import buttonComp from "../components/Button.vue"
import EditRow from './EditRow.vue'
const props = defineProps<{
    msg: string
    arr: Array<Item>
}>()

const emit = defineEmits(['addItem', 'delItem', 'ediItem']);
const startEditItem: Item = { name: "", cost: 0, url: "" };
const showAddControl = ref(false);
const showEditControl = ref(false);
const editControlKey = ref(0);
const arrKey = ref(0);

function addItem(newItem: Item) {
    emit('addItem', newItem);
}

function delItem(index: number) {
    emit('delItem', index);
}

function editItem(index: number, item: Item) {
    emit("ediItem", index, item);
}

function updateEditControl() {
    editControlKey.value += 1;
}

function toggleEdit() {
    showEditControl.value = !showEditControl.value;
    updateEditControl();
}

function toggleAdd() {
    showAddControl.value = !showAddControl.value;
}

</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <div class="control">
            <buttonComp @klick-Event="toggleAdd" label="Add" class="item" />
            <buttonComp @klick-Event="toggleEdit" label="Edit" class="item" />
        </div>

        <div v-for="(item, index) in arr" :key="index">
            <ListRow @delEvent="delItem" @ediEvent="editItem" :item="item" :id="index" :edit="showEditControl" />
        </div>
    </div>
    <template v-if="showAddControl">
        <EditRow :startItem="startEditItem" @addItem="addItem" />
    </template>
</template>

<style scoped>
.editRow {
    margin-bottom: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 8px;
}

.control {
    margin-bottom: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 8px;
    background-color: #bebebe;
    width: 80%;
}

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