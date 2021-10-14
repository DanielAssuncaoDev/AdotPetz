import { Container, Conteudo } from './styled';
// import cabecalhoUSU from '../../../components/comun/cabecalhoUSU';

import CabecalhoADM from '../../../components/comun/cabecalhoUSU';

import Rodape from '../../../components/comun/rodape';

export default function FAQ(){

  return(

        <Container>
                <CabecalhoADM />
           
    <Conteudo> 
                                
                    <h2> <div className="titulo"> FAQ (Perguntas frequentes)</div></h2>

                        <h2><div className="pergunta1">O site cobra alguma taxa de adoção?</div></h2>

                                <div className="pergunta1">
              Não! Não cobramos nenhuma taxa de adoção. Só cobramos responsabilidade daquele quem vai adotar, apenas isso.</div>

              <h2><div className="pergunta2">Quero adotar um animal, como faço isso?</div></h2>

                        <div className="pergunta2">
                        Que bom que você quer isso. É bem mais simples do que parece.
                        Primeiramente, vá para a página inicial. Lá terá uma caixa de
                        “perguntas” onde você poderá selecionar suas respostas conforme o que
                        você deseja. Ali acontecerá uma consulta e retornará os melhores animais
                        disponíveis no nosso site que combine com o perfil que você escolheu.
                        Clicando na foto dos animais você poderá ter acesso a mais informações
                        detalhadas sobre o mesmo. Na mesma página das informaações detalhadas
                        terá um botão chamado “QUERO ADOTAR”, se for mesmo da sua escolha adotar
                        aquele pet aperte nesse botão e responda o formulário de adoção
                        (certifique-se de responder cada pergunta corretamente). Após a
                        confirmação do pedido de adoção aguarde até que algum responável pelo
                        animal da ONG entre em contato com você.</div> 

                        <h2><div className="pergunta3">
                        Até quanto tempo o pedido de adoção fica em solicitação?</div></h2>

                        <div className="pergunta3">
                            Geralmente, os pedidos demoram de 5 a 10 dias a serem verificados. Pois
                            precisamos ter a certeza de que a pessoa de quem irá cuidar do pet tem
                            condições mentais e financeiras, e de que fará isso com muita
                            responsabilidade, amor e carinho. Caso aconteça de demorar mais tempo
                            que isso, você pode mandar um email para: doaacaodepets@outlook.com, ou
                            até mesmo ligar para (11) 5555-5555, informando seu nome, RG e CEP</div>

                            <h2><div className="pergunta4">
                            Tenho cachorros ou gatos para vender. Posso divulga-los aqui? </div></h2>

                              <div className="pergunta4">
                               NÃO! Amigo não se compra, por isso desenvolvemos esse site de adoção.
                              </div> 

    </Conteudo>

          <Rodape />
        </Container>

    );
}
