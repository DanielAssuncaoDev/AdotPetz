import {BoxPorqueAdotar} from './styled';

export default function Box(props){

    return(
        <BoxPorqueAdotar colortext={ props.colorText } >
            
            <div className="ImgPet">
                <img src={ props.imgFundo} alt="" />
            </div>
            <div className="TextBox" >
                {props.text}
            </div>


        </BoxPorqueAdotar>
    );
}