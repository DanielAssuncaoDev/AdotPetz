import { BoxPet } from "./styled"
//import anima from 'animate.css';

export default function BoxPETZ(prosp){
    return(
      <BoxPet>
            <div className="imagemPET">
                <img src={prosp.info.imagem} alt='' /> 
            </div>
            
            <div className="NomePET"> <b>{prosp.info.nome}</b> </div>
            <div className="local">{prosp.info.localização} </div>
                
            <div className="sex">
                <div className="info-sex"> {prosp.info.sexo} </div>
                <div className="img-sex">
                  <img src={prosp.info.imagemSex} alt="" /> 
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