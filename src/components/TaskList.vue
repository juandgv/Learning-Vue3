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
        <li v-for="( task, index) in tasks" :key="index">
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

</style>