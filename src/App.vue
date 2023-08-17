<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="section">
        Section A: Single Choice—choose the best answer (2 marks each)
        <div class="left">Information</div>
      </div>
      <el-form-item v-for="item in quesList.slice(0, 10)" :key="item.id">
        <SingleChoice
            :title="item.title"
            :aOption="item.a"
            :bOption="item.b"
            :cOption="item.c"
            :dOption="item.d"
            :index="item.id"
        ></SingleChoice>
      </el-form-item>
      <div class="section">
        Section B: Evaluate Code—What is the output message of the follow code
        fragments? (3 marks each)
        <div class="left">Information</div>
      </div>
      <el-form-item v-for="item in quesList.slice(10)" :key="item.id">
        <ShortQuestion :title="item.title" :index="item.id"></ShortQuestion>
      </el-form-item>
    </el-form>
    <!-- <Nav></Nav> -->
  </div>
</template>

<script>


import SingleChoice from "@/components/singleChoice.vue";
import ShortQuestion from "@/components/shortQuestion.vue";
import Nav from "@/components/nav.vue";
import ques from "./mock/ques.json";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SingleChoice,
    // eslint-disable-next-line vue/no-unused-components
    ShortQuestion,
    // eslint-disable-next-line vue/no-unused-components
    Nav,
  },
  data() {
    return {
      quesList: ques,
    };
  },
  mounted() {
    // console.log(ques, "ques===");
    // api.reqQues().then((v) => {
    //   console.log(v.data,'data==============');
    //   this.quesList = v.data;
    // });
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .section {
    margin: 0 auto;
    border: 1px solid black;
    width: 720px;
    background-color: #bee5eb;
    text-align: left;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bolder;
    position: relative;
    margin-left:28%;
    .left {
      position: absolute;
      left: -100px;
      width: 75px;
      font-weight: normal;
      font-size: 16px;
      top: 0;
      background-color: #f8f9fa;
      border: 1px solid #cad0d7;
      padding: 8px;
    }
  }
}
</style>
