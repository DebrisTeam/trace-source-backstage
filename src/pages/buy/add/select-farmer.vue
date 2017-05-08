<template>
    <div>
        <div class="search-bar">
            <label class="font14 txt-info margin-r-5">搜索村民</label>
            <el-input
                class="search-input"
                placeholder="输入关键词"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick">
            </el-input>
        </div>
        
        <el-table
            :data="tableData" stripe style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
                <template scope="scope">
                    <span class="avatar"></span>
                    <span class="line-h-1 padding-l-5">{{ scope.row.name }}</span>
                </template>
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
        </el-table>
        
        <div class="next-btn-bar text-center">
            <el-button class="next-btn" type="primary" @click="nextStep">下一步</el-button>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input2: '',
                tableData: [{
                    name: '王小虎',
                    avatar: '',
                    sex: '男',
                    village: '五福村',
                    county: '天峨县',
                    tel: '15879863435',
                    poor: '是'
                }, {
                    name: '王小虎',
                    avatar: '',
                    sex: '男',
                    village: '五福村',
                    county: '天峨县',
                    tel: '15879863435',
                    poor: '否'
                }],
            };
              
        },
        
        methods: {
            handleIconClick() {
                
            },
            
            nextStep() {
                this.$router.push('/buy/add/select-product')
            }
        }
    }
</script>

<style scoped>
    .search-bar {
        padding: 0 20px;
        padding-bottom: 20px;
    }
    .search-input {
        width: 180px;
    }
    .next-btn-bar {
        margin-top: 40px;
    }
    .next-btn {
        width: 150px;
        border-radius: 30px;
    }
    .avatar {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #ccc;
        border-radius: 20px;
        vertical-align: middle;
    }
</style>