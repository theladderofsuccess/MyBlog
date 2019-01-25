<template>
  <div class="KZ-FrontPage">
    <header class="header">
      <div class="logoBar">
        <img class="logo" src="../../assets/img/header.jpg" alt>
        <span class="head_title">KongZun's Blog</span>
        <div class="tabs">
          <ul>
            <li v-for="(item, index) in tabs" :key="index" @click="RouteTo(item)">
              <span>{{item.tabName}}</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="content">
      <span>内容</span>
    </div>
    <footer class="footer">
      <span>脚部</span>
    </footer>
  </div>
</template>

<script>
import Tabs from "./tab.js";
export default {
  name: "FrontPage",
  data() {
    return {
      tabs: Tabs.tabs,
    };
  },
  created() {},
  methods: {
    RouteTo(data) {
      this.$router.push({name: data.name})
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/FrontPage.less";
</style>

