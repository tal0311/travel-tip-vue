<template>
 <section class="loc-weather">
  <h2>LocWeather</h2>
  <pre>{{ props.info }}</pre>
 </section>
</template>

<script setup>
import { onBeforeMount } from 'vue'
const props = defineProps({
 info: {
  type: Object,
 },
})


onBeforeMount(() => {
 console.log('props.info:', props.info)
})

</script>

<style></style>