import {Container} from './styled'

export default function RegistroNaoEncontrado( props ){

    return(
        <Container> 
            <img src='/assets/images/image 82.svg' alt="" />
            {
                props.mensagem.map( (m)  => 
                    <div className='text'> { m } </div>
                )
            }
        </Container>
    );
}