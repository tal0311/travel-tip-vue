<template>
 <section class="loc-notes">
  <h2>Location Notes</h2>
  <p contenteditable="true" @blur="updateInfo">{{ props.info }}</p>
 </section>
</template>

<script setup>
import { onBeforeMount } from 'vue'
const emit = defineEmits(['update-info'])
const props = defineProps({
 info: {
  type: String,
 },
})


onBeforeMount(() => {

})

function updateInfo(ev) {
 ev.target.innerText
 console.log('text:', ev.target.innerText)
 emit('update-Info', { key: 'note', value: ev.target.innerText })
}

</script>

<style></style>