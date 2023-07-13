<script setup lang="ts">
import ListItem from './ListRow.vue'
import type { Item } from '../components/ItamObjekt'
defineProps<{
    msg: string
    arr: Array<Item>
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <div v-for="item in arr">
            <ListItem :item="item"/>
        </div>
    </div>
</template>

<style scoped>
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