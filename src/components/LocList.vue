<template>
 <section class="loc-list" v-if="props.locs">
  <h2>loc list</h2>
  <pre>{{ locs }}</pre>
  <LocPreview v-for="loc in locs" :key="loc._id" :loc="loc" />
 </section>
</template>

<script setup>
// import { defineProps } from 'vue'
import LocPreview from '@/components/LocPreview.vue'

const props = defineProps({
 locs: {
  type: Array,


 },

})

</script>

<style></style>