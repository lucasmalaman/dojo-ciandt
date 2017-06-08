<template lang="html">
  <div class="">
    <internal-page ref="bla">
      <div class="">
        <div class="form">

          <div class="form__field">
            <label>Códgio: </label>
            <input type="text" v-model="user.codigo">
          </div>

          <div class="form__field">
            <label>Nome: </label>
            <input type="text" v-model="user.nome">
          </div>

          <div class="form__field">
            <label>Sobrenome: </label>
            <input type="text" v-model="user.sobrenome">
          </div>

          <div class="form__field">
            <label>Idade: </label>
            <input type="text" v-model="user.idade">
          </div>

          <div class="form__field">
            <label>Data Nascimento: </label>
            <input type="text" v-model="user.dataNascimento">
          </div>

        </div>

        <button @click="salvar">Salvar</button>

      </div>

    </internal-page>
  </div>
</template>

<script>
  import moment from 'moment'
  import pacienteService from '@/app/services/paciente'

  export default {
    data: () => ({
      user: {
        codigo: '',
        nome: '',
        sobrenome: 'wqewq',
        dataNascimento: '',
        idade: null
      }
    }),
    methods: {
      salvar() {
        if (this.user.codigo === '') {
          this.user.codigo = null
        }

        pacienteService.salvar(this.user)
          .then(() => {
            this.limparDados()
            this.incrementar()
          }).catch(e => {
            window.alert(JSON.stringify(e))
          })
      },
      incrementar() {
        this.$refs.bla.qtdPacientes++
      },
      limparDados() {
        this.user.nome = ''
        this.user.sobrenome = ''
        this.user.dataNascimento = ''
        this.user.idade = ''
      }
    }
  }
</script>

<style lang="scss">
  @import './cadastro';
</style>
