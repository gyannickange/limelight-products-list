<template>
  <div class="container mx-auto py-16 px-7">
    <Title
      :name="`Results for category ${$route.query.c} on the page ${$route.query.page}`"
    />
    <div class="pb-8 text-center">
      <NuxtLink :to="{path: '/', query: {page: currentPage}}" class="btn-primary">
        Home page
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right inline-block" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </NuxtLink>
    </div>
    <div class="flex flex-wrap justify-center">
      <ProductCard
        v-for="product in products" :key="product.id"
        :img="product.image"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';

export default {
  watch: {
    '$route.query': '$asyncData'
  },
  async asyncData ({store, error, route}) {
    try {
      let baseUrl = `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=${route.query.page}`;

      const res = await axios.get(baseUrl)
      store.commit('getProductsByCategory', {products: res.data, category_id: route.query.c})
    } catch (err) {
      error({statusCode: 500, message: 'Oops, try again'})
    }
  },

  computed: {
    ...mapState({
      products: state => state.products,
      categories: state => state.categories
    }),
    currentPage() {
      return this.$route.query.page;
    }
  }
}
</script>
