import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: row;  
        justify-content: center;

        padding: 2em;
    
    .more-images, .vaccines{
        display: flex;
        flex-direction: row;
    }

    .informations-box{
        background: #F5F5F5;
        border-radius: 10px;
        width: 600px;
        height: 380px;
        
        margin: 0em 1.5em;
    }
    .infopet, .box-saude-pet, .info-desc-pet {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .infopet{
        padding: 1.2em; 
    }
    .box-saude-pet{
        background: rgba(0, 0, 0, 0.02);
        padding: 1.2em; 
    }
    .info-desc-pet{
        background: rgba(0, 0, 0, 0.08);
        padding: 1.2em; 
    }

    .text-dog-castrated, .text-vaccines, .text-description{
        font-weight: lighter;
        font-size: .8em;
    }

    .title{
        font-size: .8em;
        margin: 0 .3em 0 -.4em;
    }
    .text-dog-castrated, .text-description{
        margin: .5em;
    }
    .text-dog-castrated, .vaccines, .text-description{
        margin-left: 1.8em;
    }

    .vaccines{
        align-items: center;
    }

    .Adopt-button button{
        width: 100%;
        height: 80px;
        background: #FAD41B;

        border-radius: 5px; 
        border: none;

        font-size: 1.2em;
        font-weight: bold;
        color: white;

        cursor: pointer;
        outline: none;

        transition: .5s;

        &:hover{
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .30);
            cursor: pointer;
        }

    }

`


export const BoxPet = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0em 4em 2.2em 1em;

background-color: #e0e0e0;
border-radius: 8px;

padding: 0 0 1em;

.imagemPET{
    width: 100%;
}  

 .imagemPET img {
    width: 100%;
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
    flex-direction: row;
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
    }

    .info-porte-s{
        border: 0.5px solid #101BC4 !important;
        color: #101BC4 !important;

    }

    @media (max-width: 800px){
    

       margin: 15px 5px;

       box-shadow: none;
    }
    @media (max-width: 400px){
     

     .img-pet img{
                width: 300px;
                
            }
    }
`;