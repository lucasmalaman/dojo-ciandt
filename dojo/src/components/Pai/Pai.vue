<template lang="html">

  <div class="container-pai">

    <h4>{{ hoje }}</h4>
    <h4 v-text="hoje"></h4>
    <h4 v-html="hoje"></h4>

    <h1>
        {{ nome }} - {{ idade }}
    </h1>

    <filho :idade="42" nome="Seu"
      :sobrenome="'Manel'" v-bind:estadoCivil="'Solteiro'"></filho>
    <filho></filho>

  </div>

</template>

<script>
  import Filho from '@/components/Filho'

  export default {
    components: {
      Filho
    },
    data: () => ({
      nome: 'João',
      idade: 15,
      hoje: `<i>${new Date()}</i>`,
      // estrutura: {
      //   'atributo1': 'bla'
      // },
      // meuArray: [
      //   {
      //     val1: '1',
      //   }
      //   {
      //     val1: '2',
      //   }
      // ]
    }),
    beforeDestroy() {
      //TODO: salvar os dados no localStorage
    },
    beforeMount() {
      //TODO: Iniciar um loading antes de montar a tela
    },
    mounted() {
      //TODO: Carregar os dados do backend
    }
  }
</script>

<style lang="scss">
</style>
