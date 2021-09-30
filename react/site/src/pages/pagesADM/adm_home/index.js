import {Container} from './styled.js'

import CabecalhoADM from '../../../components/comun/cabecalhoADM/index.js'

    export default function HomeADM(){
        return(
            <Container>
                <CabecalhoADM/>
                <div className="container">
                    <div className="box1">
                            <div className="imgadm"> <img src='/assets/images/image50.svg' alt=''/> </div>
                        <div className="box1-pt2">
                            <div className="itens"> Nome do ADM: </div>
                            <div className="itens"> E-mail: </div>
                            <div className="itens"> Telefone (celular): </div>
                            <div className="botao"> <button> <img src='/assets/images/image51.svg' alt=''/> Sair </button></div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className= "item1-bx2"> <button> <img src='/assets/images/image42.svg' alt=''/> <img className="icon" src='/assets/images/image43.svg' alt=''/> </button> Adicionar pet </div>
                        <div className= "item2-bbx2"> <button> <img src='/assets/images/image54.svg' alt=''/></button> Ver pets cadastrados </div>
                        <div className= "item3-bx2"> <button> <img src='/assets/images/image44.svg' alt=''/> </button> Ver solicitações de <p> adoções </p> </div>
                    </div>
                </div>

           </Container> 
        )
    }
