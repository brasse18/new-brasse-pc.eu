<script setup lang="ts">
defineProps<{
    label: string
}>()

</script>
<template>
    <div>
        <button  @click="$emit('klick-Event')">{{ label }}</button>
    </div>
</template>