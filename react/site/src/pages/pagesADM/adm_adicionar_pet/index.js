import Cabecalho from '../../../components/comun/cabecalhoADM'
import { Container } from './styled';


export default function Addpet(){
    return(
        <Container>
            <Cabecalho/>
            <div className="container">
                <div className="box">
                    <div className="box-esq">
                        <div className="addimgs"> <img src="/assets/images/image71.svg" alt=""/> <img src="/assets/images/image71.svg" alt=""/> </div>
                        <div className="inputs"> <input className="input1"  type="text" name="nome" value="Adicionar fotos"/> <input className="input1"  type="text" name="nome" value="Digite o Nome do Pet"/></div>
                        <div className="inputs"> <input className="input2" type="text" name="nome" value="Selecione o Sexo"/> <input className="input2"  type="text" name="nome" value="Nascimento"/> <input className="input2" type="text" name="nome" value="Selecione o Porte"/></div>
                        <div className="inputs"> <input className="input3" type="text" name="nome" value="Nascimento"/> <input className="input3"  type="text" name="nome" value="Espécie"/></div>
                        <div className="inputs"> <input className="input4"  type="text" name="nome" value="Raça" /></div>
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


