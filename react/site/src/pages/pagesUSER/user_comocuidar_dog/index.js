

 import Cabecalho from '../../../components/comun/cabecalhoUSU/index'
 import Roda from '../../../components/comun/rodape'
 import CuidarPet from '../../../components/comun/cuidarpet/index.js'

 export default function ComoCuidarDog(){
     
     const TituloGeral = "COMO CUIDAR DO MEU CACHORRINHO"
     const imgpet = "/assets/images/comoCUIDOG.svg"
     const recadinhoGeral = "Adotou um cachorrinho e não sabe o que fazer para ser o dono perfeito? fique atento as dicas que daremos a seguir!! "
     const tituloGeral1 = "1- Adaptação do cachorro"
     const descGeral1 = "Antes de receber o novo cachorrinho na sua casa, prepare um lugvar quente e confortável para o mesmo.  Para que o cãozinho não estranhe muito sua casa, se puder coloque objetos com o cheiro do lugar que ele estava anteriormente, será mais fácil para o mesmo se adaptar. Se o pet for um filhote tente colocar um relógio em um tecido, o tic-tac do relógio irá imitar o coração de sua mãe, deixando-o mais calmo."
     const tituloGeral2 = "2- Cuidado com a alimentação"
     const descGeral2 = "Evite dar restos de comida para o seu cão, pois só a ração tem os nutrientes em que ele precisa em uma dosagem equilibrada.  Para saber a quantidade certa a dar ao seu cachorro verifique na embalagem (aliás a ração deve ser específica para idade e tamanho seu seu pet Deixe sempre água para o seu cachorro e longe do sol, se possível troque-a duas vezes ao dias, para que o petzinho possa beber sempre uma águinha fresca"
     const tituloGeral3 = "3- Caminha"
     const descGeral3 = "Certifique-se de deixar a caminha do seu pet em uma área coberta, onde não tenha contato com a chuva, mesmo que a casinha dele tenha telhado."
     const bGeral = "" 
     const descGeral32 = ""
     const pGeral = ""
     const tituloGeral4 = "4- Banho / higiene"
     const descGeral4 = "Escove os pelos do seu cachorro diariamente. Nos casos dos cães de pelos longos, considere tosá-los, principalmente no verão. Dê banhos apenas quando ele estiver sujo, pois banho em excesso pode ressecar sua pele e pelagem. Use sempre produtos próprios para cães, de preferência sem cheiro ou com cheiro suave, pois o odor forte incomoda e prejudica o faro dos peludos."
     const tituloGeral5 = "5- Treine seu cãodas"
     const descGeral5 = "Jamais tente treinar seu cão usando violência, isso só o tornará agressivo. No mercado há manuais que mostram como educar seu cão. Comprar um desses e seguir as dicas, pode ser excelente para a convivência do cão com você e sua família."
     const tituloGeral6 = "6- Castre seu pet"
     const descGeral6 = "Uma ninhada gera de 6 a 10 cachorros, em média. O que você pretende fazer com todos esses filhotes? Para evitar abandono e maus-tratos na rua, castre sua cadelinha! Além de evitar a gravidez indesejada, a castração evita a gravidez psicológica e reduz os riscos de alguns tumores. Nos machos, ela evita fugas, demarcação de território (ou seja, xixi nos seus móveis), tumores e agressividade por excitação sexual."


    return(
         <div className='container'>
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
        </div>
     )
 }