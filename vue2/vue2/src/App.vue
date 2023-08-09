<template>
  <el-container style="height:100vh">
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Main from './views/Main.vue';
import Aside from './views/Aside.vue';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
export default {
components: {
  Main,
  Aside,
  Header,
  Footer
}
}
</script>

<style scoped>
.el-header {
height: 30px;
padding: 0!important;
}
.el-main,.el-header,.el-footer {
overflow: hidden;
background-color: #1c2029;
}
.el-aside {
color: #fff!important;
background-color: #293042;
}

::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #465673;
}
::-webkit-scrollbar-track{
  border-radius: 3px;
  background: #071e4a;
}
</style>
