import { BoxPet } from "../BoxPet/styled"

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function BoxPETZ(props) {

  const [colorPorte, setColorPorte] = useState('')

  const nav = useHistory()

  useEffect(() => {
    if (props.Animal.DS_SEXO === 'Macho') {
      setColorPorte('#101BC4')
    } else {
      setColorPorte('rgb(207, 40, 160)')
    }

  }, [props])

  function getImage() {
    return props.Animal.IMG_PET1;
  }


  return (
    <BoxPet colorPet={colorPorte}  >
      {/* <div className='conteudo-pet'>    */}
      <div className="imagemPET">
        <img src={getImage()} alt='' />
      </div>

      <div className="NomePET"> <b>{props.Animal.NM_PET}</b> </div>
      <div className="local"> São Paulo - SP </div>

      <div className="sex">
        <div className="info-sex"> {props.Animal.DS_SEXO} </div>
        <div className="img-sex">
          {
            props.Animal.DS_SEXO === 'Macho'

              ? <img src="/assets/images/sexo-macho.svg" alt="" />

              : <img src="/assets/images/sexo-femea.svg" alt="" />

          }
        </div>
      </div>

      {
        props.Animal.DS_PORTE === 'Pequeno'
          ?
          <div className="porte">
            <div className="info-porteSelect"> P </div>
            <div className="info-porte"> M </div>
            <div className="info-porte"> G </div>
          </div>

          : props.Animal.DS_PORTE === 'Médio'

            ?
            <div className="porte">
              <div className="info-porte"> P </div>
              <div className="info-porteSelect"> M </div>
              <div className="info-porte"> G </div>
            </div>

            :
            <div className="porte">
              <div className="info-porte"> P </div>
              <div className="info-porte"> M </div>
              <div className="info-porteSelect"> G </div>
            </div>


      }

      <div className='botão'> <button onClick={() => nav.push({ pathname: '/pet', state: props.Animal })} >Conhecer mais o Pet</button></div>
      {/* </div>  */}
    </BoxPet>

  )
}