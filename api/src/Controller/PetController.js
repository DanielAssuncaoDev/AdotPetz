import express from 'express'

    const app = express.Router()

    // Adiocionar Pet

    app.post('/addpet', async(req, resp) => {
        try{
            let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3} = req.body;

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
                BT_CASTRADO: castrado,
                BT_VACINA_V10: vacinaV10,
                BT_VACINA_V8: vacinaV8,
                BT_VACINA_V5: vacinaV5,
                BT_VACINA_V4: vacinaV4,
                BT_VACINA_V3: vacinaV3,
                BT_VACINA_ANTIRRABICA: vacinaAntirrabica,
                DT_CADASTRO: new Date(),
                BT_DISPONIVEL: true
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

export default app