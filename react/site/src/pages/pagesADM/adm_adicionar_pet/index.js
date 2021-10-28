import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';
import { useState } from 'react'
import Api from '../../../service/api';


export default function Addpet(){

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
const [imgPet3, setImgpet3] = useState('')
const [castrado, setCastrado] = useState('')
const [vacinaV10, setVacinaV10] = useState('')
const [vacinaV8, setVacinaV8] = useState('')
const [vacinaV5, setVacinaV5] = useState('')
const [vacinaV4, setVacinaV4] = useState('')
const [vacinaV3, setVacinaV3] = useState('')
const [vacinaAntirrabica, setVacinaAntirrabica] = useState('')

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
            <div className="bts"> <button className="vltr"> <img className="vlt" src="/assets/images/icon_voltar.svg" alt=""/> </button> </div>
                <div className="box">
                    <div className="box-esq">
                        <div className="imgs">
                        <div className="quadrado"> <input type="image" src="/assets/images/addimg1.svg" alt="" width="20" height="20"/>  </div> 
                        <div> <img className="addimg" src="/assets/images/image71.svg" alt=""/> </div>
                        </div>
                        <div className="inputs"> <input className="input1"  type="text" placeholder="Adicionar fotos" src="" /> <input className="input1"  type="text" placeholder="Digite o Nome do Pet" /></div>
                        <div className="inputs"> <select className="select2" name="select" value={sexo} onChange={e => setSexo(e.target.value)}> <option value="valor1">Selecione o Sexo</option> </select>  <input className="input2"  type="text" placeholder="Peso" value={peso} onChange={e => setPeso(e.target.value)}/> <select className="select2" name="select" value={porte} onChange={e => setPorte(e.target.value)}> <option value="valor1">Selecione o Porte</option> </select></div>
                        <div className="inputs"> <input className="input3" type="text" placeholder="Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/> <select className="select3" name="select" value={especie} onChange={e => setEspecie(e.target.value)}> <option value="valor1">Espécie</option> </select></div>
                        <div className="inputs"> <select className="select4" name="select" value={raca} onChange={e => setRaca(e.target.value)}> <option value="valor1">Raça</option> </select></div>
                        <div className="texta"> Descrição do pet <textarea value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> </div>
                    </div>
                    <div className="box-dir">
                        <div div className="saudepet"> SAÚDE </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS CANINAS</div>
                            <div className="checkvcn"> <label className="label1" value={vacinaV8} onChange={e => setVacinaV8(e.target.value)}> V8 </label> <input className="input5" type="checkbox" /> </div>
                            <div className="checkvcn"> <label className="label1" value={vacinaV10} onChange={e => setVacinaV10(e.target.value)}>  V10 </label> <input className="input5" type="checkbox"/></div>
                        </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS FELINAS </div>
                            <div className="checkvcn"> <label className="label1"> V3 </label> <input className="input5" type="checkbox" value={vacinaV3} onChange={e => setVacinaV3(e.target.value)}/></div>
                            <div className="checkvcn"> <label className="label1"> V4 </label> <input className="input5" type="checkbox" value={vacinaV4} onChange={e => setVacinaV4(e.target.value)} /></div>
                            <div className="checkvcn"> <label className="label1"> V5 </label> <input className="input5" type="checkbox" value={vacinaV5} onChange={e => setVacinaV5(e.target.value)} /></div>
                        </div>
                        <div className="check">
                            <div className="checkvcn2"> <label value={castrado} onChange={e => setCastrado(e.target.value)}> Castrado </label> <input className="input5" type="checkbox" /></div>
                            <div className="checkvcn2"> <label value={vacinaAntirrabica} onChange={e => setVacinaAntirrabica(e.target.value)}> Antirrabica </label> <input className="input5" type="checkbox" /></div>
                        </div>    
                    </div>
                </div>
                <div className="botao"> <button className="button1"> <img src="/assets/images/vector.svg" alt=""/> Cadastrar Pet </button></div>
            </div>
        </Container>
    )
}