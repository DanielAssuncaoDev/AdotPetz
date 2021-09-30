import {Container} from './styled'

import ImgFundo1 from '../../assets/images/imgFundo-pqadotar/Pqadotar1.svg'
import ImgFundo2 from '../../assets/images/imgFundo-pqadotar/Pqadotar2.svg'
import ImgFundo3 from '../../assets/images/imgFundo-pqadotar/Pqadotar3.svg'

import Box from './box-porqueadotar'


export default function PorqueAdotar(){

    const textbox1 = "Ao adotar, além de estar salvando a mera vida de um animal indefeso, você estará diminuindo o índice de animais abandonados nas ruas."
    const imgbox1 = '/assets/images/imgpetsBox-Porqueadotar/imgPetBox1.svg'

    const textbox2 = "Sem contar que não tem nada melhor do que vê-lo saudavel e feliz após receber seu amor, carinho e acolhimento."
    const imgbox2 = '/assets/images/imgpetsBox-Porqueadotar/imgPetBox2.svg'

    const textbox3 = "Aliás, se você pode adotar e salvar a vida de um animal, por que não fazer isso? Adote já um novo companheiro para você e sua familia!"
    const imgbox3 = '/assets/images/imgpetsBox-Porqueadotar/imgPetBox3.svg'

    return(
        <Container>
            
            <div className="Titulo">
                POR QUE DEVO <span>ADOTAR?</span>           
            </div>

            <div className="Cont-box">

                <Box imgFundo={ImgFundo1} 
                        text={textbox1} 
                            colorText="#000"
                                imgPet={imgbox1} 
                />
                <Box imgFundo={ImgFundo2}
                        text={textbox2} 
                            colorText="#000"
                                imgPet={imgbox2}
                />
                <Box imgFundo={ImgFundo3}
                        text={textbox3} 
                            colorText="#000"
                                imgPet={imgbox3} 
                />

            </div>
            
        </Container>
    );
}