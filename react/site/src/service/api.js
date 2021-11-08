import axios from 'axios'
    const api = axios.create({
<<<<<<< HEAD
        baseURL: 'https://tcc-adotpetz.herokuapp.com'
=======
        baseURL: 'http://localhost:3030'

         /*baseURL: 'https://tcc-adotpetz.herokuapp.com'*/  // API Hero
>>>>>>> f0c3bf96d384fd77546badba6405306e4fd5603c
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
                let r = await api.delete(`/pets/admin/${id}`)
                return r.data;
            }
            
            async listarMinhasAdocoes(id) {
                let r = await api.get(`/adocoes/minhasAdocoes/${id}`);
                return r.data;
            }

            async adicionarPets( pet ){
                // let pet = { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3}
                let r = await api.post('/admin/addpet', pet)
                return r.data
            }

            async removerSoliAdo(id){
                let r = await api.delete(`adocoes/minhasAdocoes/${id}`);
                return r.data;
            }

            async loginAdm(){
                let r = await api.post('/admin/login');
                return r.data;
            }

            async ordenarSolicitacoes () {
                let r = await api.get('/admin/solicitacoes/');
                return r.data;
            }

            


        }
