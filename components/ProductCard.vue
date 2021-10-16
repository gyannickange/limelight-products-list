<template>
  <div class="w-full m-2 relative cursor-pointer overflow-hidden max-w-18">
    <div :style="`backgroundImage: url('${img}')`" class="rounded-lg h-64 w-full transition-all bg-center bg-cover"></div>
    <div class="overlay absolute w-full text-center p-1 bottom-0 text-white h-14 rounded-b-lg bg-black bg-opacity-75">
      <h3 class="font-medium">{{ name }}</h3>
      <p class="font-bold text-sm">{{ price }} $</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'img',
      'name',
      'price'
    ]
  }
</script>
