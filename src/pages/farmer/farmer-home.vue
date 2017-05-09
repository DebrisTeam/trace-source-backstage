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
            }, {
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
            }],
        }
    },
    
    methods: {
        handleCurrentChange() {
            
        },
        handleDelete() {
            
        },
        handleIconClick() {
            
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