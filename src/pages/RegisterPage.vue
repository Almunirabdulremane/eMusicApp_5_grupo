<template>
  <q-page>
    <q-card>
      <q-card-section>
        <h2>Register</h2>
        <q-form @submit.prevent="register">
          <q-input v-model="email" label="Email" type="email" required />
          <q-input v-model="password" label="Password" type="password" required />
          <q-input v-model="confirmPassword" label="Confirm Password" type="password" required />
          <q-btn type="submit" label="Register" color="primary" />
        </q-form>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Implemente o código para registrar o usuário aqui
      console.log(`Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`);
    }
  }
};
</script>

<style scoped>

</style>
