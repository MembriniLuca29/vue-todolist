const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
          text: "fare to do list",
          done: false
        },
        {
          text: "lezione nel pomeriggio",
          done: false
        },
        {
          text: "diablo 4",
          done: false
        }
      ],
      newTodo: ''
    }
  },
  methods: {
    changeDone(index) {
      if (this.todos[index].done === false) {
        this.todos[index].done = true;
      } else {
        this.todos[index].done = false;
      }
      console.log(this.todos[index].done);
    },
    remove(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({
          text: this.newTodo,
          done: false
        });
        this.newTodo = '';
      }
    }
  }
}).mount('#app');
