import styled  from "styled-components";

// {}

export const BoxPet = styled.div`

width: 20%;
display: flex;
flex-direction: column;
align-items: center;

padding-bottom: 10px;

     text-align: center;

     background-color: #e0e0e0;
     border-radius: 8px;

.imagemPET{
    height: auto;
    width: 100%;

}   .imagemPET img {
        width: 100%;
        height: 100%;
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

`;