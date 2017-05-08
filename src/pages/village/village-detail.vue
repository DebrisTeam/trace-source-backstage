<template>
    <div class="village-detail">
        <div class="header">
            <div class="nav-bar">
                <p class="font16">村庄详情</p>
                <div>
                    <router-link to="/village/edit">
                        <el-button type="primary" class="back-btn">编辑</el-button>
                    </router-link>
                    <router-link to="/village">
                        <el-button class="back-btn">返回</el-button>
                    </router-link>
                </div>
            </div>
        </div>
        
        <div class="title-bar">
            <span class="font14">龙凤村</span>
            <span class="font12">人口： 3430</span>
        </div>
        <div class="content">
            <p>
                广西壮族自治区河池市天峨县坡结乡地处长岭县，毗连大二号村，马莲村，北门外村,环境幽美,气候温和,风景宜人
            </p>
        </div>
        
        <div class="picture margin-t-15">
            <img src="../../assets/logo.png" width="300" height="160"/>
            <img src="../../assets/logo.png" width="300" height="160"/>
        </div>
      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped="scoped">
    .village-detail {
        padding: 30px 40px;
    }
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back-btn {
        margin-right: 20px;
        width: 100px;
        border-radius: 20px;
    }
    .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
    .content {
        padding: 15px;
        margin-top: 10px;
        border: 1px solid #eee;
        background-color: rgb(252,252,252);
        border-radius: 5px;
    }
    .content p {
        font-size: 13px;
        word-break: break-all;
        line-height: 20px;
    }
    .picture img {
        margin-right: 15px;
        vertical-align: middle;
    }
</style>