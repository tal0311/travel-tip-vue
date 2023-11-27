<template>
 <section class="loc-weather" v-if="weatherData">
  <h2>Location Weather</h2>
  <h4>Location name: {{ weatherData.name }}</h4>
  <p>Temperature {{ weatherData.temp }} - {{ weatherData.dec }}</p>
  <p>Humidity: {{ weatherData.humidity }}</p>
  <p>Wind Speed: {{ weatherData.windSpeed }}</p>
 </section>
</template>

<script setup>
import { weatherService } from '@/services/weather.service';
import { updateService } from '@/services/updates.service'
import { ref, onBeforeMount } from 'vue'
const props = defineProps({
 info: {
  type: Object,
 },
})

const emit = defineEmits(['update-info'])

const weatherData = ref(null)
async function getWeather() {
 weatherData.value = await weatherService.getWeatherByLocation(props.info)
 emit('update-info', { key: 'weather', value: null })

}

onBeforeMount(() => {
 getWeather()
})

</script>

<style></style>