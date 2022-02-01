<template lang="pug">
header(class="card-header")
  p(class="card-header-title") {{user.firstname}} {{ user.lastname }} - {{team.name}}
  CardImage(:image="user.profile_pic" :clsSend="['is-96x96', 'card-header-icon','br-50']")  
</template>
<script>
import CardImage from '../Card/CardImageComponent.vue'

export default {
  name: 'CardHeaderComponent',
  components : {
    CardImage
  },
  props: [
    'user',
    'team'
  ]
}
</script>
<style scoped>

</style>