import { BoxPet } from "../BoxPet/styled"

export default function BoxPETZ(prosp){
    return(
      <BoxPet>
         <div className="imagemPET">
             <img src={prosp.imagem} alt='' /> 
         </div>
         
         <div className="NomePET"> <b>{prosp.nome}</b> </div>
         <div className="local">{prosp.localização} </div>
            
         <div className="sex">
             <div className="info-sex"> {prosp.sexo} </div>
             <div className="img-sex">
               <img src={prosp.imagemSex} alt="" /> 
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