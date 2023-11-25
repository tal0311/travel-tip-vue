<template>
 <section class="loc-list" v-if="props.locs">
  <h2>{{ $attrs.header }}</h2>
  <LocPreview v-for="loc in locs" @remove-loc="$emit('remove-loc', $event)" @favorite="$emit('favorite', $event)"
   @onPenToLoc="$emit('onPenToLoc', $event)" :key="loc._id" :loc="loc" />
 </section>

 <AppLoader v-else />
</template>

<script setup>
import AppLoader from '@/components/AppLoader.vue'
import LocPreview from '@/components/LocPreview.vue'

const props = defineProps({
 locs: {
  type: Array,
 },
})

</script>

<style></style>