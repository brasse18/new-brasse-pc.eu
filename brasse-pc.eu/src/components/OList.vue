<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import ListRow from './ListRow.vue'
import type { Item } from '../components/ItamObjekt'
import buttonComp from "../components/Button.vue"
import EditRow from './EditRow.vue'
import { getCookie } from '../components/CookiHandler';
import { validate } from '../components/APIHandler';
import type { promises } from 'dns'
const props = defineProps<{
    msg: string
    arr: Array<Item>
}>()

const emit = defineEmits(['addItem', 'delItem', 'ediItem']);
const startEditItem: Item = { name: "", cost: 0, url: "" };
const showAddControl = ref(false);
const showEditControl = ref(false);
const showEditControlKey = ref(0);
const editControlKey = ref(0);
const showEditControlPanel = ref(false);
const showEditControlPanelKey = ref(0);

async function checkAdmin(): promises<boolean> {
    if (getCookie("token") !== "") {
        showEditControlPanel.value = await validate(getCookie("token"));
        //console.log("hhhhh: ", await validate(getCookie("token")));
        //console.log("testend har körst " + showEditControlPanel.value);
        showEditControlPanelKey.value += 1;
    }
    return showEditControlPanel.value;
}

onMounted(async () => {
    await checkAdmin();
});

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
        <h1 class="green">{{ props.msg }}</h1>
        <template v-if="showEditControlPanel">
            <div class="control">
                <buttonComp @klick-Event="toggleAdd" label="Add" class="item" />
                <buttonComp @klick-Event="toggleEdit" label="Edit" class="item" />
            </div>
        </template>

        <div v-for="(item, index) in props.arr" :key="index">
            <ListRow @delEvent="delItem" @ediEvent="editItem" :item="item" :id="index" :edit="showEditControl"
                :key="showEditControlKey" />
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