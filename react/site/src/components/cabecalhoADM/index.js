import {Container,
            Button
        } from './styled'

export default function CabecalhoADM(){

    return(
        <Container>            
            <div className="box-logo">
                <div className="logo">
                    <img src="/assets/images/logo.svg" alt="" />
                </div>
            </div>

            <div className="box-option">
                <Button>
                    <div className="icon-meuperfil">
                        <img src="/assets/images/account_circle_white_24dp.svg" alt="" />
                    </div>

                    <span className="title-meuperfil">
                        Meu Perfil
                    </span>
                </Button>
            </div>
        </Container>
    );
}