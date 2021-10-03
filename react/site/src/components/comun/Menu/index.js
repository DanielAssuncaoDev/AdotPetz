import {ButtonMenu} from './styled'

export default function Menu( props){

    return(
        <ButtonMenu hidden={props.hidden}>
            <img src="/assets/images/icon_menu.svg" alt="" />
        </ButtonMenu>
    )
}