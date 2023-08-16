<template>
  <div>
    <div class="container">
      <div class="left">Question {{ index }}</div>
      <div class="question">ques:{{ title }}</div>
      <div class="input">
        <el-input
            type="textarea"
            autosize
            label="Answer:"
            placeholder="Please input the answer"
            v-model="textarea"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortQuestion",
  props:['title','index'],
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  border: 1px solid black;
  width: 50%;
  background-color: #bee5eb;
  text-align: left;
  padding: 20px;
  position: relative;
  .left {
    position: absolute;
    left: -100px;
    top: 0;
    background-color: #f8f9fa;
    border: 1px solid #cad0d7;
    padding: 8px;
  }
  .question {
    font-weight: bolder;
    color: #052025;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 24px;
  }
  .top {
    font-style: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>