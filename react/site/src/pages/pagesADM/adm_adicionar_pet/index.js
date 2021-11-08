import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';
import { useState } from 'react'
<<<<<<< HEAD
import axios from 'axios';
=======
import Api from '../../../service/api';
>>>>>>> 5e8a3c81a22c3e3d393f606c4c57203ee5eaa68d
import { useHistory } from 'react-router-dom';


import Api from '../../../service/api';
const api = new Api()

export default function Addpet(){
    const nav = useHistory();

<<<<<<< HEAD
    const [nome, setNome] = useState('')
=======
    const [nome] = useState('')
>>>>>>> 5e8a3c81a22c3e3d393f606c4c57203ee5eaa68d
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [porte, setPorte] = useState('')
    const [descricao, setDescricao] = useState('')
<<<<<<< HEAD
    const [imgPet1, setImgPet1] = useState('')
    const [imgPet2, setImgPet2] = useState('')
    const [imgPet3, setImgpet3] = useState('')
=======
    const [imgPet1] = useState('')
    const [imgPet2] = useState('')
    const [imgPet3] = useState('')
>>>>>>> 5e8a3c81a22c3e3d393f606c4c57203ee5eaa68d
    const [castrado, setCastrado] = useState('')
    const [vacinaV10, setVacinaV10] = useState('')
    const [vacinaV8, setVacinaV8] = useState('')
    const [vacinaV5, setVacinaV5] = useState('')
    const [vacinaV4, setVacinaV4] = useState('')
    const [vacinaV3, setVacinaV3] = useState('')
    const [vacinaAntirrabica, setVacinaAntirrabica] = useState('')

// Oi lindo, comentei só pra fazer deploy rsrsrsrs. quando for mecher, pode descomentar rsrsrsrs "mecher" tá Serto

    // async function adicionarPets() {
    //     let r = await Api.adicionarPets({ nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, 
    //         castrado, vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica});
    //         if(r.erro !== undefined){
    //             alert(r.erro)
    //             return
    //         } else {
    //             alert('Pet cadastrado')
    //         }
    //  } 



    // Opa, comentei só pra fazer deploy, ok? :)

    // async function cadastrarPet() {
    //     let formData = new FormData();
    //     formData.append('nome', nome);
    //     formData.append('especie', especie);
    //     formData.append('raca', raca);
    //     formData.append('sexo', sexo);
    //     formData.append('peso', peso);
    //     formData.append('nascimento', nascimento);
    //     formData.append('porte', porte);
    //     formData.append('descricao', descricao);
    //     formData.append('imgPet1', imgPet1);
    //     formData.append('imgPet2', imgPet2);
    //     formData.append('imgPet3', imgPet3);
    //     formData.append('castrado', castrado);
    //     formData.append('vacinaV10', vacinaV10);
    //     formData.append('vacinaV8', vacinaV8);
    //     formData.append('vacinaV5', vacinaV5);
    //     formData.append('vacinaV4', vacinaV4);
    //     formData.append('vacinaV3', vacinaV3);
    //     formData.append('vacinaAntirrabica', vacinaAntirrabica);

    //     let resp = await axios.post('/admin/addpet', formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }})
    //     console.log(resp.data);
    // }

    // function previewImage() {
    //     if (imgPet1) {
    //         return URL.createObjectURL(imgPet1);
    //     }
    // }

    async function adicionarPets() {
        let r = await Api.adicionarPets({ nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, 
            castrado, vacinaV10, vacinaV8, vacinaV5, vacinaV4, vacinaV3, vacinaAntirrabica});
            if(r.erro !== undefined){
                alert(r.erro)
                return
            } else {
                alert('Pet cadastrado')
            }
     } 


    return(
        <Container>
            <Cabecalho/>
            <div className="container">
            <div className="bts"> <button className="vltr"> <img  onClick={ () => nav.push('/admin/home') } className="vlt" src="/assets/images/icon_voltar.svg" alt=""/> </button> </div>
                <div className="box">
                    <div className="box-esq">
                        <div className="imgs">
                            <div className="quadrado"> 
                                <input type="image" src="/assets/images/addimg1.svg" alt="" width="20" height="20"/>  
                            </div> 
                            {/* {imgPet1 && <div className="input-file"> <input id="capa-input-file" type="file" onChange={e => setCapa(e.target.files[0])} /> </div> } */}
                        </div>
                        <div className="inputs"> 
                            <input className="input1" type="text" placeholder="Adicionar fotos" src=""/> <input className="input1" type="text" placeholder="Digite o Nome do Pet" />
                        </div>
                        <div className="inputs"> 
                            <select className="select2" name="select" value={sexo} onChange={e => setSexo(e.target.value)}> <option value="valor1">Selecione o Sexo</option> </select> <input className="input2"  type="text" placeholder="Peso" value={peso} onChange={e => setPeso(e.target.value)}/> <select className="select2" name="select" value={porte} onChange={e => setPorte(e.target.value)}> 
                                <option value="valor1">Selecione o Porte</option>
                                <option value="valor2">Médio</option> 
                            </select>
                        </div>
                        <div className="inputs"> 
                            <input className="input3" type="text" placeholder="Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/> <select className="select3" name="select" value={especie} onChange={e => setEspecie(e.target.value)}>  <option value="valor1">Espécie</option> </select>
                        </div>
                        <div className="inputs"> 
                            <select className="select4" name="select" value={raca} onChange={e => setRaca(e.target.value)}> 
                                <option value="valor1">Raça</option> 
                            </select>
                        </div>
                        <div className="texta">Descrição do pet<textarea value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> </div>
                    </div>
                    <div className="box-dir">
                        <div div className="saudepet"> SAÚDE </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS CANINAS </div>
                            <div className="checkvcn"> 
                                <label className="label1" value={vacinaV8} onChange={e => setVacinaV8(e.target.value)}> V8 </label> 
                                <input className="input5" type="checkbox" /> 
                            </div>
                            <div className="checkvcn"> 
                                <label className="label1" value={vacinaV10} onChange={e => setVacinaV10(e.target.value)}>  V10 </label> 
                                <input className="input5" type="checkbox"/>
                            </div>
                        </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS FELINAS </div>
                            <div className="checkvcn"> 
                                <label className="label1"> V3 </label> 
                                <input className="input5" type="checkbox" value={vacinaV3} onChange={e => setVacinaV3(e.target.value)}/>
                            </div>
                            <div className="checkvcn"> 
                                <label className="label1"> V4 </label> 
                                <input className="input5" type="checkbox" value={vacinaV4} onChange={e => setVacinaV4(e.target.value)} />
                            </div>
                            <div className="checkvcn"> 
                                <label className="label1"> V5 </label> 
                                <input className="input5" type="checkbox" value={vacinaV5} onChange={e => setVacinaV5(e.target.value)} />
                            </div>
                        </div>
                        <div className="check">
                            <div className="checkvcn2"> 
                                <label value={castrado} onChange={e => setCastrado(e.target.value)}> Castrado </label> 
                                <input className="input5" type="checkbox" />
                            </div>
                            <div className="checkvcn2"> 
                                <label value={vacinaAntirrabica} onChange={e => setVacinaAntirrabica(e.target.value)}> Antirrabica </label> 
                                <input className="input5" type="checkbox" />
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="botao"> 
                    <button onclick={() => adicionarPets()} className="button1"> <img src="/assets/images/vector.svg" alt=""/> Cadastrar Pet </button>
                </div>
            </div>
        </Container>
    )
}