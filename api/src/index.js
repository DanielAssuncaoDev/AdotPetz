// import db from './db.js'
import express from 'express'
import cors from 'cors'

    
    const app = express()
    app.use(cors())
    app.use(express.json())

// Meu pal na tua mão
// Escrevi e sai correndo
// Pal no cu de qm ta lendo


app.listen(process.env.PORT,
                x => console.log(`- Server up at Port:${process.env.PORT}`))