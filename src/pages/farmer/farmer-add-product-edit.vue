<template>
    <el-form :model="form">
        <el-form-item label="种类" label-width="80px">
            <el-input v-model="form.name" size="small" placeholder="农作物名称"></el-input>
        </el-form-item>
        <el-form-item label="数量" label-width="80px">
            <el-col :span="11" style="margin-right: 20px;">
                <el-input-number value="number" v-model="form.number" size="small"></el-input-number>
            </el-col>
            <el-col :span="11">
                <el-radio class="radio" v-model="form.radio" label="1">亩</el-radio>
                <el-radio class="radio" v-model="form.radio" label="2">只</el-radio>
            </el-col>
        </el-form-item>
        <el-form-item label="数量" label-width="80px">
            <el-date-picker
                v-model="form.date"
                type="date"
                size="small"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="收购单价" label-width="80px">
            <el-col :span="11" style="margin-right: 10px;">
                <el-input v-model="form.price" size="small" placeholder="输入金额"></el-input>
            </el-col>
            <el-col :span="11">
                <el-select v-model="form.unit" size="small" placeholder="请选择">
                    <el-option label="元/斤" value="jin"></el-option>
                    <el-option label="元/个" value="ge"></el-option>
                    <el-option label="元/只" value="zhi"></el-option>
                </el-select>
            </el-col>
            
        </el-form-item>
        <el-form-item class="text-right">
            <el-button type="primary" @click="submitForm">提 交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: function () {
                return {
                    product: '',
                    number: '',
                    radio: '',
                    price: '',
                    unit: '',
                    date: ''
                }
            }
        }
        
    },
    data() {
        
        return {
            form: {
                name: this.data.product,
                number: this.data.number,
                radio: this.data.radio,
                price: this.data.price,
                unit: this.data.unit,
                date: this.data.date,
            }, 
        }
    },
    
    created() {
        console.log(this.data)
    },
    
    methods: {
        submitForm() {
           
        }
    }
    
}
</script>

<style>
</style>