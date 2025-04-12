<template>
    <div class="sidebar">
        <h2>Side Bar</h2>
        <ul>
            <li><router-link to="/miContador">Contador</router-link></li>
            <li><router-link to="/TaskList">Lista De Tareas</router-link></li>
        </ul>
        
    </div>
</template>

<script setup>


</script>

<style scoped>

.sidebar {
    width: 200px;
    background-color: #F0F0F0;
    padding: 20px;
}
</style>