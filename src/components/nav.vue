<template>
  <div class="container">
    <a class="top" :href="`#nav${index}`">{{ index }}</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  props: ["index"],
  mounted() {
    // console.log("title==");
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 27px;
  height: 21px;
  margin: 6px;
  text-align: center;
  border: 1px solid black;

  .top {
    // border-radius: 20%;
    width: 27px;
    height: 15px;
    border-bottom: 15px solid #666;

    a {
      cursor: pointer;
    }
  }
}
</style>