import {Container, FaixaCRUD} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import Options from '../../../components/comun/OptionsADM/index'
import axios from 'axios'

import { useEffect, useState } from 'react';

import TableAdmin from '../../../components/comun/tableAdmin'
import { Td, Tr } from '../../../components/comun/tableAdmin/styled';
import { toast } from 'react-toastify';


import Api from '../../../service/api';
const api = new Api();

// import { useHistory } from 'react-router-dom'


export default function SolicitacaoAdocao() {
    const [ordenacao, setOrdenacao] = useState('Cód');
    const [solicitacoes, setSolicitacoes] = useState([]);


     async function listar () {
        const resp = await axios.get('http://localhost:3030/adocoes/admin/solicitacoes?ordenacao=' + ordenacao)
        setSolicitacoes([...resp.data])
     }


     useEffect(() =>{
         listar();
     }, [ordenacao])
    return(
        <Container>
            <CabecalhoADM />
           
            <FaixaCRUD>    
                <Options />
                <div className="ordenacao">
                    <label> Filtrar Solicitações Por:</label> 
                    <select value={ordenacao} onChange={e => setOrdenacao(e.target.value)}> 
                        <option value="Cód"> Cód </option>
                        <option value="Mais Recentes"> Mais Recentes </option>
                        <option value="Mais Antigas"> Mais Antigas </option>
                        <option value="De A a Z"> De A a Z </option>
                        <option value="De Z a A"> De Z a A </option>
                    </select>
                </div>             

                <div className="conteudo">
                    <div className="TituloConteudo">
                        <div className="Line"></div>
                        <span> Solicitações de Adoção </span>
                    </div>

                    <TableAdmin
                        columns={[
                            { title: 'CÓD' },
                            { title: 'Nome Completo' },
                            { title: 'Nome do pet' },
                            { title: 'Telefone' },
                            { title: 'Data da solicitação' },
                            { title: '' },
                            { title: '' },
                            { title: '' }
                        ]}>
                   
                        {solicitacoes.map(item => 
                            <Tr>
                                <Td className="ra"> {item.IdAdocao} </Td>
                                <Td> {item.NomeUsu}  </Td>
                                <Td> {item.NomePet} </Td>
                                <Td> {item.Telefone}  </Td>
                                <Td> {item.DataSolicitacao} </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => toast(item.initials)}> 
                                    <img src="/assets/images/icon_aceitar.svg" alt="" width="25" />
                                </Td> 
                                <Td className="actions" config={{ visibility: 'hidden'}}
                                    onClick={() => toast(item.initials)}>
                                    <img src="/assets/images/icon_recusar.svg" alt="" width="25" />
                                </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => toast(item.initials)}>
                                        <button className="actions"> Verificar Formulário </button>
                                </Td>
                            </Tr>    
                        )}
                    </TableAdmin>
                </div>

            </FaixaCRUD>
        </Container>
    );
}