<template>
    <div class="home-wrap">
        <div class="" style="padding: 20px 15px;">
            <div style="font-size: 18px;">数据总览</div>
            <el-row :gutter="20" class="margin-t-15">
              <el-col :span="6"><div class="grid-content">
                  <div class="font26">23</div>
                  <span class="font13">签约县城</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                  <div class="font26">56</div>
                  <span class="font13">签约村庄</span>
              </div></el-col>
              <el-col :span="12"><div class="grid-content">
                  <div class="font26">75,399</div>
                  <span class="font13">签约村民</span>
              </div></el-col>
            </el-row>
        </div>
        <div class="main-card">
            <div class="font14 margin-b-15">五福村——村民收入统计</div>
            <income-tab />
        </div>
        <div class="main-card">
            <div class="font14">五福村——种植环境数据</div>
            <ul class="grow-data">
                <li v-for="item in growData">
                    <span>{{ item.name }}</span>
                    <div class="right"><span>{{ item.value }}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import IncomeTab from './income-tab';
    export default {
        data() {
            return {
                growData: [
                    {name: '空气温度', value: '17.00C'},
                    {name: '空气湿度', value: '92.00%'},
                    {name: '光照度', value: '18000.00ux'},
                    {name: '风速', value: '17.00C'},
                    {name: '风向', value: '17.00C'},
                    {name: '土壤温度', value: '17.00C'},
                    {name: '酸碱度', value: '17.00C'},
                    {name: '土壤导电率', value: '17.00C'},
                ]
            }
        },
        components: {
            IncomeTab,    
        },
        
        methods: {
            handleClick() {
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home-wrap {
        min-height: calc(100vh - 64px);
        background-color: #eef1f6;
        padding-bottom: 1px;
    }
    .grid-content {
        display: flex;
        height: 80px;
        background: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    .grow-data {
        margin-top: 20px;
        padding: 15px;
        width: 400px;
        border: 1px dashed #ccc;
    }
    .grow-data li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        font-size: 12px;
    }
    .grow-data li .right {
        min-width: 100px;
        text-align: left;
    }
</style>