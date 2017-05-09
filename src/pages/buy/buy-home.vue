<template>
    <div class="bg-white" style="height: calc(100vh - 64px);">
        <div class="page-comon-header">
            <div class="left">
                <label class="font14 margin-r-5">筛选</label>
                <el-cascader
                    :options="options"
                    :show-all-levels="false">
                </el-cascader>
            </div>
            <div class="right">
                <div class="right-item text-center">
                    <span class="font28 padding-b-10">23456</span>
                    <p class="font14 txt-info">收购记录</p>
                </div>
            </div>
        </div>
        
        <div class="page-search-bar">
            <div class="left">
                <label class="font14 margin-r-5">搜索收购记录</label>
                <el-input
                    placeholder="输入关键词"
                    icon="search"
                    v-model="input2"
                    :on-icon-click="handleIconClick">
                </el-input>
            </div>
            <div class="right">
                <el-badge :value="10" :max="99" class="margin-r-15">
                    <el-button
                        :plain="true"
                        type="danger"
                        @click="handleDelete">批量删除</el-button>
                </el-badge>
                <router-link to="/buy/add">
                    <el-button
                        class="margin-l-15"
                        type="primary">添加收购</el-button>
                </router-link>
                
            </div>
        </div>
        
        <el-table
            row-class-name="rowStyle"
            :data="tableData" stripe style="width: 100%">
            <el-table-column
                type="selection"
                align="center"
                width="55">
            </el-table-column>
            <el-table-column
                prop="num"
                align="center"
                label="编号">
            </el-table-column>
            <el-table-column
                prop="product"
                align="center"
                label="种类">
            </el-table-column>
            <el-table-column
                prop="number"
                width="130"
                align="center"
                label="数量">
                <template scope="scope">
                    <el-input-number
                        v-show="editActive===scope.$index"
                        v-model="changeNumber"
                        :min="1" size="small" 
                        style="width: 120px;">
                    </el-input-number>
                    <span v-show="editActive!==scope.$index">{{scope.row.number}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="money"
                align="center"
                label="价格">
            </el-table-column>
            <el-table-column
                prop="farmer"
                align="center"
                label="农户">
            </el-table-column>
            <el-table-column
                prop="date"
                width="135"
                align="center"
                label="收购时间">
                <template scope="scope">
                    <el-date-picker
                        v-show="editActive===scope.$index"
                        v-model="changeDate"
                        @change="changeDateFn"
                        type="date"
                        size="small"
                        style="width: 125px;"
                        placeholder="选择日期">
                    </el-date-picker>
                    <span v-show="editActive!==scope.$index">{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="action"
                align="center"
                label="操作">
                <template scope="scope">
                    <div v-show="editActive===scope.$index">
                        <el-button
                            size="small"
                            type="success"
                            style="margin-left: 0;" 
                            @click="handleEditSuccess(scope.$index, scope.row)">完成</el-button>
                    </div>
                    <div v-show="editActive!==scope.$index">
                        <el-button
                            size="small"
                            :plain="true"
                            type="primary"
                            style="margin-left: 0;" 
                            @click="handleEdit(scope.$index, scope)">编辑</el-button>
                        <el-button
                            size="small"
                            :plain="true"
                            type="danger"
                            style="margin-left: 0;"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </div>
                    
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-bar" style="margin-top: 15px;">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input2: '',
            // 是否加载中
            loading: false,
            // 当前页数
            currentPage: 1,
            // 每页显示条数
            pageSize: 10,
            // 总条数
            total: 40,
            
            options: [{
                value: 'guangxi',
                label: '广西'
            },{
                value: 'shanghai',
                label: '上海'
            },{
                value: 'shenzhen',
                label: '深圳'
            },{
                value: 'guangdong',
                label: '广东'}],
            // 表格数据
            tableData: [{
                num: '20170612000',
                product: '黄豆',
                number: '9',
                money: '457.00',
                farmer: '陈达',
                date: '2017-6-12',
            }, {
                num: '20170612000',
                product: '黑猪',
                number: '3',
                money: '457.00',
                farmer: '陈达',
                date: '2017-6-12',
            }, {
               num: '20170612000',
                product: '菜干',
                number: '10',
                money: '457.00',
                farmer: '陈达',
                date: '2017-6-12',
            }, {
                num: '20170612000',
                product: '黑豆',
                number: '3',
                money: '457.00',
                farmer: '陈达',
                date: '2017-6-12',
            }],
            
            editActive: null,
            
            changeDate: '',
            changeNumber: '',
        }
    },
    
    methods: {
        handleCurrentChange() {
            
        },
        handleDelete() {
            
        },
        handleIconClick() {
            
        },
        
        changeDateFn(value) {
            this.changeDate = value;
        },
        
        handleEdit(index, row) {
            // 编辑之前先清空保存日期和数量的变量
            this.changeDate = '';
            this.changeNumber = '';
            
            this.editActive = index;
        },
        handleEditSuccess(index, row) {
            this.editActive = null;
            console.log(this.changeDate ,this.changeNumber)
            
            // 完成编辑之后再清空保存日期和数量的变量
            this.changeDate = '';
            this.changeNumber = '';
        }
    }
}
</script>

<style scoped>
    .right-item {
        padding-right: 50px;
    }
    .pagination-bar {
        display: flex;
        justify-content: center;
    }
    .rowStyle {
        height: 50px;
    }
    
    .page-search-bar .left {
        display: flex;
        align-items: center;
    }
    .page-search-bar .left label {
        width: 120px;
    }
    
    .page-search-bar .right {
        display: flex;
        align-items: center;
    }
    
</style>