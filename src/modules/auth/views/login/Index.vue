<template> 
  <section class="d-flex flex-column align-center justify-center ga-10">
    <h1>Inicia sesión</h1>

    <v-card rounded="xl" class="pa-5 pb-8 border w-100" max-width="500"> 
      <div class="d-flex align-center justify-center mb-8">
        <img src="@/assets/images/img/todo.png" alt="ToDo logo" width="120">
      </div>
      <vee-form @submit="onLogin" v-slot="{ isSubmitting }">
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
            density="compact" 
            :type="passwordView ? 'text' : 'password'">
            <template v-slot:append-inner>
              <v-icon
                :icon="passwordView ? 'mdi-eye-outline': 'mdi-eye-off-outline'" 
                class="cursor-pointer"
                @click="passwordView=!passwordView"/>
            </template>
          </v-text-field>
        </div>
        <div class="mb-5">
          <p>¿Aún no tienes cuenta? <router-link :to="{name: 'register'}">Registrate</router-link></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="btn-primary w-100"
            max-width="250"
            rounded="lg"
            variant="flat"
            height="40"
            :loading="isSubmitting"
            type="submit">
            Iniciar sesión
          </v-btn>
        </div>
      </vee-form>
    </v-card>
  </section>
</template> 

<script lang='ts' setup>
import { Form as VeeForm } from 'vee-validate';
import { reactive, ref } from 'vue';
import useAuthStore from '../../stores/authStores';
import { useToast } from 'vue-toastification';
import router from '@/router/Index';

const authStore = useAuthStore()
const toast = useToast()

async function onLogin() {
  const response = await authStore.login(form)

  if(response.success) {
    toast.success('Sesión iniciada correctamente')
    router.push({name: 'dashboard'})
  } else {
    toast.error(response.message)
  }
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

const passwordView = ref(false)
</script> 

<style lang='scss' scoped> 

</style>