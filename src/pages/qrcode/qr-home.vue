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
                <div class="left-search">
                    <label class="font14 txt-info">搜索收购记录:</label>
                    <el-input
                        style="width: 160px; display: block; margin-top: 5px;"
                        placeholder="输入关键词"
                        icon="search"
                        v-model="search.buy"
                        @change="handleBuyChange"
                        :on-icon-click="handleIconClick">
                    </el-input>
                </div>
                <div class="right-search margin-l-15">
                    <label class="font14 txt-info">按时间段搜索:</label>
                    <el-date-picker
                        style="display: block; margin-top: 5px;"
                        v-model="search.dateTime"
                        type="daterange"
                        @change="handleDateTimeChange"
                        placeholder="选择日期范围">
                    </el-date-picker>
                </div>
                
            </div>
            <div class="right">
                <el-badge :value="10" :max="99" class="margin-r-15">
                    <el-button
                        type="primary"
                        @click="handlePreview">批量打印预览</el-button>
                </el-badge>
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
                prop="numb"
                label="编号">
            </el-table-column>
            <el-table-column
                prop="product"
                label="种类">
            </el-table-column>
            <el-table-column
                prop="number"
                label="数量">
            </el-table-column>
            <el-table-column
                prop="money"
                label="金额">
            </el-table-column>
            <el-table-column
                prop="farmer"
                label="农户">
            </el-table-column>
            <el-table-column
                prop="date"
                label="收购时间">
            </el-table-column>
            
        </el-table>
        <div class="pagination-bar margin-t-15" v-if="pagination.total > 10">
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
                dateTime: '',
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
            
            
            preview: [],
            
        }
    },
    
    created() {
        this.getCountryData();
        this.getData();
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
        
        // 获取数据方法
        getData() {
            console.log(this.search)
            this.tableData = [{
                numb: '201706091234',
                product: '黄豆',
                number: '23斤',
                money: '130.00',
                farmer: '陈达',
                date: '2017-6-1',
            }, {
                numb: '201706091234',
                product: '黄豆',
                number: '23斤',
                money: '130.00',
                farmer: '陈达',
                date: '2017-6-1',
            }];
            
            this.pagination.total = 20;
            
            axios.post('/api/get_buy_list', this.search).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            });
        },
        
        // 筛选县触发回调
        handleCountryChange(value) {
            this.search.country = value;
            this.getData();
        },
        // 筛选村触发回调
        handleVillageChange(value) {
            this.search.village = value;
            this.getData();
        },
        
        handleCurrentChange(page) {
            this.search.page = page;
            this.getData();
        },
        
        handlePreview() {
            this.$router.push({
                path: '/qrcode/preview'
            });
        },
        handleBuyChange(value) {
            this.search.buy = value;
        },
        handleIconClick() {
            this.getData();
        },
        
        handleDateTimeChange(value) {
//          this.search.dateTime = value;
            this.getData();
            
        },
        
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
    }*/
    
    .page-search-bar .right {
        display: flex;
        align-items: center;
    }
    
</style>