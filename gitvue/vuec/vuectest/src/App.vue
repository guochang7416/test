<template>
  <div id="app">
    <h1>APP内容</h1>
    <h2>-----------modules内容------------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button class="btn_css" @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button class="btn_css" @click="asyncUpdateName">异步修改</button>

    
    <h3>{{ $store.state.count }}</h3>
    <button class="btn_css" @click="addition">+</button>
    <button class="btn_css" @click="subtraction">-</button>
    <button class="btn_css" @click="addCount(5)">+5</button>
    <button class="btn_css" @click="addCount(10)">+10</button>
    <button class="btn_css" @click="addStudent">添加学生</button>

    <h3>{{ $store.state.info }}</h3>
    <button class="btn.css" @click="changeInfo">修改信息</button>

    <!-- getters相关信息 -->
    <!-- 获取count的平方 -->
    <!-- <h2>{{ $store.state.count * $store.state.count }}</h2>  不优雅 -->
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.moreAgestu(12) }}</h2>


    <h1>Hellovue内容</h1>
    <hello-vue :count="count"></hello-vue>
    
  </div>
</template>

<script>

import HelloVue from './components/HelloVue.vue';
import store from './store';

export default {
  name: 'App',
  data(){
    return {
      count: 1000,
    }
  },
  components: {
    HelloVue
  },
  computed:{
  },
  methods:{
    //通过mutation更新
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    //负载提交
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    //type提交
    // addCount(count){
    //   type:'incrementCount',
    //   count
    // },
    addStudent(){
      const stu = {id:5,name:'kzl',age:26}
      this.$store.commit('incrementStu',stu)
    },
    //所有属性都被加入到响应式系统里,一旦发生改变,就会被监听,然后全局发生刷新
    changeInfo(){
      // this.$store.commit('changeInfo')   mutation同步修改

      // 利用异步操作进行内容修改
      // this.$store.dispatch('achangeInfo',{
      //   message:'携带信息',
      //   success: () => {
      //     console.log('里面以及完成了');
      //   }
      // })   

      //利用Promise的异步操作进行内容修改
      this.$store
      .dispatch('achangeInfo','我是携带的信息')
      .then(res => {
        console.log('里面完成提交');
        console.log(res);
        })
      },
      updateName(){
        this.$store.commit('updateName','lyx')
      },
      asyncUpdateName(){
        this.$store.dispatch('aupdateName')
      },
  },
  mounted() {
    console.log(this.$store)
    console.log(this)
  }
}
</script>

<style>
.btn_css {
  margin: 0px 10px 0px 0px;
}
</style>
