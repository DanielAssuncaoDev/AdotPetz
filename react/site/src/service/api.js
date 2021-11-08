import axios from 'axios'
    const api = axios.create({
        baseURL: 'http://localhost:3030'

         /*baseURL: 'https://tcc-adotpetz.herokuapp.com'*/  // API Hero
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

            async listarPets(filtro, limit, offset){
                let r = await api.post(`/pets?limit=${limit}&offset=${offset}`, filtro)
                return r.data
            }

            async listarAnimaisCadastrados(){
                let r = await api.get('pets/admin/animaisCadastrados' )
                return r.data
            }

            async remover(id) {
                let r = await api.delete(`/pets/admin/${id}`)
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

            async editarPet(id, nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3){
                let r = await api.put('/alterar/:idpet', { id,  nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3});
                return r.data;

            }

            async ordenarSolicitacoes () {
                let r = await api.get('/admin/solicitacoes/');
                return r.data;
            }

            async deletarSolicitacao (id) {
                let r = await api.delete(`/admin/solicitacoes/${id}`)
                return r.data;
            }

        }
