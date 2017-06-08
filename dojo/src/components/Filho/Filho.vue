<template lang="html">
  <div class="container-nome" style="margin-bottom: 30px">

    <div>
      <span>Nome:</span> {{ nome }}
    </div>

    <div>
      <span>Sobrenome:</span> {{ sobrenome }}
    </div>

    <div>
      <span>Idade:</span> {{ idade }}
    </div>

    <div>
      <span>Estado Civil:</span> {{ estadoCivil }}
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      idade: {
        type: Number,
        default: () => 15
      },
      nome: null,
      sobrenome: undefined,
      estadoCivil: null
    }
  }
</script>

<style lang="css">
</style>
