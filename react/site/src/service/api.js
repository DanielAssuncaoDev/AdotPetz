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

<<<<<<< HEAD
//             async remover(id) {
// <<<<<<< HEAD:react/service/api.js
//                 let r = await api.delete('/pet/:idPet}')
// =======
//                 let r = await api.delete(`/pet/:idPet/${id}`)
// >>>>>>> aa5ca246d6ae1dee046182dedc207f9c0f63c859:react/site/src/service/api.js
//                 return r.data
//             }
=======
            async remover(id) {
                let r = await api.delete(`/pet/:idPet/${id}`)
                return r.data;
            }
>>>>>>> 452289b0d882097170bda3cf556dcdfa6545106e
            
            async listarMinhasAdocoes(id) {
                let r = await api.get(`/minhasAdocoes/${id}`);
                return r.data;
            }

            async adicionarPets( pet ){
                // let pet = { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3}
                let r = await api.post('/admin/addpet', pet)
                return r.data
            }

            async removerSoliAdo(id){
            let r = await api.delete(`/minhasAdocoes/${id}`);
            return r.data;
            }
        }
