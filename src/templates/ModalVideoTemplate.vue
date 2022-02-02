<template lang="pug">
.modal(:class="isActive")
  .modal-background()
  ModalVideoComponent( 
    :video="video",
    :videoTwo="videoTwo"
    :twoVideos="twoVideos"
  )
  button(class="modal-close is-large" aria-label="close" @click="emitToClose(!modal)")

  button(class="button btn-open-another-video"  @click="selectVideo()")
    i(class="fas fa-columns")

.modal(v-if="modalSelectTwoVideo" :class="{'is-active' : modalSelectTwoVideo}")
  .modal-background
    .modal-card()
      button(class="modal-close is-large" aria-label="close" @click="closeSecondModal()")
  .modal-card(style="overflow: auto;")
    div(v-for="user in users" :key="user" @click="selectSecondVideo(user.source_url)").mt-6
      CardTemplate.my-5.mx-5( :user="user")


</template>
<script>
import CardTemplate from '../templates/CardTemplate.vue'
import ModalVideoComponent from '../components/Modal/ModalVideoComponent.vue'

export default {
  name: 'ModalVideoTemplate',
  components: {
    CardTemplate,
    ModalVideoComponent
  },
  emits: [ 'emitToClose' ],
  props: [
    'video', 
    'modal'
  ],
  data(){
    return {
      twoVideos: false,
      isModalActive: this.modal,
      isPlaying: false,
      modalSelectTwoVideo: false,
      videoTwo: '',
      isMobile: false
    }
  },
  unmounted(){
    if(this.$refs.myvideo){
      this.$refs.myvideo.removeAttribute('src')
      this.$refs.myvideo.load();
    }
    if(this.$refs.myvideotwo){
      this.$refs.myvideotwo.removeAttribute('src')
      this.$refs.myvideotwo.load();
    }   
  },
  async mounted() {
    window.onresize = () => this.isMobile = window.innerWidth <= 760    
  },
  watch: {
    isModalActive: function(isModalActive) {
      this.isModalActive = isModalActive
    } 
  },
  computed: { 
    users(){
      return this.$store.getters['homePage/getUsers']
    },
    isModalBackground (){
      return this.modal ? 'modal-background' : ''
    },
    isActive (){   
      return this.isModalActive ? 'is-active' : ''      
    },
  },
  methods: {
    selectSecondVideo(video){
      if(this.$refs.myvideotwo){
        this.$refs.myvideotwo.removeAttribute('src')
        this.$refs.myvideotwo.load();
      } 
      this.videoTwo = video
      this.modalSelectTwoVideo = false
    },
    closeSecondModal(){
      this.videoTwo = ''
      this.modalSelectTwoVideo = !this.modalSelectTwoVideo
      this.twoVideos = false
    },
    selectVideo(){
      this.videoTwo = ''
      this.modalSelectTwoVideo = !this.modalSelectTwoVideo
      this.twoVideos = true
      
    },
    emitToClose(){
      this.$emit('emitToClose')
    }
  },
}
</script>
<style scoped>
  .btn-open-another-video {
    position: absolute;
    top: 13px;
    right: 60px;
  }
  .isMobile-width {
    width: 93vw;
  }
  .modal-header-z-index {
    z-index: 999;
  }
</style>