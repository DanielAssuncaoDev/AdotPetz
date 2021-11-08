import axios from 'axios'
    const api = axios.create({
        baseURL: 'http://localhost:3030'
    })

        export default class Api{

            async cadastrarse(credenciais){
                let r = await api.post('/user/cadastrar', credenciais)
                return r.data
            }

            async login(credenciais){
                let r = await api.post('/user/login', credenciais)
                return r.data
            }

            async racasDisponiveis(){
                let r = await api.get('/pets/racasDisponiveis')
                return r.data
            }

            async listarPets(filtro){
                let r = await api.post(`/pets`, filtro)
                return r.data
            }

            async listarAnimaisCadastrados(){
                let r = await api.get('pets/admin/animaisCadastrados' )
                return r.data
            }

            async remover(id) {
                let r = await api.delete(`/pets/admin/:idPet/${id}`)
                return r.data;
            }
            
            async listarMinhasAdocoes(id) {
                let r = await api.get(`/adocoes/minhasAdocoes/${id}`);
                return r.data;
            }

            async adicionarPets(nome, especie, raca, sexo, peso, nascimento, porte, descricao/*, imgPet1, imgPet2, imgPet3*/){
                let r = await api.post('/admin/addpet', {nome, especie, raca, sexo, peso, nascimento, porte, descricao/*, imgPet1, imgPet2, imgPet3*/})
                return r.data
            }

            async removerSoliAdo(id){
                let r = await api.delete(`adocoes/minhasAdocoes/${id}`);
                return r.data;
            }

            // async loginAdm(){

            // }
        }
