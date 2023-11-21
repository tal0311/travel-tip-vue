<template>
 <section>
  <div class="user-preview">
   <div v-if="user">
    <img v-if="user.imgUrl" :src="user.imgUrl" />
    <div v-else>{{ getInitials(user.username) }}</div>
   </div>

  </div>
 </section>
</template>

<script setup >
const props = defineProps({
 user: {
  type: Object
 }
})

function getInitials(str) {
 console.log(str);
 const initials = str.split(' ').map(s =>
  s[0].charAt(0).toUpperCase()).join('')
 return initials

}

</script>

<style lang="scss" scoped></style>