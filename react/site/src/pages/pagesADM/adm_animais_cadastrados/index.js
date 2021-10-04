import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';

export default function Sujestoes(){
    return(
        <Container>
            <Cabecalho />
            <div class="ContainerBody">
                <div class="ButtonsContainer"> 
                    <div class="BackButton"> <button> <img src="/assets/images/setaAdotPetz.svg" width="25" alt=""/> </button> </div>
                    <div class="right-buttons">
                        <div class="RefreshButton"> <button> <img src="/assets/images/refresh2 2.svg" width="17" alt=""/> </button> </div>
                        <div class="PlusButton"> <button> <img src="/assets/images/plusAdotPetz.svg" alt="" width="23.5"/> </button> </div>
                    </div>
                </div>

                <div class="tableAnimals"> 
                    <div class="row-bar"> 
                        <div class= "bar-new-animal"> </div>
                        <div class="text-registered-animal"> Animais cadastrados </div>
                    </div>
                
                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th class="ra"> RA </th>
                                <th class="nome"> Nome do animal </th>
                                <th class="especie"> Espécie </th>
                                <th class="sexo">  Sexo </th>
                                <th class="porte">  Porte </th>
                                <th class="data">  Data de cadastro </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                            </tr>
                        </thead>
                
                        <tbody>
                            <tr >
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button> <img src="/assets/images/visu.svg" alt="" width="20" /> </button> </td>
                                <td class = "edit">   <button> <img src="/assets/images/editt.svg" alt="" width="25" /> </button> </td>
                                <td class="delete"> <button> <img src="/assets/images/deletee.svg" alt="" width="20"/> </button> </td>
                                <td class = "selo">   <button> <img src="/assets/images/selo.svg" alt="" /> </button> </td>
                            </tr>

                            <tr class="linha-alternada">
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button>  </button> </td>
                                <td class = "edit">   <button> </button> </td>
                                <td class="delete"> <button> </button> </td>
                                <td class = "selo">   <button></button> </td>
                            </tr>

                            <tr >
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button> </button> </td>
                                <td class = "edit">   <button> </button> </td>
                                <td class="delete"> <button> </button> </td>
                                <td class = "selo">   <button> </button> </td>
                            </tr>

                            <tr class="linha-alternada">
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button></button> </td>
                                <td class = "edit">   <button>  </button> </td>
                                <td class="delete"> <button>  </button> </td>
                                <td class = "selo">   <button> </button> </td>
                            </tr>

                            <tr >
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button> </button> </td>
                                <td class = "edit">   <button>  </button> </td>
                                <td class="delete"> <button>  </button> </td>
                                <td class = "selo">   <button> </button> </td>
                            </tr>

                            <tr class="linha-alternada">
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button></button> </td>
                                <td class = "edit">   <button>  </button> </td>
                                <td class="delete"> <button>  </button> </td>
                                <td class = "selo">   <button>  </button> </td>
                            </tr>

                            <tr >
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button>  </button> </td>
                                <td class = "edit">   <button> </button> </td>
                                <td class="delete"> <button>  </button> </td>
                                <td class = "selo">   <button></button> </td>
                            </tr>

                            <tr class="linha-alternada">
                                <td class="ra"> 1 </td>
                                <td class="nome"> Panda </td>
                                <td class="especie"> Cachorro </td>
                                <td class="sexo">  Macho </td>
                                <td class="porte"> M </td>
                                <td class="data"> 2021 -08 -13  12:00 </td>
                                <td class="visu"> <button> </button> </td>
                                <td class = "edit">   <button>  </button> </td>
                                <td class="delete"> <button>  </button> </td>
                                <td class = "selo">   <button> </button> </td>
                            </tr>
                        </tbody>
                    
                    </table>
                </div>
            </div>
        </Container>
    );
}