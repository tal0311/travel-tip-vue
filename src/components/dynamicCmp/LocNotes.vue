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
    type: String
  }
})

onBeforeMount(() => {
  console.log('props:', props.info);
  
})

function updateInfo(ev) {
  ev.target.innerText
  emit('update-Info', { key: 'note', value: ev.target.innerText })
}
</script>

<style lang="scss" scoped>

@import '@/assets/styles/setup/variables.scss';

p{
  padding: 1rem 0 1rem 0.5rem;
  &:focus{
    outline: 1px solid $clr4;
  }
}
</style>
