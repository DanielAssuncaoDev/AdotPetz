import axios from 'axios'

export const CEP = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})


    export async function ProcurarCEP( cep ){
        try {    
            let r = await CEP.get(`${cep}/json`)
            // console.log(r)
            return r.data
            
        } catch (error) {
            return {erro: error.toString()}
        }
    }


// let cep = ProcurarCEP('04848-140')
// console.log(cep) 