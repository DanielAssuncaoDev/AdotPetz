import {OptionsContainer} from './styled';

export default function OptionsADM(){

    return(
        <OptionsContainer>
            <div className="option-voltar">
                <span>
                    <img src="/assets/images/icon_voltar.svg" alt="" />
                </span>
            </div>


            <div className="option-recarregar">
                <span>
                    <img src="/assets/images/icon_refresh.svg" alt="" />
                </span>
            </div>
        </OptionsContainer>
    );
}