import axios from 'axios';
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
    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [porte, setPorte] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imgPet1, setImgPet1] = useState(null)
    const [imgPet2, setImgPet2] = useState('')
    const [imgPet3, setImgpet3] = useState('')
    const [castrado, setCastrado] = useState(false)
    const [vacinaV10, setVacinaV10] = useState(false)
    const [vacinaV8, setVacinaV8] = useState({name:"vacinaV8", value: true })
    const [vacinaV5, setVacinaV5] = useState(false)
    const [vacinaV4, setVacinaV4] = useState(false)
    const [vacinaV3, setVacinaV3] = useState(false)
    const [vacinaAntirrabica, setVacinaAntirrabica] = useState(false)

    const [alterarPet, setAlterarPet] = useState(props.location.state)

    
    useEffect( ()=> {
        if ( props.location.state !== undefined ){
            let pet =  props.location.state

            setNome(pet.NM_PET)
            setEspecie(pet.DS_ESPECIE)
            setRaca(pet.NM_RACA)
            setSexo(pet.DS_SEXO)
            setPeso(pet.DS_PESO)
            setNascimento(pet.DT_NASCIMENTO)
            setPorte(pet.DS_PORTE)
            setDescricao(pet.DS_DESC)
            // setImgPet1(pet.IMG_PET1)
            // setImgPet1(pet.IMG_PET2)
            // setImgPet1(pet.IMG_PET3)
            setCastrado(pet.BT_CASTRADO)
            setVacinaV10(pet.BT_VACINA_V10)
            setVacinaV10(pet.BT_VACINA_V8)
            setVacinaV10(pet.BT_VACINA_V5)
            setVacinaV10(pet.BT_VACINA_V4)
            setVacinaV10(pet.BT_VACINA_V3)
            setVacinaAntirrabica(pet.BT_VACINA_ANTIRRABICA)

   
        }
    }, [] )

// Oi lindo, comentei só pra fazer deploy rsrsrsrs. quando for mecher, pode descomentar rsrsrsrs "mecher" tá Serto

    // async function adicionarPets() {
    //     let r = await Api.adicionarPets({ nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, 
    //         castrado, vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica});
    //         if(r.erro !== undefined){
    //             toast.error(r.erro)
    //             return
    //         } else {
    //             toast('Pet cadastrado')
    //         }
    //  } 

     async function inserirPet() {
        let formData = new FormData();
            formData.append('nome', nome);
            formData.append('especie', especie);
            formData.append('raca', raca);
            formData.append('sexo', sexo);
            formData.append('peso', peso);
            formData.append('nascimento', nascimento);
            formData.append('porte', porte);
            formData.append('descricao', descricao);
            formData.append('imgPet1', imgPet1);
            // formData.append('imgPet2', imgPet2);
            // formData.append('imgPet3', imgPet3);
            // formData.append('castrado', castrado);
            // formData.append('vacinaV10', vacinaV10);
            // formData.append('vacinaV8', vacinaV8);
            // formData.append('vacinaV5', vacinaV5);
            // formData.append('vacinaV4', vacinaV4);
            // formData.append('vacinaV3', vacinaV3);
            // formData.append('vacinaAntirrabica', vacinaAntirrabica);
        //  if(especie === 'Canina' && vacinaV5 === true || vacinaV4 === true || vacinaV3 === true){
        //     return(toast.error("Você não pode inserir Vacinas de Gatos para Cães"))
        // } if(especie === 'Felina' && vacinaV8 === true || vacinaV10 === true) {
        //     return (toast.error("Você não pode inserir Vacinas de Cães para Gatos"))
        // if(nome && especie && raca && sexo && peso && nascimento && porte && descricao === ('')){
        //     return toast.error('Preencha os campos vazios')
        
        
        let r = await Api.adicionarPets({ nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, 
            castrado, vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica});
            if(r.erro !== undefined){
               return toast.error(r.erro)
            }if(nome === ('')){
                return toast.error('Nome inválido');
            } if(especie === ('')){
                return toast.error('Espécie inválida');
            } if(raca === ('')){
                return toast.error('Raça inválida');
            } if(sexo === ('')){
                return toast.error('Sexo inválido');
            } if(peso === ('')){
                return toast.error('Peso inválido');
            } if(nascimento === ('')){
                return toast.error('Data inválida');
            } if(porte === ('')){
                return toast.error('Porte inválido');
            } if(descricao.length > 250){
                return toast.error('Números de caracteres atingido')
            // } if(imgPet1 === ('')){
            //     return toast.error('❌ Imagem inválida');
            // } if(imgPet2 === ('')){
            //     return toast.error('❌ Imagem inválido');
            // } if(imgPet3 === ('')){
            //     return toast.error('❌ Imagem inválido');
            } else {
                return toast('Pet cadastrado')
            }
     }
    
    function previewImage() {
         if (imgPet1) {
         return URL.createObjectURL(imgPet1);
        } else {
            return"/assets/images/pet1.svg"
        }
    }

    function selectFile() {
        let input = document.getElementById("Imgs");
            input.click()
    }

    useEffect(() => {
        console.log(vacinaV8)
    }, [vacinaV8])

    useEffect(() => {

        const IniciarChecked = () => {
            let vacinas = [vacinaV8]

            for ( let v of vacinas){ 

                if(v.value === true){
                    let checkbox = document.getElementById(v.name)
                    checkbox.setAttribute('checked', 'checked')
                }

            }
        } 
        
        IniciarChecked()
    }, [])

const alterarvacinas = (setVacina, vacina) => {

        if( vacina.value === true ){
            setVacina({name: vacina.name, value: false})
        } else{
            setVacina({name: vacina.name, value: true})
        }
    }

    return(
        <Container>
        <ToastContainer/>
            <Cabecalho/>
            <div className="container">
            <div> <button className="vltr"> <img onClick={ () => nav.push('/admin/home') } className="vlt" src="/assets/images/icon_voltar.svg" alt=""/> </button> </div>
                <div className="box">
                    <div className="box-esq">
                        <div className="imgs">
                            <img className="addimg" onClick={selectFile} src={previewImage()} alt=""/>
                            <div className="input-file"> 
                                <input className="bdimg" id="Imgs" type="file" onChange={e => setImgPet1(e.target.files[0])} />
                            </div> 
                        </div>
                        <div className="Load-img"> <button className="Loadimg" onClick={selectFile}> Carregar Imagem </button></div>
                        <div className="inputs">
                             <input className="input1" type="text" placeholder="Digite o Nome do Pet" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <select className="select2" name="select" value={sexo} onChange={e => setSexo(e.target.value)}>
                                <option value="SelecioneoSexo">Selecione o Sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select> 
                            <input className="input2" type="text" placeholder="Peso" value={peso} onChange={e => setPeso(e.target.value)}/> 
                            <select className="select2" name="select" value={porte} onChange={e => setPorte(e.target.value)}> 
                                <option value="SelecioneoPorte">Selecione o Porte</option>
                                <option value="Grande">Grande</option>
                                <option value="Médio">Médio</option>
                                <option value="Pequeno">Pequeno</option> 
                            </select>
                        </div>
                        <div className="inputs">
                            <input className="input3" type="text" placeholder="Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/> 
                            <select className="select3" name="select" value={especie} onChange={e => setEspecie(e.target.value)}> 
                                <option value="">Espécie</option>
                                <option value="Canina">Canina</option>
                                <option value="Felina">Felina</option>
                            </select>
                        </div>
                        <div className="inputs">
                            <select className="select4" name="select" value={raca} onChange={e => setRaca(e.target.value)}>
                                <option value="Raça">Raça</option>
                                <option value="Vira-Lata">Vira-Lata</option>
                                <option value="Labrador">Labrador</option>
                                <option value="Golden">Golden</option>
                            </select>
                        </div>
                        <div className="texta"> Descrição do pet <textarea value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> </div>
                    </div>
                    <div className="box-dir">
                        <div div className="saudepet"> SAÚDE </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS CANINAS</div>
                            <div className="checkvcn">
                                <label className="label1" /*value={vacinaV8} onChange={e => setVacinaV8(e.target.value)}*/> V8 </label>
                                <input className="input5" type="checkbox" id={vacinaV8.name}
                                    value={vacinaV8.value} onChange={() => alterarvacinas(setVacinaV8, vacinaV8)}
                                />
                            </div>
                            <div className="checkvcn">
                                <label className="label1" /*value={vacinaV10} onChange={e => setVacinaV10(e.target.value)}*/>  V10 </label>
                                <input className="input5" type="checkbox"
                                    
                                />
                            </div>
                        </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS FELINAS </div>
                            <div className="checkvcn">
                                <label className="label1"> V3 </label>
                                <input className="input5" type="checkbox" /*value={vacinaV3} onChange={e => setVacinaV3(e.target.value)}*//>
                            </div>
                            <div className="checkvcn">
                                <label className="label1"> V4 </label>
                                <input className="input5" type="checkbox" /*value={vacinaV4} onChange={e => setVacinaV4(e.target.value)}*//>
                            </div>
                            <div className="checkvcn">
                                <label className="label1"> V5 </label>
                                <input className="input5" type="checkbox" /*value={vacinaV5} onChange={e => setVacinaV5(e.target.value)} *//>
                            </div>
                        </div>
                        <div className="check">
                            <div className="checkvcn2">
                                <label /*value={castrado} onChange={e => setCastrado(e.target.value)} */> Castrado </label>
                                <input className="input5" type="checkbox" />
                            </div>
                            <div className="checkvcn2">
                                <label /*value={vacinaAntirrabica} onChange={e => setVacinaAntirrabica(e.target.value)}*/> Antirrabica </label>
                                <input className="input5" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botao">
                    <button className="button1" onClick={ () => inserirPet()} > <img src="/assets/images/vector.svg" alt=""/> Cadastrar Pet </button>
                </div>
            </div>
        </Container>
    )
}