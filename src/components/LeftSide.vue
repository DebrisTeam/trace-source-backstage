<template>
    <div class="left-side">
        <div class="admin-info">
            <div class="admin-avatar" style="background-image: url(https://a-ssl.duitang.com/uploads/item/201611/23/20161123180252_i2MzZ.jpeg);"></div>
            <p class="admin-name"><span class="name">黄恩景</span><el-tag class="tag" type="primary">管理员</el-tag></p>
            <button class="admin-set">个人设置</button>
            <div class="signout-btn" @click="signout">退出登陆</div>
        </div>
        <el-menu
            theme="dark"
            router
            :default-active="activePath"
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose">
            <el-menu-item index="/"><i class="el-icon-message"></i>数据总览</el-menu-item>
            <el-menu-item index="/village"><i class="el-icon-menu"></i>村庄管理</el-menu-item>
            <el-menu-item index="/farmer"><i class="el-icon-setting"></i>村民管理</el-menu-item>
            <el-menu-item index="/buy"><i class="el-icon-setting"></i>收购管理</el-menu-item>
            <el-menu-item index="/qrcode"><i class="el-icon-setting"></i>二维码打印</el-menu-item>
            <!--<el-menu-item index="/user"><i class="el-icon-setting"></i>用户管理</el-menu-item>-->
        </el-menu>
        </el-menu>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                menuData: [
                    {
                        
                    }
                ]
            }
        },
        
        computed: {
            activePath: function () {
                // 如果访问的是二级以后的路由也还需要侧边栏处于激活状态就需要做这样的处理
                const pathArray = this.$route.path.split('/');
                return `/${pathArray[1]}`;
            }
        },
        
        methods: {
            connectArray() {
                const arr1 = ["/", "/village", "/farmer", "/buy", "/qrcode"];
            },
            signout() {
                axios.get('/api/login_out').then(function(response) {
                    this.$message({
                        message: response.data.info,
                        type: 'success'
                    });
                    this.$router.push('/login');
                }.bind(this));
            },
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
        width: 200px;
        background-color: #324157;
        z-index: 100;
        overflow: auto;
    }
    
    .admin-info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        /*background-color: rgb(1,150,136);*/
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .admin-avatar {
        width: 80px;
        height: 80px;
        background-color: #ccc;
        border-radius: 40px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .admin-name {
        margin-top: 10px;
        font-size: 13px;
        color: #fff;
    }
    .admin-name span.name {
        opacity: 0.8;
    }
    .admin-name span.tag {
        margin-left: 5px;
        height: 20px;
        font-size: 10px;
        line-height: 18px;
        color: rgba(32,160,255,.5);
    }
    
    .admin-set {
        height: 30px;
        padding: 0 15px;
        margin-top: 15px;
        font-size: 12px;
        line-height: 26px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 15px;
        background: none;
        opacity: 0.6;
    }
    .signout-btn {
        position: absolute;
        top: 10px;
        left: 5px;
        height: 20px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(255,255,255,.5);
        cursor: pointer;
    }
</style>