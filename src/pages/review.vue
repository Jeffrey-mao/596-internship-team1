<template>
  <div>
    <h1>review</h1>
    <h2>Total use:{{ time }}second</h2>
    <div
        class="review"
        v-for="(item, index) in $store.state.home.timeArr"
        :key="index"
    >
      <span>Jeffrey</span>
      <span>{{ item }}</span>
      <span>{{ $store.state.home.methodsArr[index] }}</span>
    </div>
    <!-- <div>{{ a }}</div> -->
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from "vuex"
export default {
  name: "myReview",
  data() {
    return {
      time: 0,
    };
  },
  mounted() {
    console.log("Total use：", window.chaTime);
    this.time = window.chaTime;
    console.log(this.time);
  },
};
</script>

<style scoped>
h1 {
  line-height: 50px;
  text-align: center;
}
.review {
  width: 100%;
  line-height: 30px;
  border: 1px solid black;
  padding-left: 60px;
}
.review:nth-child(even) {
  background-color: greenyellow;
}
</style>