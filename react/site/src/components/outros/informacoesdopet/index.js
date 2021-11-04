import {Container} from './styled'


export default function LineText (props) {
    return (
        <Container>
            <div className="text"> {props.especie + " | "} </div>
            <div className="text"> {props.sexo + " |   "} </div>          
            <div className="text"> {props.porte + " | "} </div>
            <div className="text"> {props.idade + " | "} </div>
            <div className="text"> {props.peso + " | "} </div>
            <div className="text"> {props.raca} </div>
        </Container>
    )
}