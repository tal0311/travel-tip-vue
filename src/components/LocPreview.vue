<template>
  <section @click="navigateTo(props.loc._id)" class="loc-preview">
    <header class="grid loc-header">
      <h2>{{ props.loc.name }}</h2>
      <button class="icon right" data-title="Toggle bookmark" @click.stop="addToFav" v-html="$getSvg(getIcon)"></button>
    </header>
    <img height="400" :src="props.loc.imgUrl" alt="Location Image" />
    <LabelList :labels="props.loc.labels" isPreview="true" />
    <div class="loc-actions">
      <button data-title="Remove location" class="icon remove-loc action-in-hover" @click.stop="removeLoc"
        v-html="$getSvg('remove')"></button>
      <button data-title="Pen map to location" class="icon pen-loc action-in-hover" @click.stop="penToLocation"
        v-html="$getSvg('loc')"></button>
    </div>
  </section>
</template>

<script setup>
import LabelList from '@/components/LabelList.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  loc: {
    type: Object
  }
})

const emit = defineEmits(['remove-loc', 'favorite', 'onPenToLoc'])
const router = useRouter()

function navigateTo(locId) {
  router.push(`/loc/${locId}`)
}

function removeLoc() {
  emit('remove-loc', props.loc._id)
}
function addToFav() {
  emit('favorite', props.loc._id)
}

function penToLocation() {
  const { lat, lng } = props.loc
  emit('onPenToLoc', { lat, lng })
}

const getIcon = computed(() => {
  return props.loc.isFav ? 'star' : 'star-full'
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/setup/_variables.scss';

.loc-preview {
  cursor: pointer;
  border: 1px solid $clr8;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  text-decoration: none;

  .loc-header {
    grid-auto-flow: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
  }

  .action-in-hover {
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
  }

  &:hover {
    .action-in-hover {
      opacity: 1;
    }
  }
}
</style>
