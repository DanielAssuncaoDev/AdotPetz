import {BoxFiltro, SelectRow, Select, Button} from './styled' 

export default function Filtro(){
    return(
        <BoxFiltro>
            <div className="TituloFiltro">
                <b> Encontre um novo amiguinho! </b>
            </div>

            <form className="FiltroBusca">
                <div className="Row1Form">
                    <SelectRow>
                        <option value="Porte">
                            Porte
                        </option>


                    </SelectRow>
            
                    <SelectRow>
                        <option value="Idade">
                            Idade
                        </option>


                    </SelectRow>
                </div>

                <div className="Row2Form">
                    <SelectRow>
                        <option value="Espécie">
                            Espécie
                        </option>


                    </SelectRow>
            
                    <SelectRow>
                        <option value="Sexo">
                            Sexo
                        </option>


                    </SelectRow>
                </div>

                <div className="Row3Form">
                    <Select>
                        <option value="Raça"> 
                            Raça
                        </option>
                    </Select>
                </div>

                <div className="ButtonForm">
                    <Button>
                        Procurar
                    </Button>
                </div>

            </form>
        </BoxFiltro>
    );
}