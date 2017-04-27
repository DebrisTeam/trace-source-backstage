<template>
  <div class="main-card">
    <el-table
      :data="tableData"
      border
      v-loading="loading">
      <el-table-column
        prop="pid"
        label="编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="cellphone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="info"
        label="简介">
      </el-table-column>
      <el-table-column
        prop="time"
        label="录入时间">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        width="174">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="primary"
            style="margin-left: 0;"
            @click="handleDelete(scope.$index, scope.row)">农产品</el-button>
          <el-button
            size="small"
            type="danger"
            style="margin-left: 0;"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 15px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  const data = [{
          pid: '0',
          name: '王小虎',
          cellphone: '14797830068',
          address: '上海市普陀区金沙江路 1518 弄',
          info: '农户简介',
          time: '2016-05-02',
          remark: '备注',
          operate: '操作'
        },{
          pid: '1',
          name: '王小龙',
          cellphone: '14797830068',
          address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518',
          info: '农户简介',
          time: '2016-05-02',
          remark: '备注',
          operate: '操作'
        },{
          pid: '2',
          name: 'enjing',
          cellphone: '14797830068',
          address: '上海市普陀区金沙江路 1518 弄',
          info: '农户简介',
          time: '2016-05-02',
          remark: '备注',
          operate: '操作'
        },]
  export default {
    data() {
      return {
        // 是否加载中
        loading: false,
        // 当前页数
        currentPage: 1,
        // 每页显示条数
        pageSize: 10,
        // 总条数
        total: 40,
        tableData: [],
      }
    },
    
    created() {
      this.getNewData();
    },
    
    methods: {
      handleCurrentChange(page) {
        console.log(page)
        this.getNewData();
      },
      
      getNewData() {
        this.tableData = this.tableData.concat(data);
      }
    }
  }
</script>

<style>
</style>