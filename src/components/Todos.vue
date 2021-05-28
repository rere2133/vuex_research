<template>
  <div>
  <h1>Todos</h1>
  <div class="todos">
    <div v-for="item in allTodos"  :key="item.id" class="todo">
      {{ item.title }}
      <i class="fas fa-trash" @click="deleteTodo(item.id)"></i>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'Todos',
  computed: mapGetters(['allTodos']),
  created(){
    this.fetchTodos();
  },
  methods:{
    ...mapActions(['fetchTodos', 'deleteTodo']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo{
  // border: 1px solid #ccc;
  background-color: rgb(110, 219, 183);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i{
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
