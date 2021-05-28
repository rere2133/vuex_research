import axios from "axios";

const todoUrl = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: [],
};

//view透過getters拿到states
const getters = {
  allTodos: (state) => state.todos,
};

//api request, response 後呼叫mutations
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get(todoUrl);
    // console.log(res.data);
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post(todoUrl, {
      title,
      completed: false,
    });
    // console.log("add", res.data);
    commit("newTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`${todoUrl}/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    const options = e.target.options;
    const limit = parseInt(options[options.selectedIndex].innerText);
    // console.log('limit',limit);
    const res = await axios.get(`${todoUrl}?_limit=${limit}`);
    // console.log(res.data);
    commit("setTodos", res.data);
  },
};

//獲得data,改變states
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((el) => el.id != id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
