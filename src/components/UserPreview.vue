<template>
  <section class="user-preview">
    <div>
      <div v-if="props.user">
        <img v-if="user.imgUrl" :src="user.imgUrl" />
        <div v-else :style="{ background: props.user.color }">{{ getInitials(user.username) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object
  }
})

function getInitials(str) {
  const initials = str
    .split(' ')
    .map((s) => s[0].charAt(0).toUpperCase())
    .join('')
  return initials
}
</script>

<style lang="scss" scoped>
.user-preview {
  padding: 0.2rem 0.3rem;
  border-radius: 100vh;
  color: #fff;

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
