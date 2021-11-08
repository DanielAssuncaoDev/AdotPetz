 import db from './db.js'
import express from 'express'
import cors from 'cors'

import path from 'path'
import multer from 'multer'

const app = express()
app.use(cors())
app.use(express.json())

import UserController from './Controller/UserController.js'

import UserAdocoesController from './Controller/UserAdocaoController.js'
import PetsController from './Controller/PetController.js'

// import Crypto from 'crypto-js'

// import Sequelize from 'sequelize'

    
    const Server = express()
        Server.use(cors())
        Server.use(express.json())


    Server.use('/user', UserController);
    Server.use('/adocoes', UserAdocoesController);
    Server.use('/pets', PetsController);


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
        }
      })

    const upload = multer({ storage: storage})

        Server.get('/admin/addpet', async (req, resp) =>{
            let dirname = path.resolve();
            resp.sendFile(req.query.imagem, { root: path.join(dirname) })
        })

    // ATENÇÃO É necessario declarar as requisições quando for chamar o endpoint. 

        Server.get("/pets", async(req, resp) => {
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
        
         Server.post('/admin/addpet', upload.single('imgPet1', 'imgPet2', 'imgPet3'), async(req, resp) => {
             try{ 
                 let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, /*imgPet2, imgPet3 */} = req.body;
                 let { path } = req.file;

                 let r = await db.infob_apn_tb_pet.create({
                     NM_PET: nome,
                     DS_ESPECIE: especie,
                     NM_RACA: raca,
                     DS_SEXO: sexo,
                     DS_PESO: peso,
                     DT_NASCIMENTO: nascimento,
                     DS_PORTE: porte,
                     DS_DESC: descricao,
                     IMG_PET1: path,
                     IMG_PET2: imgPet2,
                     IMG_PET3: imgPet3/*,
                     BT_CASTRADO: 1,
                     BT_VACINA_V10: 1,
                     BT_VACINA_V8: 1,
                     BT_VACINA_V5: 1,
                     BT_VACINA_V4: 1,
                     BT_VACINA_V3: 1,
                     BT_VACINA_ANTIRRABICA: 1,
                     DT_CADASTRO: new Date(),
                     BT_DISPONIVEL: 1*/
                 })

            resp.send(r)

         } catch (e) {
                 resp.send({erro: e.toString()})
             }
         })
        

        // Server.delete('/admin/:idPet', async (req, resp) => {
        //     try {
        //         let { idPet } = req.params;

        //         console.log(req.params)

        //         await db.infob_apn_tb_pet.destroy({ where: { ID_PET: idPet } })
        //         resp.sendStatus(200)
        //     }catch (e) {
        //         resp.send({erro: e.toString()})
        //     }

        // })

            
        // Server.get('/minhasAdocoes/:idUsuario', async(req, resp) => {
        //     try{
        //         let r = await db.infob_apn_tb_adocao.findAll({
        //             where: {
        //                 ID_USER: req.params.idUsuario
        //             },
        //             include: ['infob_apn_tb_pet'],
        //         }); 
        //         resp.send(r);
        //     }catch(e){
        //         resp.send({erro: e.toString})
        //     }
        // })

    // Server.delete('/minhasAdocoes/:idAdocao', async(req, resp) =>{
    //         try{
    //             let id = req.params.idAdocao;

    //             let r = await db.infob_apn_tb_adocao.destroy({where: {ID_ADOCAO: id} })
    //         resp.sendStatus(200)
    //     }catch (e) {
    //         resp.send({erro: e.toString()})
    //     } 
    // })

        // Server.get('/admin/animaisCadastrados', async(req, resp) => {

        //     try {
        //         let r = await db.infob_apn_tb_pet.findAll({
        //             where: {
        //                 BT_DISPONIVEL: true
        //             }, 
        //             order: [['ID_PET', 'desc']]
        //         })
                
        //         resp.send(r)
                
                
        //     } catch (error) {
        //         resp.send({erro: e.toString()})
        //     }

        // })

app.put('/pet/:idpet',async(req, resp) =>  {   
      try {

        let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3, cadastro, disponivel } = req.body; 
              
        let r = await db.infob_apn_tb_pet.update({
            NM_PET: nome,
            DS_ESPECIE: especie,
            NM_RACA: raca,
            DS_SEXO: sexo,
            DS_PESO: peso,
            DT_NASCIMENTO: nascimento,
            DS_PORTE: porte,
            DS_DESC: descricao,
            IMG_PET1: imgPet1,
            IMG_PET2: imgPet2,
            IMG_PET3: imgPet3,
            BT_CASTRADO: castrado,
            BT_VACINA_V10: vacinaV10,
            BT_VACINA_V8: vacinaV8,
            BT_VACINA_V5: vacinaV5,
            BT_VACINA_V4: vacinaV4,
            BT_VACINA_V3: vacinaV3,
            BT_VACINA_ANTIRRABICA: vacinaAntirrabica,
            DT_CADASTRO: cadastro,
            BT_DISPONIVEL: disponivel
        },{where:{
            ID_PET:req.params.idpet
        }}
             
        )


        resp.send(r)

          
      } catch (e) {
          resp.send({erro:e.toString()})
          
      }
    })

    
Server.listen(process.env.PORT,

                x => console.log(`Server up at port ${process.env.PORT}`))