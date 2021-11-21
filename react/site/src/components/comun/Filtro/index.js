import { useState } from 'react';
import {ContainerFiltros} from './styled'

// ALERTA!!  Passe um Array como Props

export default function Filtros(props){

    const [filtroSelecionado, setFiltroSelecionado] = useState(false)
    const [nomeFiltro, setNomeFiltro] = useState('')



    const AlterarOption = ( valor ) => {

        if(valor === ''){
            let filtro = {campo: '' , valor: ''}
            props.filtro.setFiltro(filtro)
        }

        setNomeFiltro( valor )
        setFiltroSelecionado(true);    

    }

    function MascaraTelefone( e ){

        let tamanho = props.filtro.filtro.valor.length

        // let ultimaLetra = e[e.length - 1]
        

        // if( isNaN(ultimaLetra) && tamanho < e.length)
        //     return toast.error('Insira apenas números')

        if( tamanho === 0 && tamanho < e.length )
            e = '(' + e 

        if( tamanho === 2 && tamanho < e.length )
            e = e + ') '

        if ( tamanho === 8  && tamanho < e.length )
            e = e + ' - '

        if (  tamanho === 16 && tamanho < e.length ){
            e = e.replace( ' - ', '' )
            e = e.substring(0, 10) + ' - ' + e.substring( 10, e.length)

        }

        if (  tamanho === 17 && tamanho > e.length ){
            e = e.replace( ' - ', '' )
            e = e.substring(0, 9) + ' - ' + e.substring( 9, e.length)

        }
            
        if ( e.length > 17 )
            return e.substring(0, 17)

        return(e)
    }

    function alterarValorFiltro(valor){

        if( nomeFiltro === 'Telefone' )
            valor = MascaraTelefone(valor)

        let filtro =  null

        if( valor === '' ){
            filtro = {campo: '' , valor: ''}
        } else {
            filtro = {campo: nomeFiltro ,valor}
        }
        
        props.filtro.setFiltro(filtro)
    }


        return(
            <ContainerFiltros>

                        <div className="FiltrarPor">
                            <label> Filtrar Solicitações Por:</label>
                            <select id="selectFiltro" onChange={(e) => {
                                        AlterarOption(e.target.value)}
                                    }>
                                <option value="" > Selecione </option>        
                                {props.listaOption.map(item =>   
                                    <option value={item} > {item} </option>
                                )}
                            </select>
                        </div>
                        {
                            filtroSelecionado === true    
                            ?  
                              nomeFiltro === ''
                                    ?
                                        ''
                                    :
                                        nomeFiltro === 'Espécie' || nomeFiltro === 'Sexo'

                                        ?  nomeFiltro === 'Sexo'

                                            ?
                                                <div className="RegistroPFiltrar">
                                                    <select value={props.filtro.filtro.valor}  onChange={ (e) => alterarValorFiltro(e.target.value) }>
                                                        <option value="" > Selecione </option>        
                                                        <option value="Fêmea" > Fêmea </option>
                                                        <option value="Macho"> Macho </option>    
                                                    </select>                               
                                                </div>

                                            :
                                            
                                                <div className="RegistroPFiltrar">
                                                    <select value={props.filtro.filtro.valor}  onChange={ (e) => alterarValorFiltro(e.target.value) }>
                                                        <option value="" > Selecione </option>        
                                                        <option value="Canina" > Canina </option>
                                                        <option value="Felina"> Felina </option>    
                                                    </select>                               
                                                </div>


                                        :
                                            <div className="RegistroPFiltrar">
                                                <input type="text" placeholder={`Onde ${nomeFiltro} for:`} 
                                                    value={props.filtro.filtro.valor} onChange={ (e) => alterarValorFiltro(e.target.value) }
                                                />                                
                                            </div>
                                    :

                                        ''                                 
                        }

            </ContainerFiltros>
        )
}