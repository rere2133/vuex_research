<template>
  <div class="home">
    <AddTodo/>
    <FilterTodos/>
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'

export default {
  name: 'Home',
  components: {
    Todos, AddTodo, FilterTodos
  },
  data(){
    return {
    }
  }
}
</script>
