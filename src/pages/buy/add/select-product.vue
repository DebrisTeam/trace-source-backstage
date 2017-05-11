<template>
    <div>
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
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="product"
                label="种类">
            </el-table-column>
            <el-table-column
                prop="date"
                label="种植日期">
            </el-table-column>
            <el-table-column
                prop="price"
                label="收购价格">
            </el-table-column>
            <el-table-column
                prop="number"
                label="数量">
                <template scope="scope">
                    <el-input-number size="small" :min="1" v-model="num6" :disabled="true"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column
                prop="money"
                label="金额">
            </el-table-column>
        </el-table>
        
        <div class="total-price font12">
            <p>已选农产品<span class="font16 padding-l-5">2</span>件</p>
            <p class="padding-l-15">合计：<span class="font18">￥30.00</span></p>
        </div>
        
        <div class="next-btn-bar text-center">
            <el-button class="next-btn" type="primary" @click="nextStep">下一步</el-button>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num6: '',
                tableData: [{
                    product: '黄豆',
                    date: '2017-6-1',
                    price: '5.00/斤',
                    number: '',
                    money: '￥34.00',
                }, {
                    product: '黑猪',
                    date: '2017-6-1',
                    price: '5.00/斤',
                    number: '',
                    money: '￥34.00',
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
        /*border-bottom: 1px solid #ccc;*/
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
</style>