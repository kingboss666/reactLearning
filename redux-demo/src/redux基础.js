// reudx的使用
import { createStore } from "redux"
// action生成器
const countIncrementBy = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy
  }
}
const countDecrmentBy = ({ decrmentBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrmentBy
  }
}
const countReset = () => {
  return {
    type: "RESET"
  }
}
const countSet = ({count}) => {
  return {
    type: "SET",
    count
  }
}
// reducers
const store = createStore((state = { count: 0 }, active) => {
  switch (active.type) {
    case "INCREMENT":
      return {
        count: state.count + active.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - active.decrmentBy
      }
    case "RESET":
      return {
        count: 0
      }
    case "SET": {
      return {
        count: active.count
      }
    }
    default:
      return state
  }

})
// 监听器
store.subscribe(() => {
  console.log(store.getState())
  // 一般重新渲染dom
})
// 更新redux
store.dispatch(countIncrementBy({
  incrementBy: 5
}))
store.dispatch(countIncrementBy())
store.dispatch(countDecrmentBy({
  decrmentBy: 10
}))
store.dispatch(countDecrmentBy())
store.dispatch(countReset())
store.dispatch(countSet({
  count: 100
}))