<template> 
  <section class="d-flex flex-column align-center justify-center ga-10">
    <h1>Registrate</h1>

    <v-card rounded="xl" class="pa-5 pb-8 border w-100" max-width="500"> 
      <div class="d-flex align-center justify-center mb-8">
        <img src="@/assets/images/img/todo.png" alt="ToDo logo" width="120">
      </div>
      <vee-form @submit="onRegister" v-slot="{ isSubmitting }">
        <div class="d-flex flex-column ga-2 mb-2">
          <label>E-mail</label>
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            placeholder="Ingrese su e-mail"
            variant="solo-filled"
            prepend-inner-icon="mdi-email-outline"
            density="compact"
            type="email" />
        </div>
        <div class="d-flex flex-column ga-2 mb-2">
          <label>Nombre de usuario</label>
          <v-text-field
            v-model="form.userName"
            :rules="rules.userName"
            placeholder="Ingrese su nombre de usuario"
            variant="solo-filled"
            prepend-inner-icon="mdi-email-outline"
            density="compact"
            type="text"/>
        </div>
        <div class="d-flex flex-column ga-2 mb-2">
          <label>Contraseña</label>
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            hide-details="auto"
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
          <div class="d-flex flex-column" style="font-size: 12px;">
            <div
              class="d-flex align-center ga-2"
              :class="colorText(validatePassword.number)">
                <v-icon :icon='icon(validatePassword.number)'/>
                <p>La contraseña debe tener al menos un número</p>
            </div>
            <div
              class="d-flex align-center ga-2"
              :class="colorText(validatePassword.uppercase)">
                <v-icon :icon='icon(validatePassword.uppercase)'/>
                <p>La contraseña debe tener al menos una letra mayúscula</p>
            </div>
            <div
              class="d-flex align-center ga-2"
              :class="colorText(validatePassword.lowercase)">
                <v-icon :icon='icon(validatePassword.lowercase)'/>
                <p>La contraseña debe tener al menos una letra minúscula</p>
            </div>
            <div
              class="d-flex align-center ga-2"
              :class="colorText(validatePassword.specialCharacter)">
                <v-icon :icon='icon(validatePassword.specialCharacter)'/>
                <p>La contraseña debe tener al menos un carácter especial</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column ga-2 mb-2">
          <label>Confirmar contraseña</label>
          <v-text-field
            v-model="form.verifyPassword"
            :rules="rules.verifyPassword"
            placeholder="Ingrese nuevamente su contraseña"
            variant="solo-filled"
            prepend-inner-icon="mdi-lock-outline"
            density="compact"
            :type="verifyPasswordView ? 'text' : 'password'">
            <template v-slot:append-inner>
              <v-icon
                :icon="verifyPasswordView ? 'mdi-eye-outline': 'mdi-eye-off-outline'" 
                class="cursor-pointer"
                @click="verifyPasswordView=!verifyPasswordView"/>
            </template>
          </v-text-field>
        </div>
        <div class="mb-5">
          <p>¿Ya tienes cuenta? <router-link :to="{name: 'login'}">Inicia sesión</router-link></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="btn-primary w-100"
            max-width="250"
            rounded="lg"
            variant="flat"
            height="40"
            :loading="isSubmitting"
            type="submit"
            >
            Registrate
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
import { useToast } from "vue-toastification";
import router from '@/router/Index';

const authStore = useAuthStore()
const toast = useToast();

async function onRegister() {
  const response = await authStore.register(form)

  if (response.success) {
    toast.success(response.message)
    router.push({name: 'login'})
  } else {
    toast.error(response.message)
  }
}

const form = reactive({
  email: null,
  userName: null,
  password: null,
  verifyPassword: null
})

const rules = {
  email: [
    (value: string) => !!value || 'Email es obligatorio',
    (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Debe ser un correo valido'
  ],
  userName: [
    (v: string) => !!v || 'El nombre de usuario es obligatorio'
  ],
  password: [
    (v: string) => !!v || 'La contraseña es obligatoria',
    // (v: string) => 
  ],
  verifyPassword: [
    (v: string) => !!v || 'Confirmar contraseña es obligatorio',
    (v: string) => v == form.password || 'Las contraseñas deben coincidir'
  ]
}

const colorText = (f: Function) : string => {
  if (form.password==null) {
    return 'text-white'
  } else if (f(form.password)) {
    return 'text-green'
  } else {
    return 'text-red'
  }
}

const icon = (f: Function) : string => {
  if (form.password==null) {
    return 'mdi-circle-small'
  } else if (f(form.password)) {
    return 'mdi-check'
  } else {
    return 'mdi-alert-circle-outline'
  }
}

const validatePassword = {
  number: (password: string) => /\d/.test(password),
  uppercase: (password: string) => /[A-Z]/.test(password),
  lowercase: (password: string) => /[a-z]/.test(password),
  specialCharacter: (password: string) => /[!@#$%^&*()_+{}\[\]:;\"'|\\<,>.?/]/.test(password)  
}

const passwordView = ref(false)

const verifyPasswordView = ref(false)
</script> 

<style lang='scss' scoped> 

</style>