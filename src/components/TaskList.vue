<template>
    <div class="task-list">
      <h1>Task List</h1>
      <input
        type="text"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task"
      />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span>{{ task }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>

<script setup>
import { ref } from 'vue';

const tasks = ref([]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim());
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style scoped>
.task-list {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
}

button:hover {
  background-color: #ff1a1a;
}

span {
  word-break: break-word;
  max-width: 80%;
}
</style>