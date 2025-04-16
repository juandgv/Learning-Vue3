<template>
  <div class="sidebar">
    <h2>Welcome</h2>
    <h3>Name: {{ registerStore.name }}</h3>
    <h3>Email: {{ registerStore.email }}</h3>
    <ul>
      <li><router-link to="/my-counter">Counter</router-link></li>
      <li><router-link to="/task-list">Task List</router-link></li>
      <li><router-link to="/user-register">User Register</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegisterStore } from '@/modules/Register/stores/registerStore'
const registerStore = useRegisterStore()
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
