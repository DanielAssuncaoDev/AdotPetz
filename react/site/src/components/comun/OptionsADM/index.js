import { useHistory } from 'react-router';
import {OptionsContainer} from './styled';

export default function OptionsADM(){

    const nav = useHistory();
    
    return(
        <OptionsContainer>
            <div className="option-voltar">
                <span>
                    <img onClick={ () => nav.push('/admin/home') } src="/assets/images/icon_voltar.svg" alt="" />
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