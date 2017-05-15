<template>
    <div>
        <div class="page-comon-header">
            <div class="left">
                <label class="font14 margin-r-5">筛选</label>
                <el-select
                    v-model="search.country"
                    clearable
                    @change="handleCountryChange"
                    placeholder="请选择">
                    <el-option
                        v-for="item in countryOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select
                    v-model="search.village"
                    clearable
                    @change="handleVillageChange"
                    placeholder="请选择">
                    <el-option
                        v-for="item in villageOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
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
                    v-model="search.buy"
                    @change="handleBuyChange"
                    :on-icon-click="handleIconClick">
                </el-input>
            </div>
            <div class="right">
                <el-badge :value="0" :max="99" class="margin-r-15">
                    <el-button
                        disabled
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
        <div class="pagination-bar margin-t-15" v-show="pagination.total > 10">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-size="pagination.pageSize"
            layout="total, prev, pager, next"
            :total="pagination.total">
          </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            // 搜索字段
            search: {
                country: '',
                village: '',
                buy: '',
                page: 1,
            },
            
            // 是否加载中
            loading: false,

            // 表格数据
            tableData: [],
            
            // 分页器数据
            pagination: {
                currentPage: 1,
                pageSize: 10,
                total: 0,
            },
            // 保存县和村的列表数据
            countryOptions: [],
            villageOptions: [],
            
            // 打开编辑收购选项时切换DOM结构
            editActive: null,
            // 保存编辑收购选项时的日期和数量
            changeDate: '',
            changeNumber: '',
        }
    },
    
    created() {
        this.getCountryData();
        this.getBuyList();
    },
    
    methods: {
        getCountryData() {
            this.countryOptions = [{
                value: '选项1',
                label: '全部县'
            }, {
                value: '选项2',
                label: '天峨县'
            }];
            
            this.villageOptions = [{
                value: '选项1',
                label: '全部村'
            }, {
                value: '选项2',
                label: '龙凤村'
            }];
            
            axios.get('/api/get_country').then(function (response) {
                console.log(response);
                
            }).catch(function (err) {
                console.log(err)
            });
        },
        
        getBuyList() {
            console.log(this.search)
             this.tableData = [{
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
            }];
            
            this.pagination.total = 30;
            
            axios.get('/api/get_buy_list').then(function (response) {
                console.log(response);
                
            }).catch(function (err) {
                console.log(err)
            });
        },
        
        // 筛选县触发回调
        handleCountryChange(value) {
            this.search.country = value;
            this.getBuyList();
        },
        // 筛选村触发回调
        handleVillageChange(value) {
            this.search.village = value;
            this.getBuyList();
        },
        
        // 搜索关键词触发回调
        handleBuyChange(value) {
            this.search.buy = value;
        },
        // 确认搜索触发回调
        handleIconClick() {
            this.getBuyList();
        },
        
        // 选择页码触发回调
        handleCurrentChange(page) {
            this.search.page = page;
            
            this.getBuyList();
        },
        
        // 删除单条收购记录
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该条记录, 确定要删除吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                axios.post('/api/delet_buy_list', {id: index}).then(function (response) {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
              
            }).catch(() => {
                     
            });
        },
        
        // 编辑时日期选择回调
        changeDateFn(value) {
            this.changeDate = value;
        },
        
        
        handleEdit(index, row) {
            // 编辑之前先清空保存日期和数量的变量
            this.changeDate = '';
            this.changeNumber = '';
            
            this.editActive = index;
        },
        // 完成编辑
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