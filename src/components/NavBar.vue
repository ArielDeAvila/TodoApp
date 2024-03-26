<template> 
  <nav class="pt-5 d-flex flex-column px-5 ga-15">
    <div class="d-flex align-center ga-5">
      <img src="@/assets/images/img/todo.png" alt="Logo To Do" width="50">
      <h2>ToDo App</h2>
    </div>

    <div class="nav__cards">
      <v-card class="pa-2 cursor-pointer" rounded="lg" color="#0B242F">
        <div>
          <div class="d-flex align-center justify-space-between mb-2">
            <v-icon icon="mdi-clock-outline" size="small"/>
            <p class="txt-semibold">0</p>
          </div>
          <p class="txt-medium">Pendientes</p>
        </div>
      </v-card>

      <v-card class="pa-2 cursor-pointer" rounded="lg" color="#00c7b4">
        <div>
          <div class="d-flex align-center justify-space-between mb-2">
            <v-icon icon="mdi-check-decagram" size="small"/>
            <p class="txt-semibold">0</p>
          </div>
          <p class="txt-medium">Completos</p>
        </div>
      </v-card>

      <v-card class="pa-2 cursor-pointer" rounded="lg" color="#F9DA65">
        <div>
          <div class="d-flex align-center justify-space-between mb-2">
            <v-icon icon="mdi-view-dashboard" size="small"/>
            <p class="txt-semibold">0</p>
          </div>
          <p class="txt-medium">Todos</p>
        </div>
      </v-card>
    </div>
  </nav>
</template> 

<script lang='ts' setup> 

</script> 

<style lang='scss' scoped> 
.nav{
  &__cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100px,100%),1fr));
    gap: 10px;
  }
}
</style>