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

// 实现Exclude

// type Exclude<T, E> = T extends E ? never : T

// // 实现Awaited

// type ExampleType = Promise<string>

// type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<any> ? MyAwaited<U> : U : never 

// type Result = MyAwaited<ExampleType> // string

// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。
//  type If<T extends Boolean, U, F> = T extends true ? U : F

// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'


// 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

// type Concat<T extends any[], U extends any[]> = [...T, ...U]
// type Result = Concat<[1], [2]> // expected to be [1, 2]

</script>

<template>
  <div>
      Hello VUE
  </div>
</template>
