<template>
    <div id="app" @scroll="onScroll">
      <div class="rightCon">
        <div class="title">Quiz navigation</div>
        <div class="right">
          <Nav
              v-for="item in quesList"
              :key="item.id"
              :index="item.id"
          ></Nav>
        </div>
      </div>
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
import moment from 'moment';


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
  methods: {
    onScroll() {
      console.log(moment().format('YYYY-MM-DD HH:mm'),'time');
      console.log("scroll event");
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  .rightCon {
    position: absolute;
    z-index: 1000;
    border: 1px black solid;
    right: 50px;
    width: 325px;
    height: 230px;
    padding: 16px;
    .title {
      font-size: 16px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .section {
    margin-left: 177px;
    border: 1px solid black;
    width: 867px;
    background-color: #bee5eb;
    text-align: left;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bolder;
    position: relative;
    margin-left:421px;
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
