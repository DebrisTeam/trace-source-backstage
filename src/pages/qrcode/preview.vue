<template>
    <div>
        <div class="header">
            <div class="nav-bar">
                <p class="font30">打印预览</p>
                <router-link to="/qrcode">
                    <el-button class="back-btn">返回</el-button>
                </router-link>
            </div>
        </div>
        <div class="preview-content">
            <el-tabs type="card" @tab-click="handleTabClick">
                <el-tab-pane label="不干胶">
                    <div class="preview-img-wrap text-center">
                        <div class="img-wrap">
                            <div class="img">
                                <img src="" width="100%" height="100%"/>
                            </div>
                        </div>
                    </div>
                    <div class="text-center margin-t-15">
                        <el-button class="print-btn" type="primary">立即打印</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="脚环">
                    <div class="preview-img-wrap text-center">
                        <div class="img-wrap">
                            <div class="img" style="background-color: #00AEEF;">
                                <img src="" width="100%" height="100%"/>
                            </div>
                        </div>
                    </div>
                    <div class="text-center margin-t-15">
                        <el-button class="print-btn" type="primary">立即打印</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        
        methods: {
            handleTabClick() {
                
            }
        }
    }
    
</script>

<style scoped>
    .header {
        padding: 40px;
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
    .preview-content {
        padding: 0 20px 40px 20px;
    }
    .preview-img-wrap {
        width: 100%;
        border: 1px solid #ccc;
    }
    .img-wrap {
        position: relative;
        width: 100%;
        padding-top: 70.7%;
        display: inline-block;
    }
    .img-wrap .img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 15px;
        background-color: #00C795;
    }
    .img-wrap .img img {
        vertical-align: middle;
    }
    .print-btn {
        width: 120px;
        border-radius: 30px;
    }
</style>