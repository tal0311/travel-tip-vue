<template>
 <section class="loc-updates">
  <h2>updates</h2>
 </section>
</template>

<script setup>
import { onBeforeMount, } from 'vue'

const props = defineProps({
 info: {
  type: String
 }
})

onBeforeMount(() => {
 console.log('props.info:', props.info)

})

</script>

<style></style>