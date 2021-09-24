import styled  from "styled-components";

export const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;


 .box{
     width: 10em;
     text-align: center;

     background-color: #e0e0e0;
     border-radius: 8px;
 }

.imagemPET{
    height: 8em;
    width: 10em;
}

.NomePET{
padding: 0px 10px 14px 10px;
}

.sex{
    display: flex;
    justify-content: center;

    padding: 2px;
}

.info-sex{
  padding-right: 8px;
}

.img-sex{
    

    height:18px;
    width: 10px;
}

.port{
    display: flex;
    justify-content: center;
}

.info-port{
  padding: 8px;
  border-color: #e0e0e0;
}

`