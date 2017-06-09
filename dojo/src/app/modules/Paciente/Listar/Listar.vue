<template lang="html">
    <table border="1">
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
        <th>DataNascimento</th>
        <th>Ação</th>
      </thead>
      <tr v-for="p in pessoas">
        <td>{{ p.codigo}}</td>
        <td>{{ p.nome }}</td>
        <td>{{ p.sobreNome }}</td>
        <td>{{ p.idade }}</td>
        <td>{{ p.dataNascimento }}</td>
        <td>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
      </tr>
    </table>
</template>

<script>
  import pacienteService from '@/app/services/paciente'

  export default {
    data: () => ({
      pessoas: []
    }),
    mounted() {
      pacienteService.listar()
        .then(response => {
          this.pessoas = response.data
        })
    }
  }
</script>

<style lang="scss">
  @import './listar';
</style>
