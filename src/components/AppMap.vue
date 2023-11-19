<template>
 <section class="app-map">
  <h2>app map</h2>
  <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
   <Marker :options="{ position: center }" />
  </GoogleMap>
 </section>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

</script>

<style></style>