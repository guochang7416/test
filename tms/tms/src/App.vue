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
import Main from './pages/Main.vue';
import Aside from './pages/Aside.vue';
import Header from './pages/Header.vue';
import Footer from './pages/Footer.vue';
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
</style>
