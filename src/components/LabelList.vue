<template>
 <ul class="label-list clean-list grid">
  <li v-for="label, idx in props.labels" :key="idx">
   <span v-html="$getSvg(getLabel(label))"></span>
  </li>
 </ul>
</template>

<script setup>
const props = defineProps({
 labels: {
  type: Array,

 },
});


function getLabel(label) {

 const opts = {
  'forest': 'forest',
  'hiking': 'sign',
  'beach': 'beach',
  'boat-trip': 'sailing',
  'camping': 'camping'
 }

 return opts[label] || ''

}
</script>
<style scoped lang="scss">
.label-list {
 grid-auto-flow: column;
 justify-content: end;
 gap: 1rem;
}
</style>