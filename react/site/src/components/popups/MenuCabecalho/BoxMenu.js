import {ContBoxMenu} from './styled'

import { useHistory } from 'react-router-dom'

export default function BoxMenu(props){

const nav = useHistory()

console.log(props)


    return(
        <ContBoxMenu>
            <div className="UserOrLog">
                {
                    props.Topicos.map( (item) =>

                        <div onClick={() => nav.push(`/${item.pathname}`)} 
                                className="MinhaConta">
                            {
                                item.icon === ""
                                
                                ?
                                    ''
                                
                                :
                                    <img src={item.icon} alt="" />
                            }
                            
                            <span>
                                {item.NomeTopico}
                            </span>
                        </div>
                    )
                }

                
            </div>

            <div className="space">

            </div>

            <div className="Options">
                {
                    props.SubTopicos.map( (item) =>
                        <span onClick={() => nav.push(`/${item.pathname}`)}
                                className="Cont-inf"> 
                            {item.NomeSub} 
                        </span>

                    )
                }

            </div>
            
        </ContBoxMenu>
    );
}