<template lang="html">
  <div class="">
    {{ nomeCompleto }} <br/>
    {{ nomeFormalizado }}

    <button :class="{'classeDesabilitadora': isDisabled}">OK</button>
    <div v-for="pessoa in pessoa">
      <span>{{ pessoa.nome }}</span>
      <em :class="{'icon': getIcon(pessoa.sexo)}"></em>
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    nome: 'joão',
    sobrenome: 'nelson'
  }),
  methods: {
    executar() {
      window.alert('bla')
    }
  },
  computed: {
    nomeFormatado() {
      return `${this.nome.substr(0,1).toUpperCase()}${this.nome.substr(1)}`
    },
    sobrenomeFormatado() {
      return `${this.sobrenome.substr(0,1).toUpperCase()}${this.sobrenome.substr(1)}`
    },
    nomeCompleto() {
      return `${this.nomeFormatado} ${this.sobrenomeFormatado}`
    },
    nomeFormalizado() {
      return `Dr. ${this.nomeCompleto}`
    }
  }
}
</script>

<style lang="css">
</style>
