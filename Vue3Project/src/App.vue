<script setup lang="ts">

import Hello from "./components/hello.vue";

</script>

<template>
  <div>
  <h1> ni hao </h1>
      <hello></hello>
    <SvgIcon name="phone" color="pink" width="300px" height="300px"></SvgIcon>
  </div>

</template>

<style scoped lang="scss">
div{
  h1{
    color:$color;
  }
}
</style>
