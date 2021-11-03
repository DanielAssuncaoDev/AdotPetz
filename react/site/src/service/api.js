import axios from 'axios'
    const api = axios.create({
        baseURL: 'http://localhost:3030'
    })

        export default class Api{

            async cadastrarse(credenciais){
                let r = await api.post('/cadastrar', credenciais)
                return r.data
            }

            async login(credenciais){
                let r = await api.post('/login', credenciais)
                return r.data
            }

            async racasDisponiveis(){
                let r = await api.get('/racasDisponiveis')
                return r.data
            }

            async listarPets(filtro){
                let r = await api.post(`/pets`, filtro)
                return r.data
            }

            async listarAnimaisCadastrados(filtro){
                let r = await api.get('/admin/animaisCadastrados', filtro )
                return r.data
            }

            async remover(id) {
                let r = await api.delete(`/pet/:idPet/${id}`)
                return r.data
            }
            
            async listarMinhasAdocoes() {
                let r = await api.get('/minhasAdocoes/:idUsuario');
                return r.data;
            }

        }
