<template>
  <AppHeader :mensaje="texto" />
  <div class="container">
    <Sidebar />
    <div class="content">
      <input type="text" v-model="texto" />
      {{ texto }}
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import { ref } from 'vue'

const texto = ref('')
</script>

<style scoped>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
