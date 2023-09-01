import { defineStore } from 'pinia'
// useMain  可以是 useUser、useCart 之类的名字 
// defineStore('main',{..}) 在devtools 就使用 main 这个名
export const useMain = defineStore('main', {
    // 相当于data
    state: () => {
        return {
          // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
          counter: 0,
          name: 'Eduardo',
        }
    },
    // 相当于计算属性
    getters: {
        doubleCount: (state) => {
            return state.counter * 2
        },
    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
        increment() {
          this.counter++
        },
        randomizeCounter() {
            setTimeout(() => {
                this.counter = Math.round(100 * Math.random())
            }, 0);
        },
    },
})


// 使用方法

// import { useMain } from "@/store/index.ts";
// import { storeToRefs } from "pinia";

// const main = useMain();
// // 解构main里面的state和getters的数据，
// // 使用storeToRefs解构才有响应式，响应式可以直接修改数据，不过这我只用来渲染
// let { counter, name, doubleCount } = storeToRefs(main);

// //（常用方法三种）
// //常用方法一： 使用数据
// console.log(counter);
// //使用方法(方法目前不能解构)
// main.increment();