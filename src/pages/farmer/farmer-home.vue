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
                    <p class="font14 txt-info">村庄数量</p>
                </div>
            </div>
        </div>
        
        <div class="page-search-bar">
            <div class="left">
                <label class="font14 margin-r-5">搜索村民</label>
                <el-input
                    placeholder="输入关键词"
                    icon="search"
                    v-model="search.farmer"
                    @change="handleFarmerChange"
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
                <router-link to="/farmer/add">
                    <el-button
                        class="margin-l-15"
                        type="primary">添加村民</el-button>
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
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别">
            </el-table-column>
            <el-table-column
                prop="village"
                label="所属村">
            </el-table-column>
            <el-table-column
                prop="county"
                label="所属县">
            </el-table-column>
            <el-table-column
                prop="tel"
                label="联系方式">
            </el-table-column>
            <el-table-column
                prop="poor"
                label="贫困户">
            </el-table-column>
            <el-table-column
                prop="action"
                label="操作">
                <template scope="scope">
                    <el-button 
                        size="small"
                        :plain="true"
                        @click="handleDetail(scope.$index, scope.row)">详情</el-button>
                    <el-button
                        size="small"
                        :plain="true"
                        type="primary"
                        style="margin-left: 0;" 
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="small"
                        :plain="true"
                        type="danger"
                        style="margin-left: 0;"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-bar margin-t-15" v-show="pagination.total > 0">
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
                farmer: '',
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
            
            countryOptions: [],
            villageOptions: [],

        }
    },
    
    created() {
        this.getCountryData();
        this.getFarmerList();
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
        
        getFarmerList() {
            this.tableData = [{
                name: '王小虎',
                sex: '男',
                village: '五福村',
                county: '天峨县',
                tel: '14989303427',
                poor: '是',
            }, {
                name: '王小虎',
                sex: '男',
                village: '五福村',
                county: '天峨县',
                tel: '14989303427',
                poor: '是',
            }];
            
            this.pagination.total = 30;
            
            console.log(this.search);
            axios.get('/api/get_farmer').then(function (response) {
                console.log(response);
                
            }).catch(function (err) {
                console.log(err)
            });
        },
        
        handleCountryChange(value) {
            this.search.country = value;
            this.getFarmerList();
        },
        
        handleVillageChange(value) {
            this.search.village = value;
            this.getFarmerList();
        },
        
        handleFarmerChange(value) {
            this.search.farmer = value;
        },
        
        handleIconClick() {
            this.getFarmerList();
        },
        
        handleCurrentChange(page) {
            this.search.page = page;
            
            this.getFarmerList();
        },
        
        handleDelete(index, row) {
            axios.post('/api/delet_farmer', {id: index}).then(function (response) {
                console.log(response);
            }).catch(function (err) {
                console.log(err)
            });
        },
        
        handleDetail(index, row) {
            this.$router.push('/farmer/detail')
        },
        handleEdit(index, row) {
            this.$router.push('/farmer/edit')
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
        width: 80px;
    }
    
    .page-search-bar .right {
        display: flex;
        align-items: center;
    }
    
</style>