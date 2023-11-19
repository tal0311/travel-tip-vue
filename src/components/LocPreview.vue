
<template>
 <div class="loc-preview">
  <h2>{{ props.loc.name }}</h2>
  <p>{{ props.loc.description }}</p>
  <img :src="props.loc.imgUrl" alt="Location Image" />
 </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
 loc: {
  type: Object,

 },
});
</script>

<style scoped>
.loc-preview {
 border: 1px solid #ccc;
 padding: 10px;
 margin-bottom: 10px;
}

.loc-preview h2 {
 font-size: 18px;
 margin-bottom: 5px;
}

.loc-preview p {
 font-size: 14px;
 margin-bottom: 10px;
}

.loc-preview img {
 width: 100%;
 max-height: 200px;
 object-fit: cover;
}
</style>
