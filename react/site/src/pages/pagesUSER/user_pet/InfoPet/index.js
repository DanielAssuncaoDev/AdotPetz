import { BoxPet } from "./styled"
//import anima from 'animate.css';

export default function BoxPETZ(props){
    return(
      <BoxPet>
            <div className="imagemPET">
                <img src={props.info.imagem} alt='' /> 
            </div>
            
            <div className="NomePET"> <b>{props.info.nome}</b> </div>
            <div className="local">{props.info.localização} </div>
                
            <div className="sex">
                <div className="info-sex"> {props.info.sexo} </div>
                <div className="img-sex">
                  <img src={props.info.imagemSex} alt="" /> 
                </div>
            </div>
            <div className="porte">
                <div className="info-porte-ns"> P </div>
                <div className="info-porte-s"> M </div>
                <div className="info-porte-ns"> G </div>
            </div>
      </BoxPet>
        
    )
}