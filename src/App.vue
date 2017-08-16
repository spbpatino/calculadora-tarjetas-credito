<template>
  <section>
    <router-link :to="{ name: 'home'}">Inicio</router-link>
    <router-link :to="{ name: 'registro' }">Registrarse</router-link>
    <router-link :to="{ name: 'iniciar_sesion' }">Iniciar sesión</router-link>

    <router-view></router-view>
  </section>
</template>

<script>
export default {
  //name: 'app',
}
</script>

<style>

</style>
