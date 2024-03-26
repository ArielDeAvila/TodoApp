<template> 
  <header class="w-100">
    <div class="d-flex align-center justify-space-between ga-2">
      <div>
        <v-btn
          class="d-block d-lg-none"
          @click="open=!open"
          icon
          variant="text"
          >
            <v-icon v-if="!open" icon="mdi-menu"/>
            <v-icon v-else icon="mdi-close"/>
        </v-btn>
      </div>
      
      <div class="position-relative">
        <Dropdown
          theme="custom-dropdown"
          @show="dropdown=!dropdown"
          @hide="dropdown=!dropdown">

          <v-btn
            variant="text"
            icon
            :ripple="false"
          >
            <!-- <v-icon
              icon="mdi-chevron-down"
              :style="`transform: rotate(${ dropdown ? '180deg' : '0deg' });`" 
            /> -->
            <v-icon :icon="dropdown ? 'mdi-account' : 'mdi-account-outline'"/>
          </v-btn>

          <template #popper>
            <!-- <v-btn>Cerrar sesión</v-btn> -->
            <div class="cursor-pointer"  >
              <v-btn @click="onLogOut()" size="small" style="text-transform: capitalize;">Cerrar sesión</v-btn>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </header>
</template> 

<script lang='ts' setup>
import FloatingVue, { Dropdown } from 'floating-vue';
import { ref } from 'vue';
import useAuthStore from '@/modules/auth/stores/authStores';
import router from '@/router/Index';

const authStore = useAuthStore();

const open = defineModel({
  required: true,
  type: Boolean
})

FloatingVue.options.themes = {
  'custom-dropdown': {
    // '$extend': 'dropdown',
    triggers: ['click'],
    autoHide: true,
    eagerMount: true,
    placement: 'bottom-end',
    // distance: 14,  
  },
}

const dropdown = ref(false)

async function onLogOut() {  
  authStore.logOut().then(() => {
    router.push({name: 'login'})
  })
}
</script> 

<style lang='scss' scoped> 

</style>