
<template>
 <section @click="navigateTo(props.loc._id)" class="loc-preview">
  <h2>{{ props.loc.name }}</h2>
  <img :src="props.loc.imgUrl" alt="Location Image" />
  <ul class="label-list">
   <li v-for="label, idx in props.loc.labels" :key="idx">{{ label }}</li>
  </ul>
 </section>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router'

const props = defineProps({
 loc: {
  type: Object,

 },
});


const router = useRouter()
function navigateTo(locId) {
 router.push(`/loc/${locId}`)
}
</script>

<style lang="scss" scoped>
.loc-preview {
 box-shadow: 0 0 2px 0px #c9c9c9;
 padding: 10px;
 margin-bottom: 10px;
 text-decoration: none;


 h2 {
  font-size: 18px;
  margin-bottom: 5px;
 }

 img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
 }
}
</style>
