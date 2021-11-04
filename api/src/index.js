// import db from './db.js'
import express from 'express'
import cors from 'cors'

import UserController from './Controller/UserController.js'
import UserAdocoesController from './Controller/UserAdocaoController.js'
import PetsController from './Controller/PetController.js'
// import Crypto from 'crypto-js'

// import e from 'express'
// import Sequelize from 'sequelize'
    
    const Server = express()
        Server.use(cors())
        Server.use(express.json())


    Server.use('/user', UserController);
    Server.use('/adocoes', UserAdocoesController);
    Server.use('/pets', PetsController);


    



Server.listen(process.env.PORT,
                x => console.log(`- Server up at Port:${process.env.PORT}`))