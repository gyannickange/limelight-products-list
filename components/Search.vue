<template>
  <div class="w-9/12 w-full md:w-9/12 mx-auto mb-8">
    <label for="category" class="block font-medium text-gray-700">Search the current list by category</label>
    <select
      id="category"
      name="category" 
      autocomplete="category"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      v-model="value"
      @change="onSeach(value)"
    >
      <option
        v-for="(category, index) in selectData"
        :key="index"
        :value="category"
      >
        {{category}}
      </option>
    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['selectData'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    ...mapActions([
      'onSeach'
    ])
  }
}
</script>