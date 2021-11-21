
import Cabecalho from '../../../components/comun/cabecalhoUSU'
import Rodape from '../../../components/comun/rodape'
import { Container } from './styled';

import { toast, ToastContainer } from 'react-toastify'
import Mensagem from '../../../components/popups/MensagemForm/index'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import { ProcurarCEP } from '../../../service/cep.js'

export default function Sujestoes(props ){
    const [popUp, setPopUp] = useState(false)

    const [pet] = useState(props.location.state)
    // console.log(props.location.state)
    const [formUser, setFormUser] = useState({})
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [rg, setRg] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')


    const [cepValido, setCepValido] = useState(false)

    
const nav = useHistory()

    if(pet === undefined){
        nav.push('/sugestoesadocao')
    }

    if(Cookie.get('User') === undefined ){
        nav.push('/login')
    }



    // Validações Formulário

        function CamposCompletos(){
            let completos = true

            if( 
                nomeCompleto === '' || 
                nascimento === '' || 
                rg === '' ||
                telefone === '' ||
                cep === '' ||
                numero === '' ||
                cidade === '' ||
                endereco === '' ||
                bairro === '' ){
                    toast.error('Todos os campos devem ser preenchidos')
                    completos = false
                }

            return completos
        }

        function Maior18(){

            let maior = true

            let idade18 = new Date().setFullYear(
                            new Date().getFullYear() - 18 
                        )

            idade18 = new Date( idade18 )
            let idadeUser = new Date( nascimento )

                if (idade18 < idadeUser ){
                    maior = false
                    toast.error('O candidato à adoção deve ser maior que 18 anos')
                }  

            return maior
        }

        function MascaraRG( e ){

            let tamanho = rg.length
            
            let ultimaLetra = e[e.length - 1]
            

            if( isNaN(ultimaLetra) && tamanho < e.length)
                return toast.error('Insira apenas números')

            if( ( tamanho === 1 || tamanho === 5 ) && tamanho < e.length )
                e = e + '.' 
            
            if (tamanho === 9 && tamanho < e.length )
                e = e + '-'

            if ( e.length > 12 )
                return

            setRg(e)
        }

        function MascaraTelefone( e ){

            let tamanho = telefone.length

            let ultimaLetra = e[e.length - 1]
            

            if( isNaN(ultimaLetra) && tamanho < e.length)
                return toast.error('Insira apenas números')

            if( tamanho === 0 && tamanho < e.length )
                e = '(' + e 

            if( tamanho === 2 && tamanho < e.length )
                e = e + ') '

            if ( tamanho === 8  && tamanho < e.length )
                e = e + ' - '

            if (  tamanho === 16 && tamanho < e.length ){
                e = e.replace( ' - ', '' )
                e = e.substring(0, 10) + ' - ' + e.substring( 10, e.length)

            }

            if (  tamanho === 17 && tamanho > e.length ){
                e = e.replace( ' - ', '' )
                e = e.substring(0, 9) + ' - ' + e.substring( 9, e.length)
 
            }
                
            if ( e.length > 17 )
                return

            setTelefone(e)
        }

        function MascaraCEP( e ){

            let tamanho = cep.length
            
            let ultimaLetra = e[e.length - 1]
            

            if( isNaN(ultimaLetra) && tamanho < e.length)
                return toast.error('Insira apenas números')

            if( tamanho === 4 && tamanho < e.length )
                e = e + ' - '

            if ( e.length > 11 )
                return

            setCep(e)

        }


        function LimparCEP( cep ){
            return cep.replace( ' - ', '' )
        }


        useEffect( async () => {

            const ChamarCEP = async() => {
                let CEPLimpo = LimparCEP(cep)
                let r = await ProcurarCEP(CEPLimpo)
                return r

            }

            if( cep.length === 11 ){
                let enderecoUser = await ChamarCEP()

                    if( enderecoUser.erro === true ){
                        toast.error('CEP inválido')
                        setCepValido(false)
            
                    } else {
                        setCepValido(true)

                        const {bairro, complemento, localidade, logradouro } = enderecoUser
                    
                        setBairro(bairro)
                        setCidade(localidade)
                        setEndereco(logradouro)
                        setComplemento(complemento)

                    }
            }

        }, [cep] )



//  Chama PopUp passando as informações da adoção

    function ChamarPopUp(){

            if( CamposCompletos() === false )
                return
            
            if( Maior18() === false )
                return

            if( rg.length < 12 )
                return toast.error('RG inválido')

            if( telefone.length < 16 )
                return toast.error('Telefone inválido')

            if( cep.length < 11 )
                return toast.error('CEP inválido')

            if( cepValido === false )
                return toast.error('CEP inválido')



        let idUser = JSON.parse(Cookie.get('User')).ID_USER

        let FormUser= {
            idUser,
            nomeCompleto, 
            nascimento,
            rg,
            telefone,
            cep,
            endereco,
            numero, 
            complemento, 
            bairro,
            cidade
        }
        setFormUser(FormUser)
        setPopUp(true)
    }



    return( 
        <Container>
            <Cabecalho/>
            <ToastContainer />

            {
                popUp === true

                ?
                    <Mensagem popUp={popUp}
                                setPopUp={setPopUp} 
                                    Form={formUser}
                                    Pet={pet} 

                    />

                : 
                    ''
            }

            
            <div className="ContainerBody">
                <div className="ContainerForm"> 
                    <div className="text-thanking-user">
                        <div className="text1"> Obrigada por se interessar em adotar o(a) <span> {pet.NM_PET} </span> ! <br /> Ela adorou a notícia de que tem alguém interessado em adotá-la </div>
                        <div className="obs-for-user"> Para prosseguir com a adoção, é necessário que você preencha todas as lacunas a seguir com suas informações pessoais, certifique se todas informações estão corretas e avance com o processo </div>
                        <div className="img"> <img src="/assets/images/core.png" width="100" alt=""/> </div>
                    </div>
                    <div className="ContainerInputs"> 
                        <div className="Name">
                            <input type="text" placeholder="Nome completo"
                                value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)}
                            /> 
                        </div>
                        <div className="InputsGroup"> 
                            <div className="Nascimento"> 
                                <input type="date" placeholder="Nascimento"
                                    value={nascimento} onChange={(e) => setNascimento(e.target.value)}
                                /> 
                            </div>
                            <div className="rg">
                                <input type="text" placeholder="RG"
                                    value={rg} onChange={(e) => MascaraRG(e.target.value)}
                                />
                            </div>
                            <div className="telefone"> 
                                <input type="text" placeholder="Telefone"
                                    value={telefone} onChange={(e) => MascaraTelefone(e.target.value)}  
                                />
                            </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="cep"> 
                                <input type="text" placeholder="CEP"
                                    value={cep} onChange={(e) => MascaraCEP(e.target.value)}
                                />
                            </div>
                            <div className="endereco">
                                <input type="text" placeholder="Endereço"
                                    value={endereco} onChange={(e) => setEndereco(e.target.value)}
                                />
                            </div>
                            <div className="numero">
                                <input type="text" placeholder="Número"
                                    value={numero} onChange={(e) => setNumero(e.target.value)}
                                /> 
                            </div>
                        </div>
                        <div className="InputsGroup"> 
                            <div className="complemento">  
                                <input type="text" placeholder="Complemento"
                                    value={complemento} onChange={(e) => setComplemento(e.target.value)}
                                />
                            </div>
                            <div className="cidade"> 
                                <input type="text" placeholder="Cidade"
                                    value={cidade} onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="bairro"> 
                                <input type="text" placeholder="Bairro"
                                        value={bairro} onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="button"> <button onClick={() => ChamarPopUp()}> Prosseguir com o processo de adoção </button> </div>
                </div>
            </div>
        <Rodape/>
        </Container>
    )
}