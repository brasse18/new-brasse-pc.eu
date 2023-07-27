<script setup lang="ts">
import type { Item } from '../components/ItamObjekt'
import buttonComp from "../components/Button.vue"
import EditRow from './EditRow.vue';
import { ref } from 'vue'

const prop = defineProps<{
    id: number
    item: Item
    edit: boolean
}>()
const editItemRow = ref(false);
//const emit = defineEmits(['edi-Event', 'del-Event']);
const emit = defineEmits(['ediEvent', 'delEvent'])
function toggelEdit() {
    editItemRow.value = !editItemRow.value;
}

function editItem(item: Item) {
    if (item !== undefined) {
    emit('ediEvent', item);
    } else {
        console.log("item from list row is undifind");
    }
}

function delItem() {
    if (prop.id !== undefined) {
    emit('delEvent', prop.id);
    } else {
        console.log("id from list row is undifind");
    }
}

</script>

<template>
    <div class="id item">{{ id }}</div>
    <template v-if="!editItemRow" >
        <template v-for="(value, key) in item">
            <div v-if="key == 'cost'" class="cost item">
                {{ value }}Kr
            </div>
            <div v-if="key !== 'cost'" class="string item">
                {{ value }}
            </div>
        </template>
    </template>
    <template v-else>
        <EditRow :startItem="item" @addItem="editItem" />
        <buttonComp @klick-Event="toggelEdit" class="item" label="Exit" />
    </template>
    <div class="item" v-if="edit && !editItemRow">
        <buttonComp @klick-Event="delItem" label="Del" class="item" />
        <buttonComp @klick-Event="toggelEdit" label="Edit" class="item" />
        <buttonComp label="Upp" class="item" />
        <buttonComp label="Down" class="item" />
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

.id {
    width: 3%;
}
</style>