<template>
  <div class="container">
    <a class="top" :id="index">{{index}}</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  props:['index']
};
</script>

<style lang="less" scoped>
.container {
  border: 1px solid black;
  .top {
    // border-radius: 20%;
    width: 27px;
    height: 15px;
    border-bottom: 5px solid #666;
  }
}
</style>