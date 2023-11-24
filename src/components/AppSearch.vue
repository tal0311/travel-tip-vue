<template>
 <section class="app-search">
  <form @submit.prevent="handleForm" class="grid">
   <input type="search" v-model="filter.txt" @search="onUserSearch" placeholder="Enter location name...">
   <div class="labels-container grid">
    <label class="grid" v-for="item, idx in filterItems" :key="idx" :for="item.name">
     <span v-html="$getSvg(item.icon)"></span>
     <input class="input-checkbox" v-model="filter[item.name]" type="checkbox" :id="item.name" :name="item.name">
    </label>
   </div>
  </form>
 </section>
</template>

<script setup >
import { ref, watchEffect } from 'vue'

const filterItems = [
 { name: 'forest', label: 'Forest', icon: 'forest' },
 { name: 'hiking', label: 'Hiking', icon: 'sign' },
 { name: 'beach', label: 'Beach', icon: 'beach' },
 { name: 'boat-trip', label: 'Boat Trip', icon: 'sailing' },
 { name: 'camping', label: 'camping', icon: 'camping' }
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

<style lang="scss">
@import '@/assets/styles/setup/_variables.scss';

.app-search {
 form {
  gap: 10px;

  input[type=search] {
   font-size: 1.2rem;
   padding: 0.3rem;
   border-radius: 4px;
   border: none;
   background: #f1f0f0e8;

   &::placeholder {
    color: $clr4;
   }

   &:focus {
    outline: 2px solid lightgreen;
    background: none;
   }
  }

 }
}

.labels-container {
 grid-auto-flow: column;
 justify-content: space-between;
 margin-block-end: 0.5rem;

 label {
  grid-auto-flow: column;
  justify-content: start;
  background: #f1f0f0e8;
  border-radius: 50%;
  padding: 0.2rem 0.3rem 0.1rem;
  place-items: center;

  input {
   display: none;

   &:checked {
    &::after {
     content: "*";
     display: inline-block;
     width: 12px;
     height: 12px;
    }
   }
  }
 }
}
</style>