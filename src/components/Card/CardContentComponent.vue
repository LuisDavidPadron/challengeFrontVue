<template lang="pug">
.card-content
  .media
    .media-left
      CardImage(:image="thumbnail" :clsSend="['is-48x48']")        
    .media-content
      p.title.is-4 Duration : {{duration}}
      p.subtitle.is-6 Size : {{size}} Feedbacks: {{total_feedback}} Drills : {{total_drills}}
  .content
    p.subtitle.is-6 {{video_type}}
    br
    p {{formatDate}}
</template>
<script>
import CardImage from '../Card/CardImageComponent.vue'

export default {
  name: 'CardContentComponent',
  props: [
    'thumbnail',
    'training_date',
    'video_type',
    'size',
    'duration',
    'total_feedback',
    'total_drills'
  ],
  components : {
    CardImage
  },
  computed: {
    formatDate(){
      return new Date(this.training_date).getFullYear() + '/' + (new Date(this.training_date).getMonth() + 1) + '/' + new Date(this.training_date).getDay()
    }
  }
}
</script>
<style scoped>

</style>