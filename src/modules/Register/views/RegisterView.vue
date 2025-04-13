<template>
  <div>
    <h2>Register Form</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name:</label>
        <Field v-model="name" type="text" name="name" id="name" placeholder="Enter your name" />
        <ErrorMessage name="name" class="error" />
      </div>
      <div class="form">
        <label for="email">Email:</label>
        <Field v-model="email" type="email" name="email" placeholder="Enter your email" />
        <ErrorMessage name="email" class="error" />
      </div>
      <div class="form">
        <button type="submit">Register</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegisterStore } from '../stores/registerStore'
import { ref } from 'vue'

const registerStore = useRegisterStore()

const name = ref('')
const email = ref('')

const onSubmit = () => {
  registerStore.saveRegister(name.value, email.value)
  console.log('Form submitted with values:')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
