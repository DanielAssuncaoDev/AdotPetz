import {ContainerMenu} from './styled'
import PopUp from '../../../components/popups/MenuCabecalho/index'

import { useState } from 'react'


export default function Menu(props){

    const [ popUp, setPopUP] = useState(false)

    const controlarPopUp = () => {
 
        if( popUp === false ){
            setPopUP(true)
        } else{
            setPopUP(false)
        }

    }

    return(
        <ContainerMenu hidden={props.hidden}>
            <div>
                <img onClick={() => controlarPopUp() } src="/assets/images/icon_menu.svg" alt="" />
            </div>

            {
                popUp === true

                ?
                    <PopUp configPopUp={props.configMenu}  />


                : 
                    ''

            }

        </ContainerMenu>
    )
}