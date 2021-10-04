import {ContBoxMenu} from './styled'

export default function BoxMenu(props){

    return(
        <ContBoxMenu>
            <div className="UserOrLog">
                {
                    props.Topicos.map( (item) =>

                        <div className="MinhaConta">
                            {
                                item.icon === ""
                                
                                ?
                                    ''
                                
                                :
                                    <img src={item.icon} alt="" />
                            }
                            
                            <span> {item.NomeTopico} </span>
                        </div>
                    )
                }

                
            </div>

            <div className="space">

            </div>

            <div className="Options">
                {
                    props.SubTopicos.map( (item) =>
                        <span className="Cont-inf"> {item} </span>

                    )
                }

            </div>
            
        </ContBoxMenu>
    );
}