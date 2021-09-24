import { Conteiner } from "../BoxPet/styled"

export default function BoxPETZ(){
    return(
      <Conteiner>

       
         <div className="box">
            <img className="imagemPET" src="/assets/images/imagemPET.jpg" alt="" />
            <div className="NomePET"> Panda </div>
            <div className="loca"> SP - São Paulo </div>
            <div className="sex">
                <div className="info-sex"> Macho </div>
                <img className="img-sex" src="/assets/images/homem.jpg  " alt="" /> 
            </div>
            <div className="port">
               <div className="info-port"> P </div>
               <div className="info-port"> M </div>
               <div className="info-port"> G </div>
            </div>
         </div>

      </Conteiner>
        
    )
}