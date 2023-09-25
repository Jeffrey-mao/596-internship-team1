<template>
  <div>
    <div class="container" :id="`nav${index}`">
      <div class="left">Question {{ index }}</div>
      <div class="question">ques:{{ title }}</div>
      <div class="top">Select One:</div>
      <div class="option">
        <el-checkbox-group v-model="checkList" @change=onChange>
          <div>
            <i
                class="el-icon-check"
                v-show="answer.indexOf('a') != -1 && isSubmit"
            ></i>
            <el-checkbox label="a" :disabled="isSubmit"
            >a. {{ aOption }}</el-checkbox
            >
          </div>
          <div>
            <i
                class="el-icon-check"
                v-show="answer.indexOf('b') != -1 && isSubmit"
            ></i>
            <el-checkbox label="b" :disabled="isSubmit"
            >b. {{ bOption }}</el-checkbox
            >
          </div>
          <div>
            <i
                class="el-icon-check"
                v-show="answer.indexOf('c') != -1 && isSubmit"
            ></i>
            <el-checkbox label="c" :disabled="isSubmit"
            >c. {{ cOption }}</el-checkbox
            >
          </div>
          <div>
            <i
                class="el-icon-check"
                v-show="answer.indexOf('d') != -1 && isSubmit"
            ></i>
            <el-checkbox label="d" :disabled="isSubmit"
            >d. {{ dOption }}</el-checkbox
            >
          </div>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "RadioSelect",
  props: [
    "title",
    "aOption",
    "bOption",
    "cOption",
    "dOption",
    "answer",
    "index",
    "isSubmit",
  ],
  data() {
    return {
      checkList: [],
    };
  },
  methods: {
    onChange(value) {
      value=value.join('')
      this.$store.commit("TIME", moment().format("YYYY-MM-DD HH:mm:ss"));
      this.$store.commit("METHODS", `Question${this.index}，Select${value}`);
    },
  },
  mounted() {
    console.log(this.answer,'Jeffrey');
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
  .el-icon-check {
    font-size: 16px;
  }
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