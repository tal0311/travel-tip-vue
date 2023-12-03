<template>
  <section class="app-search">
    <form @submit.prevent="handleForm" class="grid">
      <input
        type="search"
        v-model="filter.txt"
        @search="onUserSearch"
        placeholder="Enter location name..."
      />
      <div class="labels-container grid">
        <label
          v-for="(item, idx) in filterItems"
          :key="idx"
          :for="item.name"
          :class="['grid', item.name, item.checked ? 'checked' : '']"
        >
          <span @click="selectItem(idx)" v-html="$getSvg(item.icon)"></span>

          <input
            class="input-checkbox"
            v-model="filter[item.name]"
            type="checkbox"
            :id="item.name"
            :name="item.name"
          />
        </label>
      </div>
    </form>
  </section>
</template>

<script setup>
import { h, ref, watch } from 'vue'

const filterItems = ref([
  { name: 'forest', label: 'Forest', icon: 'forest', checked: false },
  { name: 'hiking', label: 'Hiking', icon: 'sign', checked: false },
  { name: 'beach', label: 'Beach', icon: 'beach', checked: false },
  { name: 'boat-trip', label: 'Boat Trip', icon: 'sailing', checked: false },
  { name: 'camping', label: 'camping', icon: 'camping', checked: false }
])

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
  const updatedFilter = { txt: filter.value.txt }

  Object.keys(filter.value).forEach((key) => {
    if (!filter.value[key] || key === 'txt') delete filter.value[key]
  })
  updatedFilter.type = Object.keys(filter.value)
    .filter((key) => filter.value[key])
    .map((key) => key)

  emit('search', { ...updatedFilter })
}

function selectItem(idx) {
  filterItems.value[idx].checked = !filterItems.value[idx].checked
  filter.value[filterItems.value[idx].name] = filterItems.value[idx].checked
  handleForm()
}
</script>

<style lang="scss">
@import '@/assets/styles/setup/_variables.scss';

.app-search {
  form {
    gap: 10px;

    input[type='search'] {
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
    background-color: #f1f0f0e8;
    border-radius: 50%;
    padding: 0.2rem 0.3rem 0.1rem;
    place-items: center;

    &.forest.checked {
      background: #8df98de8;
    }

    &.hiking.checked {
      background: #f2f29be8;
    }

    &.beach.checked {
      background: #f88c8ce8;
    }

    &.boat-trip.checked {
      background: #9f9ff5e8;
    }

    &.camping.checked {
      background: #ff8bf7e8;
    }

    input {
      display: none;
    }
  }
}
</style>
