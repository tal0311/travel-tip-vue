import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";

export const useCounterStore = defineStore('loc', () => {
  const locs = ref(null)

  const getLocs = computed(() => count.value)

  async function loadLocs() {
    locs.value = await locService.query()
  }

  return { count, getLocs, loadLocs }
})
