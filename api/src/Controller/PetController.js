import express from 'express'
import Sequelize from 'sequelize';
import db from '../db.js'
// import multer from 'multer'
// import path from 'path'
// import fs from 'fs';

const app = express.Router()

app.get('/admin/addpet', async (req, resp) => {
    let dirname = path.resolve();
    resp.sendFile(req.query.imagem, { root: path.join(dirname) })
})


app.post('/admin/addpet', async (req, resp) => {
    try {
        let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3 } = req.body;
        
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
            BT_DISPONIVEL: 1
        })
        console.log(r);
        
        resp.sendStatus(200)

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


//  Deletar Pet

app.delete('/admin/:idPet/', async (req, resp) => {
    try {
        let { idPet } = req.params;

        // console.log(req.params)

        await db.infob_apn_tb_pet.destroy({ where: { ID_PET: idPet } })
        resp.sendStatus(200)
    } catch (e) {
        resp.send({ erro: e.toString() })
    }

})



function FiltrarPets( filtro ){

    const { Op } = Sequelize

    switch (filtro.campo) {
        case 'Nome': return {NM_PET: { [Op.substring]: filtro.valor}};
        case 'Sexo': return {DS_SEXO: filtro.valor};
        case 'RA': return {ID_PET: { [Op.substring]: filtro.valor}};
        case 'Espécie': return {DS_ESPECIE: filtro.valor};

        default: return  {};
    }
}

// Listar Animais Cadastrados

app.post('/admin/animaisCadastrados', async (req, resp) => {

    try {

        let filtro = FiltrarPets(req.body)

        filtro['BT_DISPONIVEL'] = true

            let r = await db.infob_apn_tb_pet.findAll({
                where: filtro,
                order: [['ID_PET', 'desc']]
            })

        resp.send(r)

    } catch (error) {
        resp.send({ erro: e.toString() })
    }
})

// Alterar pet

app.put('/alterar/:idpet', async (req, resp) => {
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
            BT_VACINA_ANTIRRABICA: vacinaAntirrabica
        }, {
            where: {
                ID_PET: req.params.idpet
            }
        }

        )

        console.log(r)

        resp.send(r)
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


// Listar pets

app.post("/", async (req, resp) => {
    try {
        let {
            sexo,
            porte,
            idade,
            especie,
            raca,

        } = req.body

        const { Op } = Sequelize


        let filtro = null

        if (idade.dataFinish != null) {

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


        filtro = filtro.filter((item) => item.valor !== '' )

        for (let index = 0; index < filtro.length; index++) {
            let ob = filtro[index]
            delete (ob.valor)
        }

        filtro.push({
            BT_DISPONIVEL: true
        })

        let r = await db.infob_apn_tb_pet.findAll({
            where: filtro,
            limit: Number(req.query.limit),
            offset: Number(req.query.offset)
        })
        let qtd = await db.infob_apn_tb_pet.findAll({
            where: filtro
        })

        resp.send({ petsOffSet: r, totalPets: qtd.length })

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})



app.get('/racasDisponiveis', async (req, resp) => {
    try {
        let registros = await db.infob_apn_tb_pet.findAll({
            where: {
                BT_DISPONIVEL: true
            }
        })

        let racas = []
        for (let r of registros) {
            if (!racas.includes(r.NM_RACA)) {
                racas.push(r.NM_RACA)
            }
        }

        resp.send(racas)

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.put('/alterar/:idpet', async (req, resp) => {
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
            BT_DISPONIVEL: true
        }, {
            where: {
                ID_PET: req.params.idpet
            }
        }

        )


        resp.send(r)


    } catch (e) {
        resp.send({ erro: e.toString() })

    }


})

app.post('/admin/login', async (req, resp) => {
    try {
        let { codigo, senha } = req.body
        let r = await db.infob_apn_tb_adm.findOne({
            where: {
                DS_COD: codigo,
                DS_SENHA: senha
            }
        })
        if (r === null) {
            resp.send({ erro: 'Credenciais Inválidas!' })
            return
        }
        resp.send(r)
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


export default app
