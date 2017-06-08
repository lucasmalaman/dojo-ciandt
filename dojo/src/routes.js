import Home from '@/app/modules/Home'
import Listar from '@/app/modules/Paciente/Listar'
import Cadastro from '@/app/modules/Paciente/Cadastro'
import Erro from '@/app/modules/Erro'

const router = [
  {
    path: '/home',
    name: 'home',
    component: Home
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
