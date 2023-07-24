<script setup lang="ts">
import type { Item } from '../components/ItamObjekt'
import buttonComp from "../components/Button.vue"
import EditRow from './EditRow.vue';
import { ref } from 'vue'

defineProps<{
    id: number
    item: Item
    edit: boolean
}>()
const editItemRow = ref(false);
const emit = defineEmits(['edi-Event']);
function toggelEdit() {
    editItemRow.value = !editItemRow.value;
}

function editItem(index: number, item: Item) {
    console.log("Item: from ListItem");
    console.log("name: ", item.name);
    console.log("cost: ", item.cost);
    console.log("url: ", item.url);
    emit('edi-Event', index, item);
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
        <EditRow @addItem="editItem" />
    </template>
    <div class="item" v-if="edit, !editItemRow">
        <buttonComp @klick-Event="$emit('del-Event', id)" label="Del" class="item" />
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