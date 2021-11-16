import express from 'express';

import Crypto from 'crypto-js'
import db from '../db.js'


    const app = express.Router()


    //  Fazer Cadastro do Usuario

    app.post('/cadastrar', async(req, resp) => {
        try {

            let {nome, sobrenome, email, senha} = req.body

                let usuExistente = await db.infob_apn_tb_user.findOne({
                    where: {
                        DS_EMAIL: email
                    }
                })
                    if( usuExistente != null ){
                        resp.send({erro: 'Email ja foi cadastrado'})
                        return
                    }

            console.log(senha)
            let senhaCrypto = Crypto.SHA256(senha).toString(Crypto.enc.Base64)

            let r = await db.infob_apn_tb_user.create({
                    NM_USER: nome,
                    NM_SOBRENOME: sobrenome,
                    DS_EMAIL: email,
                    DS_SENHA: senhaCrypto
            })

            resp.send(r)

            
        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })


    // Fazer login do Usuario

    app.post('/login', async(req, resp) => {
        try {
            
            let {email, senha} = req.body
            senha = Crypto.SHA256(senha).toString(Crypto.enc.Base64)

            let r = await db.infob_apn_tb_user.findOne({ 
                where: {
                    DS_EMAIL: email,
                    DS_SENHA: senha
                }
            })

                if( r === null ){
                    resp.send({erro: 'Credenciais Invalidas!'})
                    return
                }
                
            resp.send(r)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })



export default app