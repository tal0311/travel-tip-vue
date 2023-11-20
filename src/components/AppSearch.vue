<template>
 <section class="app-search">
  <form @submit.prevent="handleForm">
   <input type="search" v-model="filter.txt" @search="onUserSearch">
   <div class="labels-container">
    <label v-for="item, idx in filterItems" :key="idx" for="">
     {{ item.name }}
     <input class="input-checkbox" v-model="filter[item.name]" type="checkbox" name="boat-trip">
    </label>
   </div>
  </form>
 </section>
</template>

<script setup >
import { ref, watchEffect } from 'vue'

const filterItems = [
 { name: 'forest', label: 'Forest' },
 { name: 'city', label: 'City' },
 { name: 'hiking', label: 'Hiking' },
 { name: 'beach', label: 'Beach' },
 { name: 'boat-trip', label: 'Boat Trip' }
]

const filter = ref({
 txt: '',
 forest: false,
 city: false,
 hiking: false,
 beach: false,
 'boat-trip': false
})

const emit = defineEmits(['search'])

function handleForm() {
 const updatedFilter = { ...filter.txt, }
 Object.keys(filter.value).forEach(key => {
  if (!filter.value[key]) delete filter.value[key]
 })
 updatedFilter.txt = filter.value.txt
 updatedFilter.type = Object.keys(filter.value)
  .filter(key => filter.value[key])
  .map(key => key)

 emit('search', { ...updatedFilter })
}

watchEffect(() => {
 console.log(filter.value)
})



</script>

<style lang="scss"></style>