<template lang="pug">
.card
  CardHeader(:user="user.user" :team="user.team")
  .card-image
    CardImage(:image="user.thumbnail_url" :clsSend="[]")  
  CardContent(
    :thumbnail="user.thumbnail_url"
    :training_date="user.training_date"
    :video_type="user.video_type"
    :size="user.size"
    :duration="user.duration"
    :total_feedback="user.total_feedback"
    :total_drills="user.total_drills"
  )
</template>
<script>

import CardContent from '../components/Card/CardContentComponent.vue'
import CardHeader from '../components/Card/CardHeaderComponent.vue'
import CardImage from '../components/Card/CardImageComponent.vue'

export default {
  props: ['user'],
  components: {
    CardContent,
    CardHeader,
    CardImage
  },
  name: 'CardTemplate'
}
</script>
<style scoped>
</style>