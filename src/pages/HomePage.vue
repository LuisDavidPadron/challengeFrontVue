<template lang="pug">
.container
  .columns
    .column(class="is-12")
      div(:class="{ 'list': !isMobile}")
        div(v-for="user in users" :key="user")
          CardTemplate.my-5.mx-5(:user="user" @click="openModal('',user.source_url)")
  ModalVideoTemplate( 
    v-if="modal" 
    :modal="modal" 
    :video="video" 
    @emitToClose="closeModal()" 
  )
  PaginationComponent.mb-5(
    :page="page"
    :lastPage="lastPage"
    @goLast="getUsers($event)"
    @actual="getUsers($event)"
    @goFirst="getUsers(1)"
  )

</template>
<script>
import CardTemplate from '../templates/CardTemplate.vue'
import ModalVideoTemplate from '../templates/ModalVideoTemplate.vue'
import PaginationComponent from '../components/PaginationComponent.vue'

import axios from "axios";

export default {
  name: 'HomePage',
  components: {
    CardTemplate,
    ModalVideoTemplate,
    PaginationComponent
  },
  computed: {
    users(){
      return this.$store.getters['homePage/getUsers']
    },
    page(){
      return this.$store.getters['homePage/getPage']
    },
    lastPage(){
      return this.$store.getters['homePage/getNumPage']
    }
  },
  data(){
    return {
      isMobile : window.innerWidth <= 760,
      video: '',
      modal: false
    }
  },
  async beforeMount(){
    await this.getUsers()
  },
  async mounted() {
    window.onresize = () => this.isMobile = window.innerWidth <= 760    
  },
  methods: {
    closeModal(){
      this.modal = false
    },
    openModal(modal, video = ''){
      this.modal = !modal
      this.video = video
    },
    async getUsers(position = 1){
      const information = await axios.get(`https://ludimos-videos-dev.s3.eu-central-1.amazonaws.com/test_jsons/feed_page_${position}.json`)
      
      this.$store.commit('homePage/addUser', information.data.data)
      this.$store.commit('homePage/addPage', information.data.page)
      this.$store.commit('homePage/addNumPages', information.data.numPages)
    }   
  }
}
</script>
<style scoped>
  .position-element {
    position: fixed;
    right: 0;
  }
  .list{
    display: grid;
    grid-template-columns: repeat(auto-fill, 30rem);
    gap: 26px;
    place-content: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>