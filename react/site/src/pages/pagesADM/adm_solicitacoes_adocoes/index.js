import {Container, FaixaCRUD} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import Options from '../../../components/comun/OptionsADM/index'
import Filtros from '../../../components/comun/Filtro/index'

import { useEffect, useState } from 'react';

import TableAdmin from '../../../components/comun/tableAdmin'
import { Td, Tr } from '../../../components/comun/tableAdmin/styled';
import { toast } from 'react-toastify';

// import { useHistory } from 'react-router-dom'


export default function SolicitacaoAdocao() {

    const [solicitacoes, setSolicitacoes] = useState([]);

    // const nav = useHistory ();

     useEffect(() => {
          setSolicitacoes([
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },{ cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
            { cod: 1, usuName:'Letícia Queiroz Moreira', petName: 'Panda', telefone: '(11) 95474-5064', dtSolicitacao: '2021-05-05' },
         ])
     }, [])

    return(
        <Container>
            <CabecalhoADM />
           
            <FaixaCRUD>    
                <Options />

                <Filtros listaOption={["Cód", "Nome Usuário", "Nome Pet", "Telefone", "Data Solicitação" ]} />                

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
                                <Td className="ra"> {item.cod} </Td>
                                <Td> {item.usuName}  </Td>
                                <Td> {item.petName} </Td>
                                <Td> {item.telefone}  </Td>
                                <Td> {item.dtSolicitacao} </Td>
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