<template>
    <div class="add-buy">
        <div class="header">
            <div class="nav-bar">
                <p class="font16">添加收购</p>
                <router-link to="/buy">
                    <el-button class="back-btn">返回</el-button>
                </router-link>
            </div>
            <div class="add-step-bar">
                <el-steps
                    :space="200"
                    :active="1"
                    center="true"
                    finish-status="finish">
                <el-step title="选择村民"></el-step>
                <el-step title="选择农产品"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            </div>
            
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped="scoped">
    .add-buy {
        height: calc(100vh - 64px);
        background-color: #fff;
    }
    .header {
        padding: 15px;
        padding-top: 30px;
    }
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back-btn {
        margin-right: 40px;
        width: 100px;
        border-radius: 20px;
    }
    .add-step-bar {
        padding: 30px 10px;
    }
</style>
