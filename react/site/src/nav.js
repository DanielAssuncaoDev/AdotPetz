import {Link} from 'react-router-dom' 

export default function Nav(){

    return(
      <div className="ContainerNav">
  
        <div  className="NavUser">
          <h2>
            Frames Usuário
          </h2>


          <nav>
            <Link to="/home">
              <span>Home</span>
            </Link>

            <Link to="/sugestoesadocao">
              <span>Sugestão Adoção</span>
            </Link>

            <Link to="/login">
              <span> Login </span>
            </Link>

            <Link to="/quemsomosnos">
              <span> Quem somos nós </span>
            </Link>

            <Link to="/minhaconta">
              <span> Tela Usuário </span>
            </Link>

            <Link to="/dicascuidados">
              <span> Dicas e Cuidados </span>
            </Link>

            <Link to="/comocuidarcat">
              <span>Como Cuidar do Cat</span>
            </Link>

            <Link to="/comocuidardog">
              <span>Como Cuidar do Dog</span>
            </Link>
          </nav>

        </div>
  

        <div className="NavADM">

          <h2>
            Telas ADM
          </h2>

          <nav>
            <Link to="/admin/solicitacoes">
              <span> Solicitações de Adoção </span>
            </Link>

            <Link to="/admin/formadocao">
              <span> Formulário de Adoção ADM </span>
            </Link>

            <Link to="/admin/home">
              <span> Home ADM </span>
            </Link>

            <Link to="/admin/login">
              <span> Login ADM </span>
            </Link>
          </nav>

        </div>

       

      </div>
    );
}