<template>
    <div>  
        <el-table
            :data="tableData" stripe style="width: 100%">
            <el-table-column
                prop="product"
                label="种类">
            </el-table-column>
            <el-table-column
                prop="number"
                label="数量">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="price"
                label="收购价格">
            </el-table-column>
            <el-table-column
                prop="date"
                label="种植日期">
            </el-table-column>
            <el-table-column
                prop="action"
                label="操作">
                <template scope="scope">
                    <el-button
                        size="small"
                        :plain="true"
                        type="primary"
                        style="margin-left: 0;" 
                        @click="handleEditProduct(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="small"
                        :plain="true"
                        type="danger"
                        style="margin-left: 0;"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <el-button class="submit-btn" type="primary" @click="handleAddProduct">添加</el-button>
        
        <el-dialog
            :title="dialogTitle" 
            :visible.sync="dialogFormVisible" 
            custom-class="add-product-dialog"
            @close="closeDialog"
            :close-on-click-modal="false">
            <div v-if="formShow">
                <edit-form :data="data"></edit-form>
            </div>
            <div v-if="!formShow">
                <add-form></add-form>
            </div>
            
        </el-dialog>
        
    </div>
</template>

<script>
    import addForm from './farmer-add-product-add';
    import editForm from './farmer-add-product-edit';
    export default {
        data() {
            return {
                num6: '',
                tableData: [{
                    product: '黄豆',
                    number: '23',
                    unit: '亩',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }, {
                    product: '黑猪',
                    number: '6',
                    unit: '只',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }, {
                    product: '土鸡',
                    number: '6',
                    unit: '只',
                    price: '5.00/斤',
                    date: '2017-6-1',
                }],

                dialogFormVisible: false,
                
                data: null,
                formShow: false,
                
                dialogTitle: '',

            }
        },
        
        components: {
            addForm, editForm
        },
        
        methods: {
            // 打开添加
            handleAddProduct() {
                this.dialogTitle = '添加农产品',
                this.dialogFormVisible = true
                this.formShow = false;
            },
            // 打开编辑
            handleEditProduct(index, row) {
                this.dialogTitle = '编辑农产品',
                this.data = row;
                this.dialogFormVisible = true;
                this.formShow = true;
            },
            // 弹窗关闭时卸载表单组件，保证每次打开都重新实例化
            closeDialog() {
                this.formShow = false;
            },
            
            handleDelete() {
                
            }
        }
    }
</script>

<style scoped>
    .submit-btn {
        width: 120px;
        margin-top: 40px;
    }
    
</style>
<style>
    .add-product-dialog {
        width: 400px !important;
    }
</style>