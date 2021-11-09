import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

import UserController from './Controller/UserController.js'
import AdmController from './Controller/AdmController.js'
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
    Server.use('/adm', AdmController);



    
Server.listen(process.env.PORT,

                x => console.log(`Server up at port ${process.env.PORT}`))