<template>
    <div class="image-uploader">
        <!-- User Image Preview -->
        <label class="post-img-label" for="postImg">
            <i class="icon-svg upload-icon" v-html="$getSvg('add-media')"></i>
            <input class="upload-btn" @change="previewImg" type="file" id="postImg" accept="image/*,video/*">
            <section class="user-img-preview">
                <img :height="props.minHeight" :src="imageUrl" alt="uploaded-img" v-defaultImg:imageUrl>
            </section>
        </label>

        <div v-if="isTempImage" class="actions-container grid grid-dir-cols">
            <i class="svg-icon" @click="cancelUpload" v-html="$getSvg('cancel')"></i>
            <i class="svg-icon" @click="confirmUpload" v-html="$getSvg('confirm')"></i>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { uploadService } from '@/services/upload.service.js';

const props = defineProps({
    initialImageUrl: String,
    minHeight: {
        type: Number,
        default: 400
    }
});
const emit = defineEmits(['update:image', 'confirm', 'cancel']);

const imageUrl = ref(props.initialImageUrl);
const isTempImage = ref(false);

watch(() => props.initialImageUrl, (newVal) => {
    imageUrl.value = newVal;
});

function previewImg(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        imageUrl.value = e.target.result;
        isTempImage.value = true;
    };
    reader.readAsDataURL(file);
}

async function confirmUpload() {
    if (!imageUrl.value) return;
    const uploadedUrl = await uploadService.uploadImg(imageUrl.value);
    emit('update:image', uploadedUrl);
    emit('confirm', uploadedUrl);
    resetUploader();
}

function cancelUpload() {
    imageUrl.value = props.initialImageUrl;
    isTempImage.value = false;
    emit('cancel');
}

function resetUploader() {
    isTempImage.value = false;
}
</script>

<style scoped>
.image-uploader {
    margin:1rem 0;
    position: relative;

    .post-img-label {
        cursor: pointer;
        position: relative;
    }

    .upload-icon {
        position: absolute;
        right: 4rem;
        bottom: 1rem;
        background-color: rgba(211, 211, 211, 0.4);
        border-radius: 16px;
        padding: 0.3rem;
      
    }

    .upload-btn {
        display: none;
      
    }

    .actions-container {
      gap : 1rem;
        i {
            cursor: pointer;
            font-size: 2rem;
            border: 1px solid lightgray;
        }
    }
}
</style>
