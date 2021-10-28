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
                let r = await api.post('/login', credenciais)
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

//             async remover(id) {
// <<<<<<< HEAD:react/service/api.js
//                 let r = await api.delete('/pet/:idPet}')
// =======
//                 let r = await api.delete(`/pet/:idPet/${id}`)
// >>>>>>> aa5ca246d6ae1dee046182dedc207f9c0f63c859:react/site/src/service/api.js
//                 return r.data
//             }
            
            async listarMinhasAdocoes() {
                let r = await api.get('/minhasAdocoes/:idUsuario');
                return r.data;
            }

        }
