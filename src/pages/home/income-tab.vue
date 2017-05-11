<template>
    <el-tabs class="income-tab" type="card" @tab-click="handleTabClick">
        <el-tab-pane label="月汇总">
            <div class="tab-info-bar">
                <el-date-picker
                    style="width: 120px"
                    v-model="value4"
                    type="month"
                    size="small"
                    placeholder="选择月">
                </el-date-picker>
                <div class="total-income font16 line-h-1">
                    <span class="font12 margin-r-5">总收入</span>
                    93,634
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column prop="sort" label="排序" align="center" min-width="60">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center" min-width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" align="center" min-width="50">
                </el-table-column>
                <el-table-column prop="age" label="年龄" align="center" min-width="60">
                </el-table-column>
                <el-table-column prop="income" label="收入(元)" align="center" min-width="120">
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="年汇总">
            <div class="tab-info-bar">
                <el-date-picker
                    style="width: 120px"
                    v-model="value4"
                    type="year"
                    size="small"
                    placeholder="选择年">
                </el-date-picker>
                <div class="total-income font16 line-h-1">
                    <span class="font12 margin-r-5">总收入</span>
                    93,634
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="sort" label="排序" align="center" min-width="60">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center" min-width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" align="center" min-width="50">
                </el-table-column>
                <el-table-column prop="age" label="年龄" align="center" min-width="60">
                </el-table-column>
                <el-table-column prop="income" label="收入(元)" align="center" min-width="120">
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    sort: '1',
                    name: '王小虎',
                    sex: '男',
                    age: '45',
                    income: '3980'
                }, {
                    sort: '2',
                    name: '王小虎',
                    sex: '男',
                    age: '45',
                    income: '3980'
                }, {
                    sort: '3',
                    name: '王小虎',
                    sex: '男',
                    age: '45',
                    income: '3980'
                }, {
                    sort: '4',
                    name: '王小虎',
                    sex: '男',
                    age: '45',
                    income: '3980'
                }],
                
                value4: '',
            }
        },

        methods: {
            handleTabClick(e) {
                console.log(typeof e.index)
            }
        }
    }
</script>

<style scoped="scoped">
    .income-tab {
        width: 60%;
    }
    .tab-info-bar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 15px;
        padding-right: 15px;
    }
</style>