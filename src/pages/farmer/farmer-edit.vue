<template>
    <div class="add-village">
        <div class="header">
            <div class="nav-bar">
                <p class="font16">编辑村民</p>
                <router-link to="/farmer">
                    <el-button class="back-btn">返回</el-button>
                </router-link>
            </div>
        </div>
        
        <el-tabs v-model="activeName2" type="card" @tab-click="handleTabClick">
            <el-tab-pane label="基本信息">
                <add-base></add-base>
            </el-tab-pane>
            <el-tab-pane label="种植信息" name="second">
                <add-product></add-product>
            </el-tab-pane>
        </el-tabs>
       
    </div>
</template>

<script>
    import axios from 'axios';
    import AddBase from './farmer-add-base';
    import AddProduct from './farmer-add-product';
    export default {
        data() {
            return {
                activeName2: '',
            };
        },
        components:{
            AddBase, AddProduct
        },
        
        methods: {
            handleTabClick() {
                
            },
        },
    }
</script>

<style scoped="scoped">
    .add-village {
        height: calc(100vh - 64px);
        padding: 20px;
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
</style>
