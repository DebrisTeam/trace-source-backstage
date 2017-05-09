<template>
    <div>
        <div class="header">
            <div class="nav-bar">
                <p class="font16">村民详情</p>
                <div>
                    <router-link to="/farmer/edit">
                        <el-button type="primary" class="back-btn">编辑</el-button>
                    </router-link>
                    <router-link to="/farmer">
                        <el-button class="back-btn">返回</el-button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="farmer-bar">
            <div class="left">
                <span class="avatar"></span>
                <div>
                    <p class="font16">李四</p>
                    <p class="font12">14609372327</p>
                </div>
            </div>
            <div class="right">
                <div class="item">
                    <p class="font16">五福村</p>
                    <span class="font12 txt-info">天峨县</span>
                </div>
                <div class="item">
                    <p class="font18">5</p>
                    <span class="font12 txt-info">种植种类</span>
                </div>
            </div>
        </div>

        <el-table
            :data="tableData" stripe style="width: 100%">
            <el-table-column
                prop="product"
                align="center"
                label="种类">
            </el-table-column>
            <el-table-column
                prop="number"
                align="center"
                label="数量">
            </el-table-column>
            <el-table-column
                prop="unit"
                align="center"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="price"
                align="center"
                label="收购价格">
            </el-table-column>
            <el-table-column
                prop="date"
                align="center"
                label="种植日期">
            </el-table-column>
        </el-table>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num6: '',
                tableData: [{
                    product: '黄豆',
                    number: '23',
                    unit: '苗',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }, {
                    product: '黑猪',
                    number: '6',
                    unit: '只',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }, {
                    product: '土鸡',
                    number: '6',
                    unit: '只',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }],
            }
        },
        
        methods: {
            nextStep() {
                this.$router.push('/buy/add/add-success')
            }
        }
    }
</script>

<style scoped>
    .farmer-bar {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .farmer-bar  .left {
        display: flex;
        align-items: center;
    }
    .farmer-bar  .left .avatar {
        display: inline-block;
        margin-right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #ccc;
    }

    .farmer-bar  .right {
        display: flex;
        align-items: center;
    }
    .farmer-bar  .right .item {
        padding: 0 20px;
        text-align: center;
    }
    .next-btn-bar {
        margin-top: 20px;
    }
    .next-btn {
        width: 150px;
        border-radius: 30px;
    }
    .total-price {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
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
</style>