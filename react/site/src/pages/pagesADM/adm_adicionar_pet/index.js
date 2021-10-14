import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';


export default function Addpet(){
    return(
        <Container>
            <Cabecalho/>
            <div className="container">
                <div className="box">
                    <div className="box-esq">
                        <div className="imgs">
                        <div className="quadrado"> <input type="image" src="/assets/images/addimg1.svg" alt="" width="20" height="20"/> </div> 
                        <div> <img className="addimg" src="/assets/images/image71.svg" alt=""/> </div>
                        </div>
                        <div className="inputs"> <input className="input1"  type="text" placeholder="Adicionar fotos"/> <input className="input1"  type="text" placeholder="Digite o Nome do Pet" /></div>
                        <div className="inputs"> <select className="select2" name="select"> <option value="valor1">Selecione o Sexo</option> </select>  <input className="input2"  type="text" placeholder="Nascimento"/> <select className="select2" name="select"> <option value="valor1">Selecione o Porte</option> </select></div>
                        <div className="inputs"> <input className="input3" type="text" placeholder="Nascimento"/> <select className="select3" name="select"> <option value="valor1">Espécie</option> </select></div>
                        <div className="inputs"> <select className="select4" name="select"> <option value="valor1">Raça</option> </select></div>
                        <div className="texta"> Descrição do pet <textarea></textarea> </div>
                    </div>
                    <div className="box-dir">
                        <div div className="saudepet"> SAÚDE </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS CANINAS</div>
                            <div className="checkvcn"> <label className="label1"> V8 </label> <input className="input5" type="checkbox" /> </div>
                            <div className="checkvcn"> <label className="label1">  V10 </label> <input className="input5" type="checkbox"/></div>
                        </div>
                        <div className="boxvacina">
                            <div className="tipopet"> VACINAS FELINAS </div>
                            <div className="checkvcn"> <label className="label1"> V3 </label> <input className="input5" type="checkbox" /></div>
                            <div className="checkvcn"> <label className="label1"> V4 </label> <input className="input5" type="checkbox" /></div>
                            <div className="checkvcn"> <label className="label1"> V5 </label> <input className="input5" type="checkbox" /></div>
                        </div>
                        <div className="check">
                            <div className="checkvcn2"> <label> Castrado </label> <input className="input5" type="checkbox" /></div>
                            <div className="checkvcn2"> <label> Antirrabica </label> <input className="input5" type="checkbox" /></div>
                        </div>    
                    </div>
                </div>
                <div className="botao"> <button className="button1"> <img src="/assets/images/vector.svg" alt=""/> Cadastrar Pet </button></div>
            </div>
        </Container>
    )
}


