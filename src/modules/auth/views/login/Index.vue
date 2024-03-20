<template> 
  <section class="d-flex flex-column align-center justify-center ga-10">
    <h1>Login</h1>

    <v-card rounded="xl" class="pa-5 pb-8 border" width="500"> 
      <div class="d-flex align-center justify-center mb-8">
        <img src="@/assets/images/img/todo.png" alt="ToDo logo" width="120">
      </div>
      <vee-form @submit.prevent="onLogin">
        <div class="d-flex flex-column ga-2 mb-2">
          <label>E-mail</label>
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            placeholder="Ingrese su e-mail"
            variant="solo-filled"
            prepend-inner-icon="mdi-email-outline"
            density="compact"/>
        </div>
        <div class="d-flex flex-column ga-2 mb-2">
          <label>Contraseña</label>
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            placeholder="Ingrese su contraseña"
            variant="solo-filled"
            prepend-inner-icon="mdi-lock-outline"
            density="compact" />
        </div>
        <div class="mb-5">
          <p>¿Aún no tienes cuenta? <router-link :to="{name: 'register'}">Registrate</router-link></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn class="btn-primary w-50" rounded="lg" variant="flat" height="40">
            Login
          </v-btn>
        </div>
      </vee-form>
    </v-card>
  </section>
</template> 

<script lang='ts' setup>
import { Form as VeeForm } from 'vee-validate';
import { reactive } from 'vue';

function onLogin() {
  
}

const form = reactive({
  email: null,
  password: null
})

const rules = {
  email: [
    (value: string) => !!value || 'Email es obligatorio',
    (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Debe ser un correo valido'
  ],
  password: [
    (v: string) => !!v || 'La contraseña es obligatoria',
    // (v: string) => 
  ]
}
</script> 

<style lang='scss' scoped> 

</style>