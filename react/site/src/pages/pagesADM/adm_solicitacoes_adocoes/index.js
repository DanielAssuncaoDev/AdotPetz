import {Container, FaixaCRUD} from './styled'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index'
import Options from '../../../components/comun/OptionsADM/index'
import { useEffect, useState } from 'react';
import Filtro from '../../../components/comun/Filtro/index.js'
import RegistroNaoEncontrado from '../../../components/comun/RegistroNaoEncontrado/index'

import TableAdmin from '../../../components/comun/tableAdmin'
import { Td, Tr } from '../../../components/comun/tableAdmin/styled';
import { toast, ToastContainer } from 'react-toastify';

import { confirmAlert } from 'react-confirm-alert';

import { useHistory } from 'react-router';

import Api from '../../../service/api';
const api = new Api();

// import { useHistory } from 'react-router-dom'


export default function SolicitacaoAdocao(prosp) {
    // const [ordenacao] = useState('Cód');
    const [filtro, setFiltro] = useState({campo: '', valor: ''})
    const [solicitacoes, setSolicitacoes] = useState([]);
    // const [solicitacaoAceita, setSolicitacaoAceita] = useState('');

    const nav = useHistory();

    async function listar() {
        const resp = await api.SolicitacoesAdocao(filtro)
        setSolicitacoes(resp)
    }

    useEffect( () => {

        async function listar() {
            console.log(filtro)
            const resp = await api.SolicitacoesAdocao(filtro)
            setSolicitacoes(resp)
        }
     
        listar()

    }, [filtro] )

     async function alterarSituacao (solicitacaoAceita, IdAdocao) {
        
        if (solicitacaoAceita === false)
        {
            confirmAlert ({
                title: 'Excluir Solicitação',
                message: 'Tem certeza que deseja excluir a solicitação?',
                buttons: [
                     {
                         label: 'Sim',
                         onClick: async( ) => {
                             let r = await api.alterarSituacao( IdAdocao , false)
                             if(r.erro !== undefined){
                                toast.dark(r.erro)
                                console.log(IdAdocao)
                             }
                             else{
                                 toast.dark('Solicitação Excluída') 
                                 listar();    
                             }
             
                         }
                     },
                     {
                         label: 'Não'
                     }
     
                ]
            })

            

        } else if ( solicitacaoAceita === true ){
            confirmAlert ({
                title: 'Aceitar Solicitação',
                message: 'Tem certeza que deseja Aceitar a solicitação?',
                buttons: [
                     {
                         label: 'Sim',
                         onClick: async() => {
                             let r = await api.alterarSituacao( IdAdocao , true)
                             console.log(r)
                             if(r.erro !== undefined){
                                 toast.dark(r.erro)
                             }
                             else{
                                 toast.dark('Solicitação Aceita') 
                                 listar();
                             }
             
                            
                         }
                     },
                     {
                         label: 'Não'
                     }
     
                ]
            })

            

        }
         
     }

    return(
        <Container>
            <ToastContainer/>
            <CabecalhoADM />
           
            <FaixaCRUD>    
                <Options />
                <Filtro listaOption={['Nome', 'Pet', 'Telefone', 'Data Solicitação']}
                         filtro={{setFiltro, filtro}}
                />

                <div className="conteudo">
                    <div className="TituloConteudo">
                        <div className="Line"></div>
                        <span> Solicitações de Adoção </span>
                    </div>


                    {
                        solicitacoes.length === 0 

                        ?
                            <RegistroNaoEncontrado mensagem={['OPS!! Nenhum Registro Encontrado']}/>

                        : 
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
                                    <Td className="ra"> {item.ID_ADOCAO} </Td>
                                    <Td> {item.NM_NOME_COMPLETO}  </Td>
                                    <Td> {item.infob_apn_tb_pet.NM_PET} </Td>
                                    <Td> {item.DS_TELEFONE}  </Td>
                                    <Td>{new Date(item.DT_SOLICITACAO).toLocaleDateString('pt-BR')} </Td>
                                    <Td className="actions" config={{ visibility: 'hidden' }}
                                        onClick={() => alterarSituacao( true, item.ID_ADOCAO  )}> 
                                        <img src="/assets/images/icon_aceitar.svg" alt="" width="25" />
                                    </Td> 
                                    <Td className="actions" config={{ visibility: 'hidden'}}
                                        onClick={() => alterarSituacao( false, item.ID_ADOCAO  )}>
                                        <img src="/assets/images/icon_recusar.svg" alt="" width="25" />
                                    </Td>
                                    <Td className="actions" config={{ visibility: 'hidden' }}
                                        onClick={() => toast(item.initials)}>
                                            <button className="actions" onClick={() => nav.push({pathname: '/admin/formadocao', state: item })} > Verificar Formulário </button>
                                    </Td>
                                </Tr>    
                            )}
                        </TableAdmin>
                    }

                    
                </div>

            </FaixaCRUD>
        </Container>
    );
}