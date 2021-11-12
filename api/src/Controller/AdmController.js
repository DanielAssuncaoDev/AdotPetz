import db from '../db.js'
import express from 'express'

const app = express.Router()


app.post('/login', async (req, resp) => {
    try{
        let {codigo, senha} = req.body

        let r = await db.infob_apn_tb_adm.findOne({
            where: {
                DS_EMAIL: codigo,
                DS_SENHA: senha
            }
        })
        if(r == null){
            resp.send({erro: 'Credenciais Inválidas!'})
            return
        }
        resp.send(r)
    } catch (e){
        resp.send({erro: e.toString()})
    }
})

export default app