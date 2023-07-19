<script setup lang="ts">
defineProps<{
    label: string
}>()
const emits = defineEmits(["sendString"]);

function sendStringToParent() {
    const myString = "Hello from child";
    emits("sendString", myString);
}

</script>
<template>
    <div>
        <button  @click="$emit('someEvent')">{{ label }}</button>
    </div>
</template>