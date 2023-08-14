<template>
  <div>
    <div class="container">
      <div class="question">ques:{{ question }}</div>
      <div class="top">Select One:</div>
      <div class="option">
        <el-radio-group v-model="radio">
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
export default {
  name: "RadioSelect",
  props: ["question", "aOption", "bOption", "cOption", "dOption"],
  data() {
    return {
      radio: 0,
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