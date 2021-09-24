import {Container} from './styled'

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
                POR QUE DEVO ADOTAR?
            </div>

            <div className="Cont-box">

                <Box color="#FAD41B" 
                        text={textbox1} 
                            colorText="#000"
                                imgPet={imgbox1} 
                />
                <Box color="#D6D7C9" 
                        text={textbox2} 
                            colorText="#000"
                                imgPet={imgbox2} 
                />
                <Box color="#4E4E4E" 
                        text={textbox3} 
                            colorText="#FFF"
                                imgPet={imgbox3} 
                />

            </div>
            
        </Container>
    );
}