<template lang="html">
  <div class="">
    <internal-page ref="internalPage">
      <h1>home</h1>
      <router-view name="listar"></router-view>
      <router-view name="cadastro" v-on:incrementar="incrementar"></router-view>
    </internal-page>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      incrementar() {
        this.$refs.internalPage.qtdPacientes++
      }
    }
  }
</script>

<style lang="scss">
</style>
