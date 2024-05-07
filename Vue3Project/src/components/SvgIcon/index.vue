<template>
  <svg style="width: 30px; height: 30px;">
    <use :xlink:href="prefix+'expand'" fill="red"> </use>
  </svg>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  prefix:{
    type:String,
    default:"#icon-"
  }
})
</script>

<style scoped>

</style>