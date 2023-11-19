<template>
 <section class="loc-notes">
  <h2>LocNotes</h2>
  {{ props.info }}
 </section>
</template>

<script setup>

import { onBeforeMount } from 'vue'

onBeforeMount(() => {
 console.log('props.info:', props.info)
})
const props = defineProps({
 info: {
  type: String,
 },
})

</script>

<style></style>