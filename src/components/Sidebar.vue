<template>
  <div class="sidebar">
    <h2>Side Bar</h2>
    <ul>
      <li><router-link to="/my-counter">Counter</router-link></li>
      <li><router-link to="/task-list">Task List</router-link></li>
      <li><router-link to="/user-register">User Register</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
