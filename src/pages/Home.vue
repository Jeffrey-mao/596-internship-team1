<template>
  <div class="app">
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
    <el-form label-width="80px">
      <div class="section">
        Section A: Single Choice—choose the best answer (2 marks each)
        <div class="left" @mouseover="handleMouseOver">Information</div>
      </div>
      <!-- single choice -->
      <el-form-item v-for="item in quesList.slice(0,5)" :key="item.id">
        <SingleChoice
            :title="item.title"
            :isSubmit="isSubmit"
            :aOption="item.a"
            :bOption="item.b"
            :cOption="item.c"
            :dOption="item.d"
            :index="item.id"
            :answer="item.answer"
        ></SingleChoice>
      </el-form-item>
      <!-- multiple -->
      <div class="section">
        Section B: Multiple Choice—choose over one answers (2 marks each)
        <div class="left" @mouseover="handleMouseOver">Information</div>
      </div>
      <el-form-item v-for="item in quesList.slice(5, 10)" :key="item.id">
        <CheckBox
            :isSubmit="isSubmit"
            :title="multiple"
            :index="item.id"
            :answer="item.answer"
            :aOption="item.a"
            :bOption="item.b"
            :cOption="item.c"
            :dOption="item.d"
        ></CheckBox>
      </el-form-item>
      <div class="section">
        Section C: True or False—Select true or false (3 marks each)
        <div class="left" @mouseover="handleMouseOver">Information</div>
      </div>
      <!-- True or false -->
      <el-form-item v-for="item in quesList.slice(10,15)" :key="item.id">
        <isTrue
            :isSubmit="isSubmit"
            :title="item.title"
            :index="item.id"
            :answer="item.answer"
        ></isTrue>
      </el-form-item>
      <!-- Short answer -->
      <div class="section">
        Section D: Evaluate Code—What is the output message of the follow code
        fragments? (3 marks each)
        <div class="left" @mouseover="handleMouseOver">Information</div>
      </div>
      <el-form-item v-for="item in quesList.slice(15)" :key="item.id">
        <ShortQuestion
            :isSubmit="isSubmit"
            :title="item.title"
            :index="item.id"
            :answer="item.answer"
        ></ShortQuestion>
      </el-form-item>
    </el-form>
    <el-button class="submit" type="primary" v-if="!isSubmit" @click="onSubmit"
    >Submit
    </el-button>
    <el-button class="submit" type="primary" v-else @click="onReview"
    >review</el-button
    >
  </div>
</template>

<script>


import SingleChoice from "../components/singleChoice.vue";
import ShortQuestion from "../components/shortQuestion.vue";
import Nav from "../components/nav.vue";
import ques from "../mock/ques.json";
import moment from 'moment';
import CheckBox from "../components/checkBox.vue";
import IsTrue from "../components/isTrue.vue";


export default {
  name: "MyHome",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SingleChoice,
    // eslint-disable-next-line vue/no-unused-components
    ShortQuestion,
    // eslint-disable-next-line vue/no-unused-components
    Nav,
    CheckBox,
    IsTrue,
  },
  data() {
    return {
      quesList: ques,
      isSubmit: false,
      chaTime: 0,
      startTime: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.startTime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log("Jeffrey", this.startTime, "Start to answer");
    const userInfo = {
      userName: "Jeffrey",
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    this.$store.commit("TIME", moment().format("YYYY-MM-DD HH:mm:ss"));
    this.$store.commit("METHODS", "Start！");
  },
  methods: {
    handleMouseOver() {
      console.log('Mouse moved to the "Information"');  // 在控制台输出日志
    },
    onScroll() {
      const path = window.location.href.split("#")[1];
      if (path === "/review") {
        return;
      }
      this.$store.commit("TIME", moment().format("YYYY-MM-DD HH:mm"));
      this.$store.commit("METHODS", "Scroll event");
    },
    onSubmit() {
      const endTime = moment().format("YYYY-MM-DD HH:mm:ss");
      const chaTime = moment(endTime).diff(moment(this.startTime), "seconds");
      console.log(this.startTime, "star==");
      console.log(chaTime, "cha=============");
      window.chaTime = chaTime;

      // const userInfo =JSON.parse(localStorage.getItem("userInfo"));
      console.log("Jeffrey", moment().format("YYYY-MM-DD HH:mm:ss"), "Submitted！");
      this.$store.commit("METHODS", "Submitted！");
      this.$store.commit("TIME", moment().format("YYYY-MM-DD HH:mm:ss"));
      this.isSubmit = true;
    },
    onReview() {
      this.$router.push("/review");
    },
  },
};
</script>

<style lang="less" scoped>
.app {
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
    margin-left: 170px;
    border: 1px solid black;
    width: 867px;
    background-color: #bee5eb;
    text-align: left;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bolder;
    position: relative;
    margin-left: 180px;

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

  .submit {
    margin-left: 40%;
  }
}
</style>
