<template>
    
   <!-- <div class="content">
        <router-view></router-view>
    </div>-->
    <div class="wrapper">
        <v-head></v-head>
        <el-row>
            <el-col :span="3">
                <v-sidebar></v-sidebar>
            </el-col>
            <el-col :span="21">
                <div class="content">
                    <transition name="move" mode="out-in"><router-view></router-view></transition>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import vHead from './Header.vue';
  import vSidebar from './SiderBar.vue';
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
   /* name: 'content',*/
    components:{
      ElCol, ElRow, vHead, vSidebar
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isCollapse: true
      }
    },methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    h1, h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>
