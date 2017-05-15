<template>
    <div>
        <div class="page-comon-header">
            <div class="left">
                <label class="font14 margin-r-5">筛选</label>
                <el-select
                    v-model="search.country"
                    clearable
                    @change="handleSelectChange"
                    placeholder="请选择">
                    <el-option
                        v-for="item in options"
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
                <label class="font14 margin-r-5">搜索村庄</label>
                <el-input
                    placeholder="输入关键词"
                    icon="search"
                    v-model="search.village"
                    @change="handleVillageChange"
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
                <router-link to="/village/add">
                    <el-button
                        class="margin-l-15"
                        type="primary">添加村庄</el-button>
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
                label="村名">
            </el-table-column>
            <el-table-column
                prop="county"
                label="所属县">
            </el-table-column>
            <el-table-column
                prop="people"
                label="常住人口">
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
                page: 1,
            },
            
            // 是否加载中
            loading: false,
            
            // 选择县列表
            options: [],
            
            // 表格数据
            tableData: [],
            
            // 分页器数据
            pagination: {
                currentPage: 1,
                pageSize: 10,
                total: 0,
            },
        }
    },
    
    created() {
        this.getCountryData();
        this.getFarmerList();
    },
    
    methods: {
        getCountryData() {
            this.options = [{
                value: '选项1',
                label: '全部县'
            }, {
                value: '选项2',
                label: '双皮奶'
            }]; 
            axios.get('/api/get_country').then(function (response) {
                console.log(response);
                this.options = response.data;
            }).catch(function (err) {
                console.log(err)
            });;
        },
        
        getFarmerList() {
            this.tableData = [{
                id: '1',
                name: '王小虎',
                county: '天峨县',
                people: '457',
                action: ''
            }, {
                id: '2',
                name: '王小虎',
                county: '天峨县',
                people: '457',
                action: ''
            }];
            
            this.pagination.total = 29;
            
            axios.get('/api/get_farmer_list').then(function (response) {
                console.log(response);
                this.options = response.data;
            }).catch(function (err) {
                console.log(err)
            });;
        },
        
        handleSelectChange(value) {
            this.search.country = value;
            console.log(this.search)
            this.getFarmerList();
        },
        
        handleCurrentChange(page) {
            this.pagination.currentPage = page;
            this.search.page = page;
            console.log(this.search)
            this.getFarmerList();
        },
        
        handleDelete(index, row) {
            axios.post('/api/delet_farmer', {id: row.id}).then(function (response) {
                console.log(response.data)
            }).catch(function (err) {
                console.log(err)
            });
        },
        
        handleVillageChange(value) {
            this.search.village = value;
            console.log(this.search)
        },
        
        handleIconClick(e) {
            this.getFarmerList();
        },
        
        handleDetail(index, row) {
            this.$router.push('/village/detail')
        },
        handleEdit(index, row) {
            this.$router.push({ name: '/village/edit', params: row });
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