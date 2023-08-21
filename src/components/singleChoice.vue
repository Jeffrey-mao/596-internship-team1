<template>
  <div>
    <div class="container" :id="`nav${index}`">
      <div class="question">ques:{{ question }}</div>
      <div class="left">Question {{ index }}</div>
      <div class="top">Select One:</div>
      <div class="option">
        <el-radio-group v-model="radio" @input="onInput">
          <div>
            <el-radio label="a">a. {{ aOption }}</el-radio>
          </div>
          <div>
            <el-radio label="b">b. {{ bOption }}</el-radio>
          </div>
          <div>
            <el-radio label="c">c. {{ cOption }}</el-radio>
          </div>
          <div>
            <el-radio label="d">d. {{ dOption }}</el-radio>
          </div>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SingleChoice",
  props: ["title", "aOption", "bOption", "cOption", "dOption","index"],
  data() {
    return {
      radio: 0,
    };
  },
  methods: {
    onInput(value) {
      console.log(this.title,'title');
      console.log(moment().format('YYYY-MM-DD HH:mm'), "time");
      console.log(value, "option");
      console.log('input event');
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin-left: 100px;
  border: 1px solid black;
  width: 60%;
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
  .option div {
    margin-bottom: 8px;
    margin-left: 5px;
  }
}
</style>