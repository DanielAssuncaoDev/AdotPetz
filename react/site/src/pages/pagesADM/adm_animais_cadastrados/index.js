import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';

import { useEffect, useState } from 'react';

import TableAdmin from '../../../components/comun/tableAdmin'
import { Td, Tr } from '../../../components/comun/tableAdmin/styled';

import { useHistory } from 'react-router-dom'

import Api from '../../../service/api.js';
const api = new Api();


export default function AnimaisCadastrados(){
    const [animals, setAnimals] = useState([]);

    async function listarAnimaisCadastrados() {
        let r = await api.listarAnimaisCadastrados();
        setAnimals(r);
    }

    useEffect (() => {
        listarAnimaisCadastrados();
    }, [])


    const nav = useHistory ();

    useEffect(() => {
        setAnimals([
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' },
            { ra: 1, petName: 'Panda', specie: 'Cachorro', sexo: 'Macho', porte: "M", registrationDate: '2021-05-05' }
        ])
    }, [])


    // comentei e sai correndo, pal no cu de qm ta lendo

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
                            <Tr key={item.ra}>
                                <Td className="ra"> {item.ra} </Td>
                                <Td> {item.petName}  </Td>
                                <Td> {item.specie}  </Td>
                                <Td> {item.sexo}  </Td>
                                <Td> {item.porte}  </Td>
                                <Td> {item.registrationDate}  </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => alert(item.initials)}> 
                                    <img src="/assets/images/visu.svg" alt="" width="20" />
                                </Td> 
                                <Td className="actions" config={{ visibility: 'hidden'}}
                                    onClick={() => alert(item.initials)}>
                                    <img src="/assets/images/editt.svg" alt="" width="25" />
                                </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
                                    onClick={() => alert(item.initials)}>
                                <img src="/assets/images/deletee.svg" alt="" width="20"/> 
                                </Td>
                                <Td className="actions" config={{ visibility: 'hidden' }}
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