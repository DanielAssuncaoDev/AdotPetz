import {Container} from './styled'

export default function CuidarPet(props){
    return(
        <Container>
            <div className="container">
                <div>
                    <div className="Titulo">{props.TituloGeral}</div>
                    <div className="imgcat"> <img src={props.imgpet} alt=''/></div>    
                </div>
                <div className="Box-2"> 
                    <div className="recadinho">{props.recadinhoGeral}</div>
                    <div className="titulo2">{props.tituloGeral1}</div>
                    <div className="desc"> {props.descGeral1}
                      <p>{props.pGeral}</p> </div>
                    <div className="titulo2">{props.tituloGeral2}</div>
                    <div className="desc">{props.descGeral2}</div>
                    <div className="titulo2">{props.tituloGeral3}</div>
                    <div className="desc"> {props.descGeral3} 
                     <b>{props.bGeral}</b>
                     {props.descGeral32} </div>
                    <div className="titulo2">{props.tituloGeral4}</div>
                    <div className="desc"> {props.descGeral4}</div>
                    <div className="titulo2">{props.tituloGeral5}</div>
                    <div className="desc">{props.descGeral5}</div>
                    <div className="titulo2">{props.tituloGeral6}</div>
                    <div className="desc">{props.descGeral6}</div>
                    
                </div>
            </div>
        </Container>
        )}   