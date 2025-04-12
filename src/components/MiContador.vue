<template>
  <h1>Hola World</h1>
 <p>{{ contador }}</p>
 <button @click="incrementar" >Incrementar</button>
 <button @click="decrementar" >Decrementar</button>
  <button @click="resetear" >Resetear</button>
</template>

<script setup>

import { ref } from 'vue';
const contador = ref(0);

const incrementar = () => {
  contador.value++;
};
const decrementar = () => {
  contador.value--;
};
const resetear = () => {
  contador.value = 0;
};

</script>



<style scoped>
p {
  font-size: 2rem;
  color: #42b983;
}
h1 {
  color: #35495e;
  margin-bottom: 20px;
}
button {
  margin: 5px;
  padding: 10px;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
