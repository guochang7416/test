// import { reject, resolve } from 'core-js/fn/promise';
import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建对象

const moduleA = {
  state: {
    name: 'lzn'
  },
  mutations: {
    //修改模块里面的name
    updateName(state,payload){
      // state.name = 'lyx'
      state.name = payload;
    }
  },
  getters: {
    fullname(state){
      return state.name + '123'
    },
    fullname2(state,getters){
      return getters.fullname + '456'
    },
    fullname3(state,getters,rootState){
      return getters.fullname + rootState.count
    }
  },
  actions: {
    aupdateName(context){
      setTimeout(() => {
        //此时context提交的是moduleA中的state
        context.commit('updateName','zdj')
      },1000)
    }
  },
}
//单一状态树  统一放到一个store里面
export default new Vuex.Store({
  state: {
    count: 1000,
    students: [
      {id:1,name:'gc',age:20},
      {id:2,name:'lyf',age:8},
      {id:3,name:'gyx',age:55},
      {id:4,name:'yj',age:27},
      {id:5,name:'zyx',age:16},
    ],
    info: {
      name:'lhc',
      age:22,
      height:183
    }
  },
  
  //类似于单个组件的计算属性
  getters: {
    //获取count的平方
    powerCounter(state){
      return state.count * state.count;
    },

    //定死年龄,获取年龄大于20岁的
    more20stu(state){
      return state.students.filter(s => s.age >= 20)
    },

    //getters传参数,动态获取年龄大于age
    moreAgestu(state){
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },

  //定义方法:事件类型+回调函数   修改store状态
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    //增加一个参数  count为payload   第一种提交方式:提交负载
    incrementCount(state,count){
      state.count += count
    },
    //增加一个对象,即多个参数
    incrementStu(state,stu){
      state.students.push(stu)
    },
    changeInfo(state){
      state.info.name = 'zyf',
      //state.info['address'] = '洛杉矶'  // 上一条不注释的话那么这一条也可以进行响应式  不推荐
      Vue.set(state.info,'address','洛杉矶')
      Vue.delete(state.info,'age')
    }


    // setCounter(state, value){
    //   state.counter = value
    // }
  },

  //进行异步操作  
  actions: {
    //context  上下文 

    //不优雅的版本
    // achangeInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('changeInfo',)
    //     console.log('payload.message')
    //     payload.success()
    //   },1000)
    // },

    //优雅的使用Promise的版本
    achangeInfo(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('changeInfo',)
          console.log(payload)
          //执行回调
          resolve('111111')
        },1000)
      })
    },
  },
  
  modules: {
    a:moduleA
  }
})
