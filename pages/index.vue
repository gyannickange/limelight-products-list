<template>
  <div class="container mx-auto py-16 px-7">
    <Title
      name="Products"
    />
    <Search
      :selectData="categories"
    />
    <div class="flex flex-wrap justify-center">
      <ProductCard
        v-for="product in products" :key="product.id"
        :img="product.image"
        :name="product.name"
        :price="product.price"
      />
    </div>
    <Pagination
      :totalPages="total_pages"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';

export default {
  watch: {
    '$route.query'() {
      this.$nuxt.refresh();
    }
  },
  async asyncData ({store, route, error}) {
    try {
      let baseUrl = 'https://trayvonnorthern.com/Edgewood-API/public/api/products';
      if (route.query.page) baseUrl =`${baseUrl}?page=${route.query.page}`

      const res = await axios.get(baseUrl)
      store.commit('init', res.data)
      store.commit('initCategories', res.data)
    } catch (err) {
      error({statusCode: 500, message: 'Oops, try again'})
    }
  },
  computed: {
    ...mapState({
      products: state => state.products,
      categories: state => state.categories,
      total_pages: state => state.total_pages,
      last_page: state => state.last_page
    })
  }
}
</script>
