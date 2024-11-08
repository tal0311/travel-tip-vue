<template>
    <div class="user-profile blur-bg grid">
        <!-- <pre>{{ loggedInUser }}</pre> -->

        <div class="info-container">

            <h3>{{ form.fullname }}</h3>
            <h4>{{ form.username }}</h4>
            <h5>{{ form.email }}</h5>
        </div>
        <!-- user image preview -->
        <section class="user-img-preview">
            <ImageUploader :initialImageUrl="form.imgUrl" @update:image="form.imgUrl = $event" @confirm="onAddPost"
                @cancel="cancelUpload" />
        </section>
    </div>
</template>

<script setup>

import { useUserStore } from '@/stores/userStore';
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { uploadService } from '@/services/upload.service.js'
import ImageUploader from '../components/ImageUploader.vue';

const route = useRoute()
const userStore = useUserStore()

onBeforeMount(() => {
    console.log(userStore);

    loadUser()
})

const loggedInUser = computed(() => userStore.getLoggedIdUser)

// let tempFile = reactive({
//     file: null,
//     src: null
// })

const isTempImag = ref(false)
const isEditor = ref(false)

const form = reactive({
    fullname: loggedInUser.value.fullname,
    username: loggedInUser.value.username,
    email: loggedInUser.value.email,
    imgUrl: loggedInUser.value.imgUrl,
    color: loggedInUser.value.color,
})

function loadUser() {

}

const handleSubmit = () => {
    console.log('submit!', form)
}


async function uploadPostImg(file) {
    const imgUrl = await uploadService.uploadImg(file)
    form.imgUrl = imgUrl

    return imgUrl

}


async function onAddPost() {
    const imgUrl = await uploadPostImg(form.imgUrl)
    await userStore.updateUser('imgUrl', imgUrl)
}
function cancelUpload() {
    isTempImag.value = false
    form.imgUrl = loggedInUser.value.imgUrl
}
</script>

<style lang="scss" scoped>
// C:\Users\USER\Documents\dev\TravelTip-V2\src\assets\styles\styles.scss
// C:\Users\USER\Documents\dev\TravelTip-V2\src\
@import '@/assets/styles/basics/_helpers.scss';

.user-profile {

    gap: 1rem;
    text-align: center;

   

    label.post-img-label {
        position: relative;
        cursor: pointer;


        &:hover {
            background-color: lightblue
        }
    }


}
</style>
