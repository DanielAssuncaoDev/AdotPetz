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

            async remover(id) {
                let r = await api.delete(`/pet/:idPet/${id}`)
                return r.data;
            }
            
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
