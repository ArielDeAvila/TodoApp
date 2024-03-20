<template> 
  <v-layout class="bg-background">
    <v-main  class="app-main" style="height: 100dvh;">
      <main class="px-5 px-sm-10 pt-10">
        <router-view></router-view>
      </main>
    </v-main>
  </v-layout>
</template> 

<script lang='ts' setup> 

</script> 

<style lang='scss' scoped> 
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


</style>