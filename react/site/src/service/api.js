import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {

    async cadastrarse(credenciais) {
        let r = await api.post('/user/cadastrar', credenciais)
        return r.data
    }

    async login(credenciais) {
        let r = await api.post('/user/login', credenciais)
        return r.data
    }

    async racasDisponiveis() {
        let r = await api.get('/pets/racasDisponiveis')
        return r.data
    }

    async listarPets(filtro, limit, offset) {
        let r = await api.post(`/pets?limit=${limit}&offset=${offset}`, filtro)
        return r.data
    }

    async listarAnimaisCadastrados() {
        let r = await api.get('pets/admin/animaisCadastrados')
        return r.data;
    }

    async remover(id) {
        let r = await api.delete(`/pets/admin/${id}`)
        return r.data;
    }

    async listarMinhasAdocoes(id) {
        let r = await api.get(`/adocoes/minhasAdocoes/${id}`);
        return r.data;
    }

    // async adicionarPets(nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3){
    //     let r = await api.post('pets/admin/addpet', {nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3})
    //     return r.data;
    // }

    async adicionarPets(formdata) {
        let r = await api.post('pets/admin/addpet', formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        return r.data;
    }

    async removerSoliAdo(id) {
        let r = await api.delete(`adocoes/minhasAdocoes/${id}`);
        return r.data;
    }


    async editarPet(idPet, nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3) {
        let r = await api.put(`/pets/alterar/${idPet}`, { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3 });
        return r.data;
    }
    async loginAdm(codigo, senha) {
        let r = await api.post('/adm/login', { codigo, senha });
        return r.data;
    }

    async adotarPet(idPet, formUser) {
        let r = await api.post(`/adocoes/adotarPet/${idPet}`, formUser);
        return r.data;
        // {nomeCompleto, nascimento, rg, telefone, cep, endereco, numero, complemento, bairro}
    }
    async ordenarSolicitacoes() {
        let r = await api.get('/admin/solicitacoes/');
        return r.data;
    }
            async alterarSituacao (idAdocao, solicitacaoAceita) {
                let r = await api.put(`/adocoes/admin/solicitacoes/${idAdocao}`, { solicitacaoAceita });
                return r.data;
            }
    

}
