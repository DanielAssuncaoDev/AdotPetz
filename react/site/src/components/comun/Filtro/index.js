import { useState } from 'react';
import {ContainerFiltros} from './styled'

// ALERTA!!  Passe um Array como Props

export default function Filtros(props){

    const [filtroSelecionado, setFiltroSelecionado] = useState(false)
    const [nomeFiltro, setNomeFiltro] = useState('')

    const AlterarOption = () => {
        setFiltroSelecionado(true);

        let Select = document.getElementById("selectFiltro");
        let OptionSelect = Select.options[Select.selectedIndex].outerText;
        setNomeFiltro(OptionSelect.toString())
    }


        return(
            <ContainerFiltros>

                        <div className="FiltrarPor">
                            <label> Filtrar Solicitações Por:</label>
                            <select id="selectFiltro" onChange={AlterarOption}>
                                <option> Selecione </option>
                                
                                {props.listaOption.map(item =>   

                                    <option> {item} </option>
                                
                                )}

                            </select>
                        </div>

                        {
                            filtroSelecionado === true 
                            
                            ?
                                <div className="RegistroPFiltrar">
                                    <input type="text" placeholder={`Onde${nomeFiltro}for:`} />                                
                                </div>
                            :

                            ''
                        }

            </ContainerFiltros>
        )
}