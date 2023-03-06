<template>
  <q-page>
    <q-card>
      <q-card-section>
        <h2>Login</h2>
        <q-form @submit.prevent="login">
          <q-input v-model="login.email" label="Email" type="email" required />
          <q-input v-model="login.password" label="Password" type="password" required />
          <q-btn type="submit" label="Login" color="primary" />
        </q-form>
        <div class="text-center q-mt-sm q-gutter-lg">
          <router-link class="text-white" to="/login">Esqueceu a senha?</router-link>
          <router-link class="text-white" to="/login">Criar conta</router-link>
        </div>
        <p>Don't have an account yet? <router-link to="/reg">Register</router-link></p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

import {mapActions} from "vuex";
import { useQuasar } from 'quasar'

let $q
export default {
  name: 'Login',
  data() {
    return {
      login:{
        email: 'milvicentejunior@gmail.com',
        password: '1234567'
      }
    };
  },
  methods: {
    ...mapActions('auth', ['doLogin']),
    async submitForm () {
      if (!this.login.username || !this.login.password) {
        $q.notify({
          type: 'negative',
          message: 'Os dados informados são inválidos.'
        })
      } else if (this.login.password.length < 6) {
        $q.notify({
          type: 'negative',
          message: 'A senha deve ter 6 ou mais caracteres.'
        })
      } else {
        try {
          await this.doLogin(this.login)
          const toPath = this.$route.query.to || '/'
          this.$router.push(toPath)
        } catch (err) {
          if (err.response.data.detail) {
            $q.notify({
              type: 'negative',
              message: err.response.data.detail
            })
          }
        }
      }
    }
  },
  mounted () {
    $q = useQuasar()
  }
};
</script>

<style scoped>

</style>
