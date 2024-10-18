<template>
    <iframe src="https://www.youtube.com/embed/1hPV_xWBzSk" frameborder="0" allowfullscreen></iframe>

</template>

<script setup>

import { onMounted } from 'vue';
onMounted(()=>{
    console.log('VideoModal mounted');
    
})

</script>

<style lang="scss" scoped>
    iframe {
        width: 100%;
        height: 100%;
    }

</style>