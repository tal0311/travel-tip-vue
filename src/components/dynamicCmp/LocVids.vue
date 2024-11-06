<template>
    <ul class="clean-list">
        <li v-for="vid in props.info" :key="vid.title">
            <h3>{{ vid.title }}</h3>
            <p>{{ vid.desc }}</p>
          
            <button @click="onVideWatch(vid.vidId)">Watch</button>
        </li>
    </ul>
</template>

<script setup>
import {useGlobals} from '@/hooks.js'
import { onBeforeMount } from 'vue'
const props=defineProps({
    info:{
        type:Array
    }
})

const {$modal} = useGlobals()
onBeforeMount(()=>{
  


    console.log('LocVids mounted', )
})


function onVideWatch(videoId){
    console.log('watching video', videoId)

    $modal.show({modalType:'video',info:{videoId}})
}
</script>

<style lang="scss" scoped></style>