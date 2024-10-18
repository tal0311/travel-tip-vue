<template>
  <ul :class="['label-list clean-list grid', $attrs.isPreview ? 'is-preview' : 'blur-bg']">

    <li v-for="( label, idx ) in   labelList  " :key="idx">
      <span @click="emit('update-labels' ,label)" :class="isLocLabel(label)" v-html="$getSvg(getLabel(label))"></span>
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  labels: {
    type: Array
  }
})

const emit = defineEmits(['update-labels'])

const labelList = ref(['beach', 'hiking', 'camping', 'boat-trip', 'forest'])

function isLocLabel(label) {
  return props?.labels?.includes(label) ? 'g-icon regular' : 'g-icon bold'
}
function getLabel(label) {
  const opts = {
    forest: 'forest',
    hiking: 'sign',
    beach: 'beach',
    'boat-trip': 'sailing',
    camping: 'camping'
  }


  return opts[label] || ''
}

function updateLabel(label) {
  emit('update-labels', label)
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/basics/_helpers.scss';

.label-list:not(.is-preview) {
  position: absolute;
  justify-content: end;
  transform: translateY(-110%);
  right: 0.5rem;
  cursor: pointer;
}

.label-list.is-preview {
  grid-auto-flow: column;
  justify-content: end;
  gap: 0.3rem;
}

.g-icon {

  &.bold {
    fill: rgb(158, 158, 158);

  }
}
</style>
