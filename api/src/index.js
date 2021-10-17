import db from './db.js'
import express from 'express'
import cors from 'cors'
// import Sequelize from 'sequelize'

    
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

        app.get('/login', async(req, resp) => {
            try {
                
                let {email, senha} = req.body

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


    // ATENÇÃO É necessario declarar as requisições quando for chamar o endpoint. 

        app.get("/pets", async(req, resp) => {
            try {
                let {
                    DS_SEXO,
                    DS_PORTE,
                    DT_NASCIMENTO,
                    DS_ESPECIE,
                    NM_RACA,          

                } = req.query

                    let filtro = [
                        {
                            DS_SEXO,
                            valor: DS_SEXO
                        }, 
                        {
                            DS_PORTE,
                            valor: DS_PORTE
                        },
                        {
                            DT_NASCIMENTO,
                            valor: DT_NASCIMENTO
                        }, 
                        {
                            DS_ESPECIE,
                            valor: DS_ESPECIE
                        }, 
                        {
                            NM_RACA,
                            valor: NM_RACA
                        } 
                    ]

                        filtro = filtro.filter( (item) => item.valor !== '')
                     
                            for (let index = 0; index < filtro.length; index++) {
                                let ob = filtro[index]
                                delete(ob.valor)
                            }
                  
                        // console.log(filtro)

                let r = await db.infob_apn_tb_pet.findAll({
                    where: filtro
                })

                resp.send(r)

            } catch (e) {
                resp.send({erro: e.toString()})
            }
        })





app.listen(process.env.PORT,
                x => console.log(`- Server up at Port:${process.env.PORT}`))