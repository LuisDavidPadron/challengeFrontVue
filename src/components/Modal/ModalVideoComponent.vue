<template lang="pug">
.modal-card.modal-width
  .columns
    .column.is-flex.is-justify-content-center(:class="{ 'is-12': !twoVideos, 'is-6': twoVideos}")
      video( ref="myvideo" :src="video" media="all and (max-width: 480px)" )
    .column(v-if="twoVideos" :class="{'is-6': twoVideos}")
      video( ref="myvideotwo" :src="videoTwo" media="all and (max-width: 480px)")
.columns.is-flex.mt-2
  .column
    button(class="button" :disabled="isPlaying" @click="play()")
      i(class="fas fa-play")
  .column
    button(class="button" :disabled="!isPlaying" @click="pause()")
      i(class="fas fa-grip-lines-vertical")
  .column
    button(class="button" @click="repeatVideo()")
      i(class="fas fa-redo")
</template>
<script>
export default {
  props: [
    'videoTwo',
    'video',
    'twoVideos'
  ],
  data(){
    return {
      isPlaying: false
    }
  },
  watch: {

  },
  methods: {
    repeatVideo(){
      this.$refs.myvideotwo && ( this.$refs.myvideotwo.currentTime = 0 )
      this.$refs.myvideo && ( this.$refs.myvideo.currentTime = 0 )
    },
    play() {      
      this.$refs.myvideotwo && ( this.$refs.myvideotwo.play() )
      this.$refs.myvideo.play()

      this.isPlaying = !this.isPlaying
    },
    pause() {
      this.$refs.myvideotwo && ( this.$refs.myvideotwo.pause() )
      this.$refs.myvideo.pause()
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>
<style lang="scss" scoped>
  .modal-width { 
    width: 90vw;
    // margin: 3rem 0rem 0rem 0rem;
  }
</style>