<template> 
  <v-layout class="bg-background">
    <v-navigation-drawer
      :elevation="0"
      class="nav-bar"
      v-model="open"
    >
      <nav-bar/>
    </v-navigation-drawer>

    <v-app-bar
      scroll-behavior="elevate"
      :elevation="0"
      height="82"
      class="app-bar px-5 px-sm-10"
      :order="order"
      style="background-color: transparent;"
    >
      <app-bar @open="open=!open" :opened="open"/>
    </v-app-bar>    

    <v-main  class="app-main" style="height: 100dvh;">
      <main class="main-container px-5 px-sm-10 pt-10">
        <router-view></router-view>
      </main>
    </v-main>
  </v-layout>
</template> 

<script lang='ts' setup> 
import AppBar from '../components/AppBar.vue';
import NavBar from '../components/NavBar.vue';

import { ref, watch, onMounted } from 'vue';
import { useDisplay } from 'vuetify'


const open = ref(false)
const order = ref(0)

const { lgAndUp, xs } = useDisplay()

watch(lgAndUp, (newMD) => {
  open.value = newMD
})

watch(xs, (value) => {
  if (value) order.value = -1
  else order.value = 0
})

onMounted(() => {
  if (lgAndUp.value) {
    open.value = true
  }

  if (xs.value) {
    order.value = -1
  }
})

</script> 

<style lang='scss' scoped> 
.nav-bar{ 
  border: 1px solid rgb(var(--v-theme-line-border));
  box-shadow: 0 4px 54px #06061380;
  border-radius: 0 20px 20px 0;
  background: rgba(14,17,29,.5);

  @media (max-width: 1279px){
    border-radius: 0;
    background: rgb(var(--v-theme-solid-background)) !important;
  }

  @media (max-width: 520px){
    width: 100% !important;
  }

  &::before{
    content: "";
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    margin-top: -60px;
    left: 0;
    border-radius: 50%;
    background: linear-gradient(44deg,#0781fe 0%,#00c7b4 100%);
    filter: blur(190px);
  }
}

.app-bar{
  &:not(.v-toolbar--flat){
    background-color: rgb(var(--v-theme-background)) !important;
  }

  &::before{
    position: absolute;
    z-index: 2;
    content: "";
    display: block;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.09),rgba(255,255,255,0));
  }
}

.app-main{
  &::before{
    content: "";
    width: 150px;
    height: 150px;
    position: absolute;
    top: -100px;
    right: 40%;
    border-radius: 50%;
    background: linear-gradient(44deg,#0781fe 0%,#00c7b4 100%);
    filter: blur(197px);
  }
}

.main-container{
  padding-bottom: 30px !important;
  // width: 100%;
}
</style>