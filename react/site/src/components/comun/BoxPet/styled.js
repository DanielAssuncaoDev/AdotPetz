import styled  from "styled-components";

// {}

export const BoxPet = styled.div`

width: 20%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

//padding: 1em;
margin: 0em 4em 2.2em 1em;

background-color: #e0e0e0;
border-radius: 8px;

box-shadow: 0px 0px 20px 4px #888888;

//.conteudo-pet:hover{
   // display: flex;
  //  flex-direction: column;
 //   justify-content: center;
 //   text-align: center;
//
 //   width: 10em;
  //  transition: 2s;
//}

.imagemPET{
    //height: auto;
    width: 100%;

}  
 .imagemPET img {
    width: 100%;
    //height: auto;
    border-radius: 8px;

}

.NomePET{
    padding: 0px 10px 14px 10px;
}

.local, 
.porte div,
.info-sex{
    font-weight: 300;
    font-size: .8em;
}

.sex{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2px;
}

.info-sex{
  padding-right: 4px;
}

.img-sex{
    height:14px;
    width: 14px;

}   .img-sex img {
    width: 100%;
    height: 100%;
}

.porte{
    display: flex;
    justify-content: center;

    margin-top: 6px;

}   .porte div{
        width: 22px;
        height: 20px;
        margin: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 6px;
        border: 0.5px solid rgba(0, 0, 0, 0.29);
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5));
        color: rgba(0, 0, 0, 0.29);
    }

    .info-porte-s{
        border: 0.5px solid #101BC4 !important;
        color: #101BC4 !important;

    }

    button{
        padding: .6em 1em;
        margin: 1em 0em;
 
        color: #ffff;
        font-size: 12px;
        font-weight: 500;
        
        border: none;
        border-radius: 10px;
        background-color: #FAD41B;

        cursor: pointer;
    }

    button:hover{
        //background-color: #ffe152;
        transition: .8s;
        box-shadow: 8px 8px 10px 0px #888888;
    }

    @media (max-width: 800px){
       width: 40%;

       margin: 15px 5px;

       box-shadow: none;
    }
    @media (max-width: 375px){
     width: 470%;

        button{
        padding: .6em .6em;
        margin: 1em 0em;
        }
    }
`;