<template>
  <div>
    <h2>Register Form</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name:</label>
        <Field type="text" name="name" id="name" placeholder="Enter your name" />
        <ErrorMessage name="name" class="error" />
      </div>
      <div class="form">
        <label for="email">Email:</label>
        <Field type="email" name="email" placeholder="Enter your email" />
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

const onSubmit = (values) => {
  console.log('Form submitted with values:', values)
  // Here you can handle the form submission, e.g., send data to an API
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
