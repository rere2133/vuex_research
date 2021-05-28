<template>
    <div>
        <h1>Add Todo</h1>
        <div class="add">
            <form>
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="button" value="Submit" @click="onsubmit">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onsubmit() {
            console.log('submit');
            this.addTodo(this.title)
            this.title = ''
        }
    }
}
</script>
<style scoped>
form{
    display: flex;
}
input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
}
input[type="text"]:focus{
    outline: none;
}
input[type="button"]{
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
}
</style>