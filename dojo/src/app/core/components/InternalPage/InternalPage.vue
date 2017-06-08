<template lang="html">
  <div class="container">

    <div class="container__menu">

      <div class="container__menu__left">
        <div class="">
          <router-link :to="{name: 'home'}">
            Home
          </router-link>
        </div>
        <div @click="goToListar">
          Listar
        </div>
        <div @click="goToCadastro">
          Cadastro
        </div>
      </div>

      <div class="container__menu__right">
        Quantidade de pacientes: {{ total }}
      </div>

    </div>

    <div class="container__content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import Listar from '@/app/modules/Paciente/Listar'

  export default {
    components: {
      Listar
    },
    data: () => ({
      qtdPacientes: 1
    }),
    computed: {
      total() {
        return this.qtdPacientes
      }
    },
    methods: {
      goToListar() {
        this.$router.push({name: 'listar'})
      },
      goToCadastro() {
        this.$router.push({name: 'cadastro'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './internal-page';
</style>
