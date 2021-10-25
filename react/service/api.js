import Axios from 'axios'

    const api = Axios.create({
        baseURL: 'http://localhost:3030'
    })

        export default class Api{

            async cadastrarse(credenciais){
                let r = await api.post('/cadastrar', credenciais)
                return r.data
            }

            async login(credenciais){
                let r = await api.get('/login', credenciais)
                return r.data
            }

            async listarPets(filtro){
                let r = await api.get('/pets', filtro)
                return r.data
            }

            async listarAnimaisCadastrados(filtro){
                let r = await api.get('/admin/animaisCadastrados', filtro )
                return r.data
            }

            async remover(id) {
                let r = await api.delete('/pet/:idPet}')
                return r.data
            }



        }
