<template>
    <div class="user-profile blur-bg grid">
        <!-- <pre>{{ loggedInUser }}</pre> -->

        <div class="info-container">

            <h3>{{ form.fullname }}</h3>
            <h4>{{ form.username }}</h4>
            <h5>{{ form.email }}</h5>
        </div>

        <form @submit.prevent="handleSubmit">

            <input class="upload-btn" @change="previewImg" type="file" id="postImg" name="postImg"
                accept="image/*,video/*">

            <!-- user image preview -->
            <label class="post-img-label" for="postImg">
                <i class="upload-icon grid" v-html="$getSvg('add-media')"></i>

                <template v-if="tempFile.file">
                    <section class="img-edit grid">
                        <div class="img-container">
                            <img :src="tempFile.src" alt="post-img">
                            <i  @click="cancelUpload" v-html="$getSvg('change-img')"></i>
                        </div>
                    </section>
                </template>

                <template v-else>
                    <section class="user-img-preview">
                        <img :src="form.imgUrl" alt="post-img" v-defaultImg:form.imgUrl>
                    </section>
                </template>

            </label>

        </form>



    </div>
</template>

<script setup>

import { useUserStore } from '@/stores/userStore';
import { userService } from '@/services/user.service.js'
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { uploadService } from '@/services/upload.service.js'

const route = useRoute()
const userStore = useUserStore()

onBeforeMount(() => {
    loadUser()
})

const loggedInUser = computed(() => userStore.getLoggedIdUser)

let tempFile = reactive({
    file: null,
    src: null
})

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
    const { url } = await uploadService.uploadImg(file)
    this.post.imgUrl = url

}
function previewImg(ev) {
    const file = ev.type === 'change' ?
        ev.target.files[0] :
        ev.dataTransfer.files[0]
    const img = new Image()
    const reader = new FileReader()
    reader.onload = (ev) => {
        img.src = ev.target.result
        tempFile.src = img.src
        tempFile.file = file
    }
    reader.readAsDataURL(file)
    isEditor.value = true

}

async function onAddPost() {
    await uploadPostImg(tempFile.file)
    // this.addPost({ post: JSON.parse(JSON.stringify(this.post)) })
    // this.$emit('closeModal')
}
function cancelUpload() {
    tempFile = {
        file: null,
        src: null
    }
}
</script>

<style lang="scss" scoped>
// C:\Users\USER\Documents\dev\TravelTip-V2\src\assets\styles\styles.scss
// C:\Users\USER\Documents\dev\TravelTip-V2\src\
@import '@/assets/styles/basics/_helpers.scss';

.user-profile {

    gap: 1rem;

    img {
        border-radius: 10px;
    }

    .info-container {}

    text-align: center;

    form {
        position: relative;
    }

    label.post-img-label {
        position: relative;
        cursor: pointer;


        &:hover {
            background-color: lightblue
        }
    }

    .upload-icon {
        position: absolute;
        top: 50%;
        left: -25%;
        transform: translate(50%, -50%);
    
            background-color: var(el-color-info-light-3);
            background-color: #d3d3d366;
            border-radius: 16px;
            padding: 0.3rem;
        
    }

    .upload-btn {
        display: none;
    }

   
}
</style>
