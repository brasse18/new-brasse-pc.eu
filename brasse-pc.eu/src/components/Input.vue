<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "100px"
  },
  startString: String
});

const customStyle = reactive({
  width: ""
});

customStyle.width = props.width || "10px";

const emits = defineEmits(["getString"]);
let inputValue: string = props.startString || "";

</script>
<template>
    <div>
        <input type="text" :style="customStyle" v-model="inputValue" @input="$emit('get-string', inputValue)"/>
    </div>
</template>

<style scoped>

</style>