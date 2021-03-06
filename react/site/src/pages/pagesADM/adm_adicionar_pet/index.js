import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api';
const api = new Api()

export default function Addpet(props){
const nav = useHistory();
    const [idPet, setIdPet] = useState('')
    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [porte, setPorte] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imgPet1, setImgPet1] = useState('')
    const [imgPet2, setImgPet2] = useState('')
    const [imgPet3, setImgPet3] = useState('')
    const [castrado, setCastrado] = useState({ name: "castrado", value: false })
    const [vacinaV10, setVacinaV10] = useState({ name: "vacinaV10", value: false })
    const [vacinaV8, setVacinaV8] = useState({ name: "vacinaV8", value: false })
    const [vacinaV5, setVacinaV5] = useState({ name: "vacinaV5", value: false })
    const [vacinaV4, setVacinaV4] = useState({ name: "vacinaV4", value: false })
    const [vacinaV3, setVacinaV3] = useState({ name: "vacinaV3", value: false })
    const [vacinaAntirrabica, setVacinaAntirrabica] = useState({ name: "vacinaAntirrabica", value: false })

    const [alterarPet] = useState(props.location.state)

    const [racasDisponiveis, setRacasDisponiveis] = useState([])
    const [addRaca, setAddRaca] = useState(false)

    function setInputDate(dataF){
        let hoy = new Date(dataF)
        hoy.setHours( hoy.getHours() + 3 )
        
        let d = hoy.getDate(),
            m = hoy.getMonth()+1, 
            y = hoy.getFullYear(),
            data;
    
 
        if(d < 10){
            d = "0"+d;
        };
        if(m < 10){
            m = "0"+m;
        };
    
        data = y+"-"+m+"-"+d;
        console.log(data);
        return data;
    };


    useEffect(( ) => {

        const alterarpoint = () => {
            let r = peso.replace(",", ".");
            console.log(r)
            setPeso(r);

        }

        alterarpoint()
    }, [peso])

    
    useEffect( () => {
        const ListarRacas = async() => { 
            let r = await api.racasDisponiveis()
            setRacasDisponiveis(r)
        }

        ListarRacas()
    }, [] )




    useEffect( ()=> {

        const PassarValoresAlterar = () => {
            if ( props.location.state !== undefined ){
                let pet = props.location.state
    
                let dataFormat = setInputDate(pet.DT_NASCIMENTO)
                // console.log(pet.DT_NASCIMENTO)

                setIdPet(pet.ID_PET)
                setNome(pet.NM_PET)
                setEspecie(pet.DS_ESPECIE)
                setRaca(pet.NM_RACA)
                setSexo(pet.DS_SEXO)
                setPeso(pet.DS_PESO)
                setNascimento(dataFormat)
                setPorte(pet.DS_PORTE)
                setDescricao(pet.DS_DESC)
                setImgPet1(pet.IMG_PET1)
                setImgPet2(pet.IMG_PET2)
                setImgPet3(pet.IMG_PET3)
                setCastrado({ name: "Castrado", value: pet.BT_CASTRADO})
                setVacinaV10({ name: "vacinaV10", value: pet.BT_VACINA_V10})
                setVacinaV8({ name: "vacinaV8", value: pet.BT_VACINA_V8})
                setVacinaV5({ name: "vacinaV5", value: pet.BT_VACINA_V5})
                setVacinaV4({ name: "vacinaV4", value: pet.BT_VACINA_V4})
                setVacinaV3({ name: "vacinaV3", value: pet.BT_VACINA_V3})
                setVacinaAntirrabica({ name: "vacinaAntirrabica", value: pet.BT_VACINA_ANTIRRABICA})
            }
        } 

        PassarValoresAlterar()
        
    }, [alterarPet, props] )



    // Verifica quais vacinas s??o verdadeiras e inicia os respectivos checkbox como checked 

    useEffect( () => {
        const IniciarChecked = () => {
            let vacinas = [vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica, castrado]

            for ( let v of vacinas){ 

                if (v.value === true) {
                    let checkbox = document.getElementById(v.name)
                    checkbox.setAttribute('checked', 'checked')
                }

            }
        } 

        IniciarChecked()

    }, [vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica, castrado])



    // Faz um insert ou um update na tabela PET com as informa????es passadas pelo usu??rio

    async function inserirPet() {

        if( ( vacinaV10.value === true || vacinaV8.value === true ) && especie === 'Felina' ){
            toast.error('As Vacinas n??o correspondem com a esp??cie do Animal')
            return
        } else if ( ( vacinaV5.value === true || vacinaV4.value === true || vacinaV3.value === true ) && especie === 'Canina'  ){
            toast.error('As Vacinas n??o correspondem com a esp??cie do Animal')
            return
        }
    
        if (nome === ('')) {
            return toast.error('Nome inv??lido');
        } if (especie === ('')) {
            return toast.error('Esp??cie inv??lida');
        } if (raca === ('')) {
            return toast.error('Ra??a inv??lida');
        } if (sexo === ('')) {
            return toast.error('Sexo inv??lido');
        } if (peso === ('')) {
            return toast.error('Peso inv??lido');
        } if (nascimento === ('')) {
            return toast.error('Data inv??lida');
        } if (porte === ('')) {
            return toast.error('Porte inv??lido');
        } if (descricao.length > 250) {
            return toast.error('N??meros de caracteres atingido')
        }if (imgPet1 === ('') && imgPet2 === ('') && imgPet3 === ('')){
            return toast.error('Insira no m??nimo uma imagem'); 
        }
    //     if (imgPet2 === ('')){
    //         return toast.error('Imagem inv??lida');
    //     }if (imgPet3 === ('')){
    //         return toast.error('Imagem inv??lida');
    //    }
       else {
                       
            if( alterarPet !== undefined ){

                let alterar = await api.editarPet(
                        idPet, nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3,
                        castrado.value, vacinaV10.value, vacinaV8.value, vacinaV5.value, vacinaV4.value, vacinaV3.value, vacinaAntirrabica.value
                )
                    if( alterar.erro !== undefined ){
                        toast.dark(alterar.erro)

                    } else {
                        toast.dark('Pet Alterado com Sucesso!')
                        nav.push('/admin/animaiscadastrados')
                    }

            } else {

                let r = await api.adicionarPets(
                        nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3,
                        castrado.value, vacinaV10.value, vacinaV8.value, vacinaV5.value, vacinaV4.value, vacinaV3.value, vacinaAntirrabica.value
                )

                if (r.erro !== undefined) {
                    toast.error(r.erro)

                } else {
                    toast('Pet cadastrado')
                    nav.push('/admin/animaiscadastrados')
                }

            }
        
        }
    }   

        
    

    const alterarvacinas = (setVacina, vacina) => {
        if (vacina.value === true) {
            setVacina({ name: vacina.name, value: false })
        } else {
            setVacina({ name: vacina.name, value: true })
        }


    }


    useEffect( () => {
        if( raca === 'addRaca' ){
            setRaca('')
            setAddRaca(true)
        }
    },[raca] )


    return (
        <Container>
            <ToastContainer />
            <Cabecalho />
            <div className="container">
                <div className="Bt-Voltar"> <button className="vltr"> <img onClick={() => nav.goBack()} className="vlt" src="/assets/images/icon_voltar.svg" alt="" /> </button> </div>
                <div className="box">
                    <div className="box-esq">
                        <div className="inputs">
                            <div>
                                <img src={imgPet1} alt="" />
                                <input className="input2" type="text" placeholder="Insira o Link da 1?? Imagem" value={imgPet1} onChange={e => setImgPet1(e.target.value)} />
                            </div>
                            <div>
                                <img src={imgPet2} alt="" />
                                <input className="input2" type="text" placeholder="Insira o Link da 2?? Imagem" value={imgPet2} onChange={e => setImgPet2(e.target.value)} />
                            </div>
                            <div>
                                <img src={imgPet3} alt="" />
                                <input className="input2" type="text" placeholder="Insira o Link da 3?? Imagem" value={imgPet3} onChange={e => setImgPet3(e.target.value)} />
                            </div>
                            
                        </div>
                        <div className="inputs">
                            <input className="input1" type="text" placeholder="Digite o Nome do Pet" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <select className="select2" name="select" value={sexo} onChange={e => setSexo(e.target.value)}>
                                <option value="SelecioneoSexo">Selecione o Sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="F??mea">F??mea</option>
                            </select>
                            <input className="input2" type="text" placeholder="Peso" value={peso} 
                                onChange={(e) => {
                                        setPeso(e.target.value)
                                    }} />
                            <select className="select2" name="select" value={porte} onChange={e => setPorte(e.target.value)}>
                                <option value="SelecioneoPorte">Selecione o Porte</option>
                                <option value="Grande">Grande</option>
                                <option value="M??dio">M??dio</option>
                                <option value="Pequeno">Pequeno</option>
                            </select>
                        </div>
                        <div className="inputs">
                            <input className="input3" type="date" placeholder="Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                            <select className="select3" name="select" value={especie} onChange={e => setEspecie(e.target.value)}>
                                <option value="">Esp??cie</option>
                                <option value="Canina">Canina</option>
                                <option value="Felina">Felina</option>
                            </select>
                        </div>
                        <div className="inputs">
                           
                        {
                            addRaca === false
                            ?   
                            <select className="select-raca" name="select" value={raca} onChange={e => setRaca(e.target.value)}>
                                <option value="Ra??a">Ra??a</option>
                                <option value="addRaca" > Adicionar Ra??a </option>
                                {
                                    racasDisponiveis.map( (r) => 
                                        <option value={r}> {r}</option>
                                    )
                                }
                             </select>

                             : 
                             <div className="input-addRaca">
                                <input className="input1" placeholder="Adicionar Ra??a"
                                value={raca} onChange={e => setRaca(e.target.value)}
                                />
                                <label onClick={ () => {
                                    setAddRaca(false)
                                    setRaca('')
                                    } } > Escolher ra??a </label>
                             </div>
                        }

                        </div>
                        <div className="texta"> Descri????o do pet <textarea value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> </div>
                    </div>
                    <div className="box-dir">
                        <div div className="saudepet"> SA??DE </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS CANINAS</div>
                            <div className="checkvcn">
                                <label className="label1"> V8 </label>
                                <input className="input5" type="checkbox" id={vacinaV8.name}
                                    value={vacinaV8.value} onClick={() => alterarvacinas(setVacinaV8, vacinaV8)}
                                />
                            </div>
                            <div className="checkvcn">
                                <label className="label1">  V10 </label>
                                <input className="input5" type="checkbox" id={vacinaV10.name}
                                    value={vacinaV10.value} onClick={() => alterarvacinas(setVacinaV10, vacinaV10)}
                                />
                            </div>
                        </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS FELINAS </div>
                            <div className="checkvcn">
                                <label className="label1"> V3 </label>
                                <input className="input5" type="checkbox" id={vacinaV3.name}
                                    value={vacinaV3.value} onClick={() => alterarvacinas(setVacinaV3, vacinaV3)}
                                
                                />
                            </div>
                            <div className="checkvcn">
                                <label className="label1"> V4 </label>
                                <input className="input5" type="checkbox" id={vacinaV4.name}
                                    value={vacinaV4.value} onClick={() => alterarvacinas(setVacinaV4, vacinaV4)}
                                />
                            </div>
                            <div className="checkvcn">
                                <label className="label1"> V5 </label>
                                <input className="input5" type="checkbox" id={vacinaV5.name}
                                    value={vacinaV5.value} onClick={() => alterarvacinas(setVacinaV5, vacinaV5)}
                                />
                            </div>
                        </div>
                        <div className="check">
                            <div className="checkvcn2">
                                <label> Castrado </label>
                                <input className="input5" type="checkbox" id={castrado.name}
                                    value={castrado.value} onClick={() => alterarvacinas(setCastrado, castrado)}
                                />
                            </div>
                            <div className="checkvcn2">
                                <label> Antirrabica </label>
                                <input className="input5" type="checkbox" id={vacinaAntirrabica.name}
                                    value={vacinaAntirrabica.value} onClick={() => alterarvacinas(setVacinaAntirrabica, vacinaAntirrabica)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botao">
                    <button className="button1" onClick={() => inserirPet()} > <img src="/assets/images/vector.svg" alt="" /> Cadastrar Pet </button>
                </div>
            </div>
        </Container>
    )
}