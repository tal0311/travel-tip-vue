<template>
    <dialog ref="AppModalRef" @click="clickOutSide" :class="`app-modal ${classType}`">
        <component :is="component" :info="info" @resetModal="hideModal" controllers></component>
    </dialog>
</template>

<script setup>
import VideoModal from '@/components/modal/VideoModal.vue';

import { ref, onMounted, onUnmounted } from 'vue';

const AppModalRef = ref(null);


onMounted(() => {
    window.addEventListener('show-modal', setModal);
    window.addEventListener('hide-modal', hideModal);
})
onUnmounted(() => {
    window.removeEventListener('show-modal', setModal);
    window.removeEventListener('hide-modal', hideModal);
})



const component = ref(null);
const info = ref(null);
const classType = ref(null);

function setModal({ detail }) {
    const modalMap = {
        'video': VideoModal,
    }
    component.value = modalMap[detail.modalType];
    info.value = detail.info;
    classType.value = detail.modalType;
    AppModalRef.value.showModal();

}
function hideModal() {
    console.log('hideModal');


    component.value = null;
    info.value = null;
    classType.value = null;
    AppModalRef.value.close();
}

function clickOutSide(ev) {
    if (ev.target.classList.contains('app-modal')) hideModal();
}


</script>

<style lang="scss" scoped>
    .app-modal {
        
        
        &.video{
           height: 500px;
           overflow-y: hidden;
           
        }
    }

</style>
