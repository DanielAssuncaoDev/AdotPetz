import {Container} from './styled'

export default function LineText (props) {
    return (
        <Container>
            <div class="row-bar"> 
                <div class= "bar"> </div>
                <div class="text"> {props.titulo} </div>
            </div>
        </Container>
    )
}