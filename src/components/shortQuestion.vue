<template>
  <div>
    <div class="container" :id="`nav${index}`">
      <div class="left">Question {{ index }}</div>
      <div class="question">ques:{{ title }}</div>
      <div class="input">
        <el-input
            @input="onInput()"
            type="textarea"
            autosize
            label="Answer:"
            placeholder="Please input the answer"
            v-model="textarea"
            :disabled="isSubmit"
        >
        </el-input>
        <el-input
            @input="onInput"
            :value="answer"
            type="textarea"
            disabled="true"
            label="Answer"
            v-show="isSubmit"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
//import { debounce } from "lodash";


export default {
  name: "ShortQuestion",
  props: ["title", "index", "isSubmit", "answer"],
  data() {
    return {
      textarea: "",
      inputData:false,
      inputValue:""
    };
  },
  methods: {
    onInput(value) {
      this.inputValue=value;
      if (this.inputData) {
        return;
      }
      this.inputData=true
      setTimeout(() => {
        this.$store.commit("TIME", moment().format("YYYY-MM-DD HH:mm:ss"));
        this.$store.commit("METHODS", `Question${this.index}，is texting`);
        this.inputData=false
      }, 1000);
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
}
</style>