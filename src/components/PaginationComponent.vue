<template lang="pug">
nav(class="pagination" role="navigation" aria-label="pagination")
  ul(class="pagination-list is-flex is-justify-content-center")
    li(v-if="page > 2")
      a(class="pagination-link" @click="$emit('goFirst')" aria-label="Goto page 1") 1
    li(v-if="page > 2")
      <span class="pagination-ellipsis">&hellip;</span>
    li(v-for="(actual, index) in lastPage")
      a.pagination-link( @click="$emit('actual', actual)" :class="{ 'is-current': actual == page }") {{ actual }}
    li(v-if="page < lastPage")
      span(class="pagination-ellipsis") &hellip;
    li(v-if="page < lastPage")
      a(@click="$emit('goLast', lastPage)" class="pagination-link") {{lastPage}} 
</template>
<script>
export default {
  name: "PaginationComponent",
  props: [
    'page',
    'lastPage'
  ],
  data(){
    return{
      last: this.lastPage - 1
    }
  }
}
</script>
<style lang="scss" scoped>

</style>