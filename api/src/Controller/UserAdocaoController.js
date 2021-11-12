import express from 'express'
import db from '../db.js'

    const app = express.Router()

    // Listar Adoções do Usuario

    app.get('/minhasAdocoes/:idUsuario', async(req, resp) => {
        try{
            let r = await db.infob_apn_tb_adocao.findAll({
                where: {
                    ID_USER: req.params.idUsuario
                },
                include: ['infob_apn_tb_pet']
            }); 
            resp.send(r);
        }catch(e){
            resp.send({erro: e.toString()})
        }
    })





    app.post('/adotarPet/:idPet', async(req, resp) => {
        try {
            let {idUser, nomeCompleto, nascimento, rg, telefone, cep, endereco, cidade, numero, complemento, bairro} = req.body

            let r = await db.infob_apn_tb_adocao.create({
                ID_PET:req.params.idPet,
                ID_USER: idUser,
                NM_NOME_COMPLETO:nomeCompleto,
                DT_NASCIMENTO:nascimento,
                DS_RG:rg,
                DS_TELEFONE:telefone,
                DS_CEP:cep,
                DS_ENDERECO:endereco,
                DS_CIDADE: cidade,
                DS_NUMERO:numero,
                DS_COMPLEMENTO:complemento,
                DS_BAIRRO:bairro,
                DT_SOLICITACAO:new Date(),
                BT_ADOCAO_CONCLUIDA:false
            })

            resp.sendStatus(200)

        } catch (e) {
            resp.send({erro:e.toString()})

        }
})
 


    // Cancelar Adoção do Usuario

    app.delete('/minhasAdocoes/:idAdocao', async(req, resp) =>{
        try{
            let id = req.params.idAdocao;

            let r = await db.infob_apn_tb_adocao.destroy({where: {ID_ADOCAO: id} })
        resp.sendStatus(200)
        }catch (e) {
            resp.send({erro: e.toString()})
        } 
    })

    // Listar Solicitações de Adoção 


    function getOrderCriterio(criterio) {

        switch (criterio) {
            case 'Cód': return ['ID_ADOCAO', 'asc'];
            case 'Mais Recentes': return ['DT_SOLICITACAO', 'desc'];
            case 'Mais Antigas': return ['DT_SOLICITACAO', 'asc'];
            case 'A a Z': return ['NM_NOME_COMPLETO', 'asc'];
            case 'Z a A': return ['NM_NOME_COMPLETO', 'desc'];

            default: return  ['ID_ADOCAO', 'asc'];
        }
    }


    app.get('/admin/solicitacoes', async(req, resp) => {
        try {
            let orderCriterio = getOrderCriterio(req.query.ordenacao)
            let solicitacoes = await db.infob_apn_tb_adocao.findAll({
                where: {
                    BT_ADOCAO_CONCLUIDA: 0
                }, 
                include: ['infob_apn_tb_pet', 'infob_apn_tb_user'],
                order: [
                    [orderCriterio]
                ]

            })       
            // solicitacoes = solicitacoes.map(item => {
            //     return {
            //         IdAdocao: item.ID_ADOCAO,
            //         IdUser: item.ID_USER,
            //         IdPet: item.ID_PET,
            //         NomeUsu: item.NM_NOME_COMPLETO,
            //         Nascimento: item.DT_NASCIMENTO,
            //         RG: item.DS_RG,
            //         Telefone: item.DS_TELEFONE,
            //         CEP: item.DS_CEP,
            //         Endereco: item.DS_ENDERECO,
            //         Numero: item.DS_NUMERO,
            //         complemento: item.DS_COMPLEMENTO,
            //         Bairro: item.DS_BAIRRO,
            //         DataSolicitacao: item.DT_SOLICITACAO,
            //         AdocaoConcluida: item.BT_ADOCAO_CONCLUIDA,
            //         DataAdocao: item.DT_ADOCAO
            //     }
            // })

             resp.send(solicitacoes)
            
        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })


    app.delete('/admin/solicitacoes/:idSolicitacao', async(req, resp) =>{
        try{
            let id = req.params.idSolicitacao;

            let r = await db.infob_apn_tb_adocao.destroy({
                where: {
                    ID_ADOCAO: id} 
            })

            resp.sendStatus(200)
            
        }catch (e) {
            resp.send({erro: e.toString()})
        } 
    })



    // Deletar solicitação de Adoção

    app.put('/admin/solicitacoes/:idAdocao', async (req,resp) => {
        try {
            let { idAdocao } = req.params;

            let adocao = await db.infob_apn_tb_adocao.findOne({
                where: {
                    ID_ADOCAO: idAdocao
                }
            })

                if(req.body.solicitacaoAceita == false){

                    let r = await db.infob_apn_tb_adocao.destroy({
                        where: {
                            ID_ADOCAO: idAdocao
                        }
                    })

                    return resp.sendStatus(200)

                    
                } else if ( req.body.solicitacaoAceita == true){

                    let r = await db.infob_apn_tb_adocao.update({
                        BT_ADOCAO_CONCLUIDA: true,
                        DT_ADOCAO: new Date()
                    }, {
                        where: {
                            ID_ADOCAO: idAdocao
                        }
                    })

                    let pet = await db.infob_apn_tb_pet.update({
                        BT_ADOCAO_CONCLUIDA: true
                    }, {
                        where: {
                            ID_PET: adocao.ID_PET
                        }
                    })

                    return resp.sendStatus(200)
                }

        } catch (e) {
            resp.send({erro: e.toString()})
        }  

    })

    


export default app