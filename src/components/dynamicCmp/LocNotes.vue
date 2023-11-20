<template>
 <section class="loc-notes">
  <h2>LocNotes</h2>
  {{ props.info }}
 </section>
</template>

<script setup>
import { onBeforeMount } from 'vue'

const props = defineProps({
 info: {
  type: String,
 },
})


onBeforeMount(() => {
 console.log('props.info:', props.info)
})

</script>

<style></style>