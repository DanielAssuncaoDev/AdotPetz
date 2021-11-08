import express from 'express'
import Sequelize from 'sequelize';
import db from '../db.js'

    const app = express.Router()

    // Adiocionar Pet

    app.post('/pets/admin/addpet', async(req, resp) => {
        try{
            let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3 /* castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3 */ } = req.body;

            let r = await db.infob_apn_tb_pet.create({
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
                BT_CASTRADO: 1,
                BT_VACINA_V10: 1,
                BT_VACINA_V8: 1,
                BT_VACINA_V5: 1,
                BT_VACINA_V4: 1,
                BT_VACINA_V3: 1,
                BT_VACINA_ANTIRRABICA: 1,
                DT_CADASTRO: new Date(),
                BT_DISPONIVEL: 1
            })
            
            // if(especie === 'Canina' && vacinaV5 === true || vacinaV4 === true || vacinaV3 === true){
            //     resp.send({erro: "Você não pode inserir Vacinas de Gatos para Cães"})
            //     return 
            // } if(especie === 'Felina' && vacinaV8 === true || vacinaV10 === true) {
            //     resp.send({erro: "Você não pode inserir Vacinas de Cães para Gatos"})
            //     return
            // } if(descricao > 250 === false){
            //     resp.send({erro: "Números de caracteres atingido"})
            //     return
            // } if(nome === '' && especie === '' && raca === '' && sexo === '' && peso === '' && nascimento === '' 
            //     && porte === '' && descricao === '' && imgPet1 === '' && imgPet2 === '' && imgPet3 === '' === false){
            //     resp.send({erro: "Preencha todos os campos obrigatórios"})
            //     return
            // }
            

            resp.sendStatus(200)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })


    //  Deletar Pet

    app.delete('/admin/:idPet', async (req, resp) => {
        try {
            let { idPet } = req.params;

            // console.log(req.params)

            await db.infob_apn_tb_pet.destroy({ where: { ID_PET: idPet } })
            resp.sendStatus(200)
        }catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    // Listar Animais Cadastrados

    app.get('/admin/animaisCadastrados', async(req, resp) => {

        try {
            let r = await db.infob_apn_tb_pet.findAll({
                where: {
                    BT_DISPONIVEL: true
                }, 
                order: [['ID_PET', 'desc']]
            })

            // for( let data of r ){
            //     data.DT_CADASTRO = new Date(data.DT_CADASTRO.toLocaleDateString('pt-BR'))
            //     // console.log(data.DT_CADASTRO)
            // }

            resp.send(r)
            
            
        } catch (error) {
            resp.send({erro: e.toString()})
        }
    })

    // Alterar pet

    app.put('/alterar/:idpet',async(req, resp) =>  {   
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


// Listar pets

  app.post("/", async(req, resp) => {
    try {
        let {
            sexo,
            porte,
            idade,
            especie,
            raca,            

        } = req.body

        const {Op} = Sequelize

        console.log(idade)

            let filtro = null

            if( idade.dataFinish != null ){

                filtro = [
                    {
                        DS_SEXO: sexo,
                        valor: sexo
                    }, 
                    {
                        DS_PORTE: porte,
                        valor: porte
                    },
                    {
                        DT_NASCIMENTO: {
                            [Op.between]: [idade.dataStart, idade.dataFinish]
                        },
                        valor: idade.dataStart
                    }, 
                    {
                        DS_ESPECIE: especie,
                        valor: especie
                    }, 
                    {
                        NM_RACA: raca,
                        valor: raca
                    } 
                ]
            } else {

            
                filtro = [
                    {
                        DS_SEXO: sexo,
                        valor: sexo
                    }, 
                    {
                        DS_PORTE: porte,
                        valor: porte
                    },
                    {
                        DT_NASCIMENTO: {
                            [Op.lte]: idade.dataStart
                        },
                        valor: idade.dataStart
                    }, 
                    {
                        DS_ESPECIE: especie,
                        valor: especie
                    }, 
                    {
                        NM_RACA: raca,
                        valor: raca
                    } 
                ]
            }


                filtro = filtro.filter( (item) => item.valor !== '')
            
                    for (let index = 0; index < filtro.length; index++) {
                        let ob = filtro[index]
                        delete(ob.valor)
                    }
          
                // console.log(filtro)

        let r = await db.infob_apn_tb_pet.findAll({
            where: filtro,
            limit: Number(req.query.limit),
            offset: Number(req.query.offset)
        })
        let qtd = await db.infob_apn_tb_pet.findAll({
            where: filtro
        })

        resp.send({petsOffSet: r, totalPets: qtd.length})

    } catch (e) {
        resp.send({erro: e.toString()})
    }
})



app.get('/racasDisponiveis', async(req, resp) => {
    try {
        let registros = await db.infob_apn_tb_pet.findAll({
            where: {
                BT_DISPONIVEL: true
            }
        })

        let racas = []
        for (let r of registros){
            if( !racas.includes(r.NM_RACA) ){
                racas.push(r.NM_RACA)
            }
        }

        resp.send(racas)

    } catch (e) {
        resp.send({erro: e.toString()})
    }
})


// Listar Solicitações de Adoção 


// function getOrderCriterio(criterio) {

//     switch (criterio) {
//         case 'Cód': return ['ID_ADOCAO', 'asc'];
//         case 'Data Solicitação': return ['DT_SOLICITACAO', 'desc'];
//         case 'A a Z': return ['NM_NOME_COMPLETO', 'asc'];
//         case 'Z a A': return ['NM_NOME_COMPLETO', 'desc'];

//         default: return  ['ID_ADOCAO', 'asc'];
//     }
// }

// app.get('/admin/solicitacoes', async(req, resp) => {
//     try {
//         let orderCriterio = getOrderCriterio(req.query.ordernacao)
//         let solicitacoes = await db.infob_apn_tb_adocao.findAll({
//             where: {
//                 BT_ADOCAO_CONCLUIDA: null
//             },
//             order: [
//                 [orderCriterio]
//             ]
//         })       
//         resp.send(solicitacoes)
//     } catch (e) {
//         resp.send({erro: e.toString()})
//     }
// })

// Alterar situacao da Adoção

// app.put('/alterar/:idsolicitacao',async(req, resp) =>  {   
//     try {
           
//     } catch (e) {
//         resp.send({erro:e.toString()})
//  } 
// })

    app.post('/admin/login', async (req, resp) => {
        try{
            let {codigo, senha} = req.body
            let r = await db.infob_apn_tb_adm.findOne({
                where: {
                    DS_COD: codigo,
                    DS_SENHA: senha
                }
            })

            if(r === null){
                resp.send({erro: 'Credenciais Inválidas!'})
                return
            }
            resp.send(r)
        } catch (e){
            resp.send({erro: e.toString()})
        }
    })


export default app