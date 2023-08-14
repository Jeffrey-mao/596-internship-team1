<template>
  <div id="app">
    <el-button type="success">11</el-button>
    <RadioSelect></RadioSelect>
  </div>
</template>
aaaaaaaa
<script>
// import HelloWorld from './components/HelloWorld.vue'
import RadioSelect from "./components/radioSelect.vue";

export default {
  name: "App",
  components: {
    RadioSelect,
  },
  data() {
    return {
      radio: 1,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
