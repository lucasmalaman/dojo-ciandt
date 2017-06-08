import Vue from 'vue'

const paciente = new Vue({
  methods: {
    listar() {
      return this.$http.get('/pacientes/')
    },
    salvar(user) {
      return this.$http.post('/pacientes/salvar', user)
    }
  }
})

export default paciente
