<template>
  <div>
      <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
      <el-dialog title="收货地址" visible.sync="true">
          <el-form :model="form">
            <el-form-item label="活动名称" label-width="100px">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" label-width="100px">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        }
      };
</script>

<style>
</style>