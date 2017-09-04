<template>
    <div class="form">
    <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">Http://</template>
    </el-input>
   
    <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input4">
            <template slot="append">.com</template>
        </el-input>
    </div>
    <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
        </el-input>
    </div>
    </div>
</template>

<script>
  export default {
    name:'form',
    data() {
      return {
        input3: '',
        input4: '',
        input5: '',
        select: ''
      }
    }
  }
</script>

<style>
    .el-select .el-input {
        width: 110px;
    }
</style>