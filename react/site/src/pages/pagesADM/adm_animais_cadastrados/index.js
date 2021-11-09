import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useEffect, useState } from 'react';

import TableAdmin from '../../../components/comun/tableAdmin'
import { Td, Tr } from '../../../components/comun/tableAdmin/styled';

import { useHistory } from 'react-router-dom'

import Api from '../../../service/api';
import { set } from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
const api = new Api();


export default function AnimaisCadastrados(){
    const [animals, setAnimals] = useState([]);

    async function listarAnimaisCadastrados() {
        let r = await api.listarAnimaisCadastrados();
        setAnimals(r);
        // console.log("Data - " + typeof(new Date(r[0].DT_CADASTRO))

        console.log(new Date(r[0].DT_CADASTRO).toLocaleDateString('pt-BR'))
    }
                                
    async function remover(id) {
    //     let r = await api.remover(id)
       confirmAlert ({
           title: 'Excluir animal',
           message: 'Tem certeza que deseja excluir o animal ?',
           buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.remover(id)
                        if(r.erro !== undefined){
                            toast(r.erro)
                        }
                        else{
                            toast.dark('Animal removido') 
                        }
        
                        listarAnimaisCadastrados()
                    }
                },
                {
                    label: 'Não'
                }

           ]
       })
        
        listarAnimaisCadastrados();
    }


    useEffect (() => {
        listarAnimaisCadastrados();
    }, [])


    const nav = useHistory ();

    // useEffect(() => {
    //     // setAnimals([
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
    //     //     { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' }
    //     // ])


    // }, [])


    // comentei e sai correndo, pal no cu de qm ta lendo /////////////////// eu sou doido

    // function toRow() {
    //     return animals.map(item => {
    //         return [
    //             { value: item.ra },
    //             { value: item.petName },
    //             { value: item.specie },
    //             { value: item.sexo }, 
    //             { value: item.porte },
    //             { value: item.registrationDate },    
    //             { value: "/assets/images/visu.svg", visibility: 'hidden', width: '1em', onClick: (x) => alert(x[0].value)  },
    //             { value: "/assets/images/editt.svg", visibility: 'hidden', width: '1em', onClick: (x) => alert(x[0].value) },
    //             { value: "/assets/images/deletee.svg", visibility: 'hidden', width: '1em', onClick: (x) => alert(x[0].value) },
    //             { value: "/assets/images/selo.svg", visibility: 'hidden', width: '1em', onClick: (x) => alert(x[0].value) }
    //         ]
    //     })
    // }
   
    return(
        <Container>
            <ToastContainer/>
            <Cabecalho />
            <div class="ContainerBody">
                <div class="ButtonsContainer"> 
                
                    <div class="BackButton">  <button>  <img onClick={ () => nav.push('/admin/home') } src="/assets/images/setaAdotPetz.svg" width="25" alt=""/>  </button> </div> 
                
                    <div class="right-buttons">
                        <div class="RefreshButton"> <button> <img src="/assets/images/refresh2 2.svg" width="17" alt=""/> </button> </div>
                        <div class="PlusButton"> <button> <img onClick={ () => nav.push('/admin/addpet') } src="/assets/images/plusAdotPetz.svg" alt="" width="23.5"/> </button> </div>
                    </div>
                </div>
                <div class="tableAnimals"> 
                    <div class="row-bar"> 
                        <div class= "bar-new-animal"> </div>
                        <div class="text-registered-animal"> Animais cadastrados </div>
                    </div>
                
                    <TableAdmin
                        columns={[
                            { title: 'RA' },
                            { title: 'Nome' },
                            { title: 'Espécie' },
                            { title: 'Sexo' },
                            { title: 'Porte' },
                            { title: 'Data de cadastro' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' }
                        ]}>

                            {animals.map(item => 
                            
                            <Tr key={item.ID_PET}>
                                <Td className="ra"> {item.ID_PET} </Td>
                                <Td> {item.NM_PET}  </Td>
                                <Td> {item.DS_SEXO} </Td>
                                <Td> {item.DS_ESPECIE}  </Td>
                                <Td> {item.DS_PORTE}  </Td>
                                <Td> {new Date(item.DT_CADASTRO).toLocaleDateString('pt-BR') }  </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => alert(item.initials)}> 
                                    <img src="/assets/images/visu.svg" alt="" width="20" />
                                </Td> 
                                <Td className="actions" config={{ visibility: 'hidden'}}
                                    onClick={() => alert(item.initials)}>
                                    <img src="/assets/images/editt.svg" alt="" width="25" />
                                </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => remover(item.ID_PET)}>
                                <img src="/assets/images/deletee.svg" alt="" width="20"/> 
                                </Td>
                                <Td className="actions" 
                                    onClick={() => alert(item.initials)}>
                                    <img src="/assets/images/selo.svg" alt="" />
                                </Td>
                            </Tr>

                        )}
                    </TableAdmin>
                </div>
            </div>
        </Container>
    );
}