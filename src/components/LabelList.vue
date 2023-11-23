<template>
 <ul class="label-list">
  <li v-for="label, idx in props.labels" :key="idx">{{ label }}</li>
 </ul>
</template>

<script setup>


const props = defineProps({
 labels: {
  type: Array,

 },
});
</script>
<style></style>