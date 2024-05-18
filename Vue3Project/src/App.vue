<script setup lang="ts">

import Hello from "./components/hello.vue";
import request from "../utils/request";
import {onMounted} from "vue";
import {reqLogin} from "./api/user";

onMounted(()=>{
reqLogin({username:'admin',password:'123456'})
})

</script>

<template>
  <div>
      <router-view/>
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
