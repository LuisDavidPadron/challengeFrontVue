<template lang="pug">
figure(class="image" :class="[is96, cardHeaderIcon, is48]")
  img( :src="image" :alt="image" :class="borderRadius")
</template>
<script>
export default {
  name: 'CardImage',
  props: ['image', 'clsSend'],
  computed: {
    borderRadius() {
      return this.clsSend && this.clsSend.find( item => item.includes('br-50')) ? 'is-rounded' : '' 
    },
    is96(){
      return this.clsSend && this.clsSend.find( item => item.includes('is-96x96')) ? 'is-96x96' : '' 
    },
    is48(){
      return this.clsSend && this.clsSend.find( item => item.includes('is-48x48')) ? 'is-48x48' : '' 
    },
    cardHeaderIcon(){
      return this.clsSend && this.clsSend.find( item => item.includes('card-header-icon')) ? 'card-header-icon' : '' 
    }     
  }
}
</script>
<style scoped>

</style>