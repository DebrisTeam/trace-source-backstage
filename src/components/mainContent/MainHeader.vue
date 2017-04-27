<template>
  <div class="main-header">
    <div class="content">
      
      <el-dropdown class="right-info" trigger="click">
        <div class="user-info el-dropdown-link" v-bind:class="{active: active}" @mouseenter="dropdownActive" @mouseleave="dropdownActive">
          <div class="avatar">
            <img :src="avatar" width="100%" height="100%" />
          </div>
          <p class="user-name nowrap">{{ userName }}</p>
          <span class="user-down el-icon-arrow-down"></span>
        </div>
        
        <el-dropdown-menu class="dropdown" slot="dropdown">
          <el-dropdown-item class="item">
            <span class="iconfont el-icon-setting"></span>设置
          </el-dropdown-item>
          <el-dropdown-item class="item">
            <span class="iconfont el-icon-date"></span>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
    </div>  
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        active: false,
      }
    },
    
    computed: mapState({
      userName: state => state.userInfo.userName,
      avatar: state => state.userInfo.avatar,
      userId: state => state.userInfo.userId,
      phone: (state) => state.userInfo.phone,
    }),
    
    methods: {
      dropdownActive(event) {
        if (event.type === 'mouseenter' ) {
          this.active = true;
        } else if (event.type === 'mouseleave') {
          this.active = false;
        } else {
          return;
        }
      }
    }
    
  }
</script>

<style scoped="scoped">
  .main-header {
    position: fixed;
    top: 0;
    left: 220px;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid #F0F0F0;
    background-color: #fff;
  }
  .content {
    height: 64px;
  }
  .right-info {
    float: right;
    margin-right: 15px;
  }
  .user-info {
    display: flex;
    padding: 10px;
    width: 160px;
    height: 64px;
    align-items: center;
    justify-content: center;
  }
  .active {
    background-color: #f9f9f9;
  }
  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 40px;
  }
  .user-name {
    margin-left: 10px;
    font-size: 13px;
  }
  .user-down {
    margin-left: 10px;
    font-size: 10px;
  }
  .dropdown {
    width: 200px;
    height: auto;
  }
  .item {
    font-size: 12px;
    color: #777;
  }
  .item .iconfont {
    margin-right: 10px;
  }
</style>