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
                order: [
                    [orderCriterio]
                ]
            })       
            resp.send(solicitacoes)
        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })

    // Alterar situacao da Adoção

    app.put('/alterar/:idsolicitacao',async(req, resp) =>  {   
        try {
            
        } catch (e) {
            resp.send({erro:e.toString()})
    } 
    })


export default app