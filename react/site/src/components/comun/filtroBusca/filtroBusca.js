import {BoxFiltro, SelectRow, Select, Button} from './styled' 

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api'
const api = new Api()

export default function Filtro( ){

const [sexo, setSexo] = useState('')
const [porte, setPorte] = useState('')
const [idade, setIdade] = useState({})
const [especie, setEspecie] = useState('')
const [raca, setRaca] = useState('')

const [idadeTexto, setIdadeTexto] = useState('')
const [racasDisponiveis, setRacasDisponiveis] = useState([])

const nav = useHistory()

    const ChamarRacas = async() => {
        let r = await api.racasDisponiveis()
        setRacasDisponiveis(r)
    }
        useEffect( () => {
            ChamarRacas()
        }, [] )


        
            useEffect( () => {

                const ConverterDatas = () => {
                    let dataStart = new Date()
                    let dataFinish = new Date()
        
                    if(idadeTexto === ''){
                        setIdade({dataStart: '', dataFinish: ''})
                        return
                    }
        
                        if( idadeTexto === '3a6meses' ){
                            dataStart.setMonth( new Date().getMonth() - 6 )
                            dataStart.setDate( new Date().getDate() - 1 )
        
                            dataFinish.setMonth( new Date().getMonth() - 3 )
                            dataFinish.setDate( new Date().getDate() + 1 )
        
        
                        } else if ( idadeTexto === '6a1ano' ){
                            dataStart.setFullYear( (new Date().getFullYear() - 1) )
                            dataStart.setDate( new Date().getDate() - 1 )
        
                            dataFinish.setMonth( new Date().getMonth() - 6 )
                            dataFinish.setDate( new Date().getDate() + 1 )
                        
                        } else if ( idadeTexto === '1a3anos' ){
                            dataStart.setFullYear( new Date().getFullYear() - 3 )
                            dataStart.setDate( new Date().getDate() - 1 )
        
                            dataFinish.setFullYear( new Date().getFullYear() - 1 )
                            dataFinish.setDate( new Date().getDate() + 1 )
        
                        } else if ( idadeTexto === '3+anos' ){
                            // console.log('Caiu Poxa')
                            dataStart.setFullYear( new Date().getFullYear() - 3 )
                            dataStart.setDate( new Date().getDate() - 1 )
        
                            setIdade({dataStart: new Date(dataStart), dataFinish: null })
                            return
        
                        }
        
                    setIdade({dataStart: new Date(dataStart), dataFinish: new Date(dataFinish)})
                }

                ConverterDatas() 
            }, [idadeTexto] )


    return(
        <BoxFiltro>
            <div className="TituloFiltro">
                <b> Encontre um novo amiguinho! </b>
            </div>

            <div className="FiltroBusca">
                <div className="Row1Form">
                    <SelectRow 
                        onChange={ (e) => setPorte(e.target.value) } 
                    >
                        <option value="Porte">
                            Porte
                        </option>

                        <option value="Pequeno">
                            Pequeno
                        </option>

                        <option value="Médio">
                            Médio
                        </option>

                        <option value="Grande">
                            Grande
                        </option>
                    </SelectRow>
            
                    <SelectRow
                            onChange={ (e) => setIdadeTexto(e.target.value) } 
                    >
                        <option value="Idade">
                            Idade
                        </option>

                        <option value="3a6meses">
                            3 a 6 meses
                        </option>

                        <option value="6a1ano">
                            6 meses a 1 ano
                        </option>

                        <option value="1a3anos">
                            1 a 3 anos
                        </option>

                        <option value="3+anos">
                            3+ anos
                        </option>

                    </SelectRow>
                </div>

                <div className="Row2Form">
                    <SelectRow
                            onChange={ (e) => setEspecie(e.target.value) } 
                    >
                        <option value="Espécie">
                            Espécie
                        </option>

                        <option value="Canina">
                            Canina
                        </option>
                        
                        <option value="Felina">
                            Felina
                        </option>
                    </SelectRow>
            
                    <SelectRow
                            onChange={ (e) => setSexo(e.target.value) } 
                    >
                        <option value="Sexo">
                            Sexo
                        </option>
 
                        <option value="Macho">
                            Macho
                        </option>

                        <option value="Fêmea">
                            Fêmea
                        </option>
                    </SelectRow>
                </div>

                <div className="Row3Form">
                    <Select  
                        onChange={ (e) => setRaca(e.target.value) } 
                    >
                        <option value="Raça"> 
                            Raça
                        </option>

                        {
                            racasDisponiveis.map( (r) =>
                                <option value={r}> 
                                    {r}
                                </option>
                            )
                        }

                    </Select>
                </div>

                <div className="ButtonForm">
                    <Button onClick={ () => {
                        nav.push({ pathname: '/sugestoesadocao', state: {sexo, porte, idade, especie, raca}}); 
                        // window.location.reload(); - Não Funciona no Netlfy 
                    } } >
                        Procurar
                    </Button>
                </div>

            </div>
        </BoxFiltro>
    );
}