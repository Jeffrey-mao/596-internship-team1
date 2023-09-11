<template>
  <div>
    <h1>review</h1>
    <div v-for="(item, index) in $store.state.home.timeArr" :key="index">
      <span>Jeffrey</span>
      <span>{{ item }}</span>
      <span>{{ $store.state.home.methodsArr[index] }}</span>
    </div>
    <!-- <div>{{ a }}</div> -->
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "myReview",
  data() {},
  mounted() {},
};
</script>

<style>
</style>