  import {Container} from './styled.js' 

 import Cabecalho from '../../../components/cabecalhoUSU/index'
 import Roda from '../../../components/rodape'
 import CuidarPet from '../../../components/cuidarpet/index.js'

 export default function comocuidarCat(){
     
     const TituloGeral = "COMO CUIDAR DO MEU GATINHO"
     const imgpet = "/assets/images/image74.jpg"
     const recadinhoGeral = "Adotou um gatinho e não sabe o que fazer para ser o dono perfeito? fique atento as dicas que daremos a seguir!!"
     const tituloGeral1 = "1- Cuidado com a alimentação"
     const descGeral1 = "Lembre-se nunca dê ração demais para o seu gatinho. A obesidade é um dos maiores problemas dos felinos, então seja bem cuidadoso com a quantidade de ração que dará para o seu pet. Compre rações de boa qualidade e que sejam específicas para a idade do seu gato, isso é de extrema importância."
     const tituloGeral2 = "2- Providencie uma caminha confortável"
     const descGeral2 = "O lugar para o seu gatinho descansar é super importante também. Providencie uma cama confortável para ele, sem petshops existem diversas opções. Mas garanto que até mesmo uma caixa de papelão com um cobertorzinho dentro já seria o suficiente para deixá-lo aconchegado e satisfeito."
     const tituloGeral3 = "3- Banho"
     const descGeral3 = "Normalmente os gatos fazem sua própria higiene, sendo assim eles geralmente não precisam de banhos com muita frequência. A não ser que por algum motivo o seu gato apresente problemas de pele ou de  pelos. Em casos desse tipo, o nosso conselho é que você leve-o ao veterinário para que ele possa ser tratado de forma correta e específica."
     const bGeral = " OBS.:" 
     const descGeral32 = "Para evitar que pelos caem por todo canto da casa, escove os pelos do seu gato com frequência, aliás alguns deles adoram ser escovado."
     const pGeral = "Não deixe a ração do seu gato exposta, caso deixe ele perderá o aroma e a crocância. Então alimente seu pet em pequenas porçês várias vezes ao dia. E claro, não esqueça da água. Seria bom se ela fosse trocada duas vezes ao dia para que o pet beba sempre a água fresquinha."
     const tituloGeral4 = "4- Adestre seu gato"
     const descGeral4 = "Animais não são nem um pouco fácies de serem adestrados. Mas sempre que seu petzinho realizar alguma ação que te incomode, não tente repreendê-lo usando violência!!!! Você pode evitar esses comportamentos indesejados utilizando um espirrando água com um borrifador. Mas de maneira alguma, NUNCA bata no seu gato, violência não o fará associar ao que ele acabou de fazer. Podendo até mesmo dificultar a relação entre vocês."
     const tituloGeral5 = "5- Janelas teladas"
     const descGeral5 = "Se possível, instale telas em TODAS as janelas. Gatos são felinos muito ágeis e espertos, mas assim como nós eles também se distraem! Já ocorreram vários casos de gatos cairem da janela de apertamentos e se machucarem feio ou até mesmo morrerem. Então, sabendo disso faça o que puder para evitar que o mesmo ocorra com o seu gatinho e  instale telas em todas as janelas."
     const tituloGeral6 = "6- Saúde"
     const descGeral6 = "Vacine seu gatinho anuelmente. Dê para o mesmo vermífugos e antipugas ao menos a cada 5 meses. Fique sempre atento ao apetite, urina, fezes e até mesmo no comportamento no seu pet. Caso note alguma alteração, leve-o ao veterinário para verificar se há algo de errado. Faça isso anualmente."


    return(
         <Container>
            <Cabecalho/>
            <CuidarPet
            TituloGeral={TituloGeral}
            imgpet={imgpet}
            recadinhoGeral={recadinhoGeral}
            tituloGeral1={tituloGeral1}
            descGeral1={descGeral1}
            pGeral={pGeral}
            tituloGeral2={tituloGeral2}
            descGeral2={descGeral2}
            tituloGeral3={tituloGeral3}
            descGeral3={descGeral3}
            bGeral={bGeral}
            descGeral32={descGeral32}
            tituloGeral4={tituloGeral4}
            descGeral4={descGeral4}
            tituloGeral5={tituloGeral5}
            descGeral5={descGeral5}
            tituloGeral6={tituloGeral6}
            descGeral6={descGeral6}

            />
         <Roda/>
        </Container>
     )
 }