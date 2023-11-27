<template>
  <section class="loc-updates">
    <h2>Updates</h2>
    <!-- {{ props.info }} -->
    <ul v-for="update, idx in props.info" :key="idx">
      <li>
        <p>{{ getUpdateDesc(update.type) }}</p>
        <p><span>{{ getFormattedTime(update.updatedAt).date }}</span> | <span> {{ getFormattedTime(update.updatedAt).time
        }}
          </span></p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { utilService } from '@/services/util.service.js'
import { updateService } from '@/services/updates.service';

const props = defineProps({
  info: {
    type: Array
  }
})

function getUpdateDesc(type) {
  return updateService.getUpdateByType(type)
}

function getFormattedTime(ts) {
  return utilService.getFormattedTime(ts)
}

</script>

<style></style>