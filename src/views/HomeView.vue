<script setup lang="ts">
// // 实现Pcik
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type MyPick<T, P extends keyof T = keyof T> = {
//   readonly [K in P]: T[K]
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// }

// // 接收数组 对应的数组类型
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type TupleToObject<T extends readonly any[]> = {
//   readonly [K in T[number]]: K
// }

// type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


</script>

<template>
  <div>
      Hello VUE
  </div>
</template>
