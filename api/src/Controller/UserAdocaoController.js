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
            let {nomeCompleto, nascimento, rg, telefone, cep, endereco, numero, complemento, bairro} = req.body

            let r = await db.infob_apn_tb_adocao.create({
                ID_PET:req.params.idPet,
                NM_NOME_COMPLETO:nomeCompleto,
                DT_NASCIMENTO:nascimento,
                DS_RG:rg,
                DS_TELEFONE:telefone,
                DS_CEP:cep,
                DS_ENDERECO:endereco,
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


export default app