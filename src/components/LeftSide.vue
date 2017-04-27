<template>
  <div class="left-side">
    <div class="admin-logo">
      <img src="../assets/logo-white.png" width="30" height="30"/>
      <h1 class="logo-text">碎片科技</h1>
    </div>
    <el-menu
      theme="dark"
      router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
     >
      <el-menu-item index="/"><i class="el-icon-message"></i>首页</el-menu-item>
      <el-menu-item index="/farmer"><i class="el-icon-menu"></i>农户列表</el-menu-item>
      <el-menu-item index="/product"><i class="el-icon-setting"></i>农产品列表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen() {

      },
      handleClose() {

      }
    }
  }
</script>

<style scoped="scoped">
  .left-side {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 220px;
    background-color: #324157;
    z-index: 100;
    overflow: auto;
  }
  .admin-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    /*background-color: rgb(1,150,136);*/
   background-color: #1D8CE0;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .logo-text {
    margin-left: 10px;
    color: #fff;
    font-size: 20px;
  }

</style>