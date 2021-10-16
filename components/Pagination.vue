<template>
  <div class="flex justify-center mt-7">
    <button 
      v-if="$route.query.page > 1"
      class="btn-primary mr-3"
      @click="goTo(parseInt($route.query.page) - 1)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button>
    <template v-for="totalPage in totalPages">
      <button 
        :class="totalPage == $route.query.page ? 'btn-primary-active mr-3' : 'btn-primary mr-3'"
        :key="totalPage"
        @click="goTo(totalPage)"
      >
        {{totalPage}}
      </button>
    </template>
    <button 
      v-if="$route.query.page != totalPages"
      class="btn-primary mr-3"
      @click="goTo(parseInt($route.query.page) + 1 || 2)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['totalPages'],

    methods: {
      goTo(totalPage) {
        this.$router.push({path: '/', query: {page: totalPage}});
      }
    }
  }
</script>

<style>
  
</style>
