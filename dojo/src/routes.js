import Home from '@/app/modules/Home'
import Listar from '@/app/modules/Paciente/Listar'
import Cadastro from '@/app/modules/Paciente/Cadastro'
import Erro from '@/app/modules/Erro'
import Teste from '@/app/modules/Teste'

const router = [
  {
    path: '/home',
    name: 'home',
    components: {
      'default': Home
    },
    children: [
      {
        path: '/home',
        name: 'home-listar',
        components: {
          'listar': Listar
        }
      },
      {
        path: 'cadastro',
        name: 'home-cadastro',
        components: {
          'cadastro': Cadastro
        }
      }
    ]
  },
  {
    path: '/home/listar',
    name: 'listar',
    component: Listar
  },
  {
    path: '/home/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/*',
    name: 'erro',
    component: Erro
  }
]

export default router
