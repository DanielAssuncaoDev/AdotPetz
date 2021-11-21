import express from 'express'
import db from '../db.js'
import EnviarEmail from '../email.js'

import Sequelize from 'sequelize'

    const app = express.Router()

    // Listar Adoções do Usuario

    app.get('/minhasAdocoes/:idUsuario', async(req, resp) => {
        try{
            let r = await db.infob_apn_tb_adocao.findAll({
                where: {
                    ID_USER: req.params.idUsuario,
                    BT_ADOCAO_CONCLUIDA: false
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

            let adocaoRepetida = await db.infob_apn_tb_adocao.findOne({
                where: {
                    ID_USER: idUser,
                    ID_PET: req.params.idPet
                }
            })

            if( adocaoRepetida !== null)
                return resp.send({erro: 'Animal já foi solicitado'})


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


    // function getOrderCriterio(criterio) {

    //     switch (criterio) {
    //         case 'Cód': return ['ID_ADOCAO', 'asc'];
    //         case 'Mais Recentes': return ['DT_SOLICITACAO', 'desc'];
    //         case 'Mais Antigas': return ['DT_SOLICITACAO', 'asc'];
    //         case 'A a Z': return ['NM_NOME_COMPLETO', 'asc'];
    //         case 'Z a A': return ['NM_NOME_COMPLETO', 'desc'];

    //         default: return  ['ID_ADOCAO', 'asc'];
    //     }
    // }

    function filtrarAdocoes( filtro ){

        const { Op } = Sequelize

        switch (filtro.campo) {
            case 'Nome': return {NM_NOME_COMPLETO: { [Op.substring]: filtro.valor}};
            case 'Pet': return {NM_PET:{ [Op.substring]: filtro.valor}};
            case 'Telefone': return {DS_TELEFONE: { [Op.substring]: filtro.valor}};
            case 'Data Solicitação': return {DT_SOLICITACAO: { [Op.substring]: filtro.valor}};

            default: return  {};
        }
    }


    app.post('/admin/solicitacoes', async(req, resp) => {
        try {

            let filtro = filtrarAdocoes(req.body)

            let solicitacoes = null

            console.log(filtro)
        

            if( req.body.campo === 'Pet' ){  
                solicitacoes = await db.infob_apn_tb_adocao.findAll({
                    where: {
                        BT_ADOCAO_CONCLUIDA: false
                    }, 
                    include: [
                        {
                            model: db.infob_apn_tb_pet,
                            as: 'infob_apn_tb_pet',
                            where: filtro
                        }, 
                        {    
                            model: db.infob_apn_tb_user,
                            as: 'infob_apn_tb_user'                        
                        }
                    ],
                    order: [
                        ['ID_ADOCAO', 'desc']
                    ]

                }) 
            } else {

                filtro['BT_ADOCAO_CONCLUIDA'] = false

                console.log(filtro)

                solicitacoes = await db.infob_apn_tb_adocao.findAll({
                    where: filtro, 
                    include: ['infob_apn_tb_pet', 'infob_apn_tb_user'],
                    order: [
                        ['ID_ADOCAO', 'desc']
                    ]

                }) 
            }

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



    // Confirmar ou Rejeitar Solicitação de Adoção

    app.put('/admin/solicitacoes/:idAdocao', async (req,resp) => {
        try {
            let { idAdocao } = req.params;

            let adocao = await db.infob_apn_tb_adocao.findOne({
                where: {
                    ID_ADOCAO: idAdocao
                },
                include: ['infob_apn_tb_pet', 'infob_apn_tb_user'],
            })


            let Pet = adocao.infob_apn_tb_pet.dataValues

            let User = adocao.infob_apn_tb_user.dataValues
            let email = User.DS_EMAIL

            // resp.send(adocao)
                if(req.body.solicitacaoAceita == false){

                    let r = await db.infob_apn_tb_adocao.destroy({
                        where: {
                            ID_ADOCAO: idAdocao
                        }
                    })

                    
                    let assunto = `Solicitação de Adoção do(a) ${Pet.NM_PET}`
                    let texto = 'Infelizmente sua solicitação de adoção foi recusada'

                    EnviarEmail(email, assunto, texto, '')

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
                        BT_DISPONIVEL: false
                    }, {
                        where: {
                            ID_PET: adocao.ID_PET
                        }
                    })


                    let assunto = `Solicitação de Adoção do(a) ${Pet.NM_PET}`
                    let texto = 'Solicitação de adoção foi Aceita, nossa equipe entrara em contato em breve.'

                    EnviarEmail(email, assunto, texto, '')


                    return resp.sendStatus(200)
                }

        } catch (e) {
            resp.send({erro: e.toString()})
        }  

    })

    


export default app