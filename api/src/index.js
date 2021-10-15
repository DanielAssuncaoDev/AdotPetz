import db from './db.js'
import express from 'express'
import cors from 'cors'

    
    const app = express()
    app.use(cors())
    app.use(express.json())


        app.post('/cadastrar', async(req, resp) => {

            try {

                let {nome, sobrenome, email, senha} = req.body

                let r = await db.infob_apn_tb_user.create({
                        NM_USER: nome,
                        NM_SOBRENOME: sobrenome,
                        DS_EMAIL: email,
                        DS_SENHA: senha
                })

                resp.send(r)

                
            } catch (e) {
                resp.send({erro: e.toString()})
            }

        })



        


app.listen(process.env.PORT,
                x => console.log(`- Server up at Port:${process.env.PORT}`))