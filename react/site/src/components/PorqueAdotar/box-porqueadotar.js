import {BoxPorqueAdotar} from './styled';

export default function Box(props){

    return(
        <BoxPorqueAdotar color={ props.color } colortext={ props.colorText } >
            <div className="TextBox" >
                {props.text}
            </div>

            <div className="imgPet-box">
                <img src={props.imgPet} alt="" />
            </div>

        </BoxPorqueAdotar>
    );
}