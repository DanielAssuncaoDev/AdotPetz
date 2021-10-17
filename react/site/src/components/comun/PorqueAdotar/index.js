import {Container} from './styled'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ImgFundo1 from '../../../assets/images/imgFundo-pqadotar/Pqadotar1.svg'
import ImgFundo2 from '../../../assets/images/imgFundo-pqadotar/Pqadotar2.svg'
import ImgFundo3 from '../../../assets/images/imgFundo-pqadotar/Pqadotar3.svg'

import Box from './box-porqueadotar'


export default function PorqueAdotar(){

    const textbox1 = "Ao adotar, além de estar salvando a mera vida de um animal indefeso, você estará diminuindo o índice de animais abandonados nas ruas."
    const textbox2 = "Sem contar que não tem nada melhor do que vê-lo saudavel e feliz após receber seu amor, carinho e acolhimento."
    const textbox3 = "Aliás, se você pode adotar e salvar a vida de um animal, por que não fazer isso? Adote já um novo companheiro para você e sua familia!"


        const Boxes = [
            {
                text: textbox1,
                img: ImgFundo1
            }, 
            {
                text: textbox2,
                img: ImgFundo2
            }, 
            {
                text: textbox3,
                img: ImgFundo3
            }, 
        ]


    return(
        <Container>
            
            <div className="Titulo">
                POR QUE DEVO <span>ADOTAR?</span>           
            </div>

            <div className="Cont-box">
                <Carousel  width="100%" infiniteLoop="true" className="Carrosel">

                    {
                        Boxes.map( (box) =>
                        
                            <Box imgFundo={box.img} 
                                    text={box.text} 
                                        
                            />

                        )
                    }
            
                </Carousel>



                <div className="Boxes-PqAdotar">

                    {
                        Boxes.map( (box) =>
                        
                            <Box imgFundo={box.img} 
                                    text={box.text} 
                                        
                            />

                        )
                    }
                    
                </div>

            </div>
            
        </Container>
    );
}