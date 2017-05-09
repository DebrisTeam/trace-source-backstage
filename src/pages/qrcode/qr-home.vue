<template>
    <div>
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
                <div class="left-search">
                    <label class="font14 txt-info">搜索收购记录:</label>
                    <el-input
                        style="width: 160px; display: block; margin-top: 5px;"
                        placeholder="输入关键词"
                        icon="search"
                        v-model="input2"
                        :on-icon-click="handleIconClick">
                    </el-input>
                </div>
                <div class="right-search margin-l-15">
                    <label class="font14 txt-info">按时间段搜索:</label>
                    <el-date-picker
                        style="display: block; margin-top: 5px;"
                        v-model="searchDate"
                        type="daterange"
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
            // 表格数据
            tableData: [],
            
            searchDate: '',
            preview: [],
            
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

            tableData: [{
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
            }, {
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
            }],
        }
    },
    
    methods: {
        handleCurrentChange() {
            
        },
        handlePreview() {
            this.$router.push({
                path: '/qrcode/preview'
            });
        },
        handleIconClick() {
            
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