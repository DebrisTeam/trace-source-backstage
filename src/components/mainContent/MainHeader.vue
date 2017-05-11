<template>
    <div class="main-header">
        <div class="content">
            <div class="left-content">
                <img src="../../assets/logo-white.png" width="24" height="24"/>
                <h1 class="logo-text">穗片农业</h1>
                <span class="line"></span>
                <div class="village-name">五福村</div>
                <router-link to="/select-village">
                    <div class="change-village">切换到村</div>
                </router-link>
            </div>
            <div class="right-content">
                <div class="margin-r-15">
                    <el-input
                      size="small"
                      placeholder="请输入内容"
                      icon="search"
                      :on-icon-click="handleIconClick">
                    </el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import axios from 'axios';
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
            handleIconClick() {}
        }
            

    }
</script>

<style scoped="scoped">
    .main-header {
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        z-index: 100;
        border-bottom: 1px solid #F0F0F0;
        background-color: rgb(50,65,87);
        background-color: #354152;
    }
    
    .content {
        display: flex;
        height: 64px;
        overflow: hidden;
        align-items: center;
        justify-content: space-between;
    }
    
    .left-content {
        display: flex;
        padding-left: 20px;
        align-items: center;
        opacity: 0.8;
    }
    
    .right-content {
        width: 200px;
    }
    .logo-text {
        margin-left: 10px;
        color: #fff;
        font-size: 18px;
    }
    .line {
        margin-left: 15px;
        width: 1px;
        height: 26px;
        background: #fff;
    }
    .village-name,
    .change-village {
        color: #fff;
    }
    .village-name {
        margin-left: 15px;
    }
    .change-village {
        margin-left: 10px;
        font-size: 12px;
        cursor: pointer;
    }
    
    
</style>