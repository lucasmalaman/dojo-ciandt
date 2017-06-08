<template>
  <div id="app">

    <div class="container">

      <div class="container__menu">

        <div class="container__menu__left">
          <div>
            Listar
          </div>
          <div>
            Cadastro
          </div>
        </div>

        <div class="container__menu__right">
          Quantidade de pacientes: 10
        </div>

      </div>

      <div class="container__content">
        content

        <table border="1">
          <thead>
            <th>Código</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
            <th>DataNascimento</th>
            <th>Ação</th>
          </thead>
          <tr>
            <td>Bla</td>
            <td>Bla</td>
            <td>Bla</td>
            <td>Bla</td>
            <td>Bla</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
          <tr v-for="p in pacientes">
            <td>{{ p.nome }}</td>
          </tr>
        </table>

        <br/>
        <br/>
        <br/>

        <div class="">
          bla
        </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss">

  .container {
    width: 98%;
    height: 85%;
    margin: 0 auto;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    position: absolute;

    > div {
      margin: 5px;
      border: 1px solid black;
    }

    &__menu {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 15px;


      &__left {
        display: flex;
        flex-direction: row;
        > div {
          text-decoration: underline;
          margin-right: 15px;
          cursor: pointer;
          &:hover {
            color: blue;
          }
        }
      }
      &__right {

      }
    }

    &__content {
      flex-grow: 10;
      padding: 15px;

      table {
        width: 100%;
      }
    }

  }

</style>

<script>
  export default {
    name: 'app',
    data: () => ({
      pacientes: []
    }),
    mounted() {
      // this.$http.get('http://localhost:8010/pacientes/')
      //   .then(response => {
      //     this.pacientes = response.body
      //   })
      this.$http.get('/pacientes/')
        .then(response => {
          this.pacientes = response.body
        })
    }
  }


</script>
