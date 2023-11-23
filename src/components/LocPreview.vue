
<template>
 <section @click="navigateTo(props.loc._id)" class="loc-preview">
  <h2>{{ props.loc.name }}</h2>
  <img height="400" :src="props.loc.imgUrl" alt="Location Image" />
  <LabelList :labels="props.loc.labels" />
  <div class="loc-actions">
   <button @click.stop="removeLoc">remove</button>
  </div>
 </section>
</template>

<script setup>
import LabelList from '@/components/LabelList.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
 loc: {
  type: Object,

 },
});

const emit = defineEmits(['remove-loc'])
const router = useRouter()
function navigateTo(locId) {
 router.push(`/loc/${locId}`)
}

function removeLoc() {
 emit('remove-loc', props.loc._id)
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
  height: 200px;
  object-fit: cover;
 }
}
</style>
