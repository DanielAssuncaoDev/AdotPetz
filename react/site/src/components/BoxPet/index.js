import { BoxPet } from "../BoxPet/styled"

export default function BoxPETZ(){
    return(
      <BoxPet>

         <div className="imagemPET">
            <img  src="/assets/images/imagemPET.jpg" alt="" />
         </div>
         
         <div className="NomePET"> <b>Panda</b> </div>
         <div className="local"> SP - São Paulo </div>
            
         <div className="sex">
             <div className="info-sex"> Macho </div>
             <div className="img-sex">
               <img  src="/assets/images/sexo-macho.svg" alt="" /> 
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