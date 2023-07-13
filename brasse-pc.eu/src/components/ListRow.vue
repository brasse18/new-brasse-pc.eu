<script setup lang="ts">
import type { Item } from '../components/ItamObjekt'
defineProps<{
    item: Item
}>()
</script>

<template>
    <template v-for="(value, key) in item">
        <div v-if="key == 'cost'" class="cost item">
            {{ value }}Kr
        </div>
        <div v-if="key !== 'cost'" class="string item">
            {{ value }}
        </div>
    </template>
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