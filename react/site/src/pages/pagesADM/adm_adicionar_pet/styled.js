import styled from "styled-components"

export const Container = styled.div`

.container{
    display: flex;
    flex-direction: column;
    background-color: #8E8E8E;
    height: 90vh;
    padding: 6em 4em 0em 8em;
}

.box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #DDDDDD;
    height: 30em;
    width: 80vw;
    padding: 2em;
    border-radius: 8px;
}

.box-esq{
    display: flex;
    flex-direction: column;
    width: 60em;
}

.box-dir{
    display: flex;
    flex-direction: column;
    background: #FAD41BE5;
    width: 40vw;
    height: 26.24em;
    padding: 2em 2em 1.5em 2em;
}

.imgs{
    display: flex;
    flex-direction: row;
    width: 8em;
    height: 8em;
    overflow: hidden;
    margin-bottom: 5px;
    margin-right: 5px;
}

.input-file{
    font-size: 18px;
        color: #615858;
        margin-right: 1em;
        font-weight: 800;
}

.Load-img{
    display: flex;
    margin-bottom: 5px;
    margin-top: 5px;
}

.inputs{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
}

.input-addRaca{
    width: 100%;

        input {
            width: 100%
        }

        label {
            background: none;
        }
}

.texta{
    font-weight: 700;
}

.saudepet{
    font-weight: 700;
    padding-bottom: 1.5em;
}

.boxvacina{
    display: flex;
    flex-direction: column;
    background: #DDDDDDF2;
    padding: 1em 1em 1.3em 1em;
    margin-bottom: 1em;
    border-radius: 5px;
}

.tipopet{
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
}

.checkvcn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #C4C4C4;
    border-radius: 5px;
    margin-top: 5px;
    padding: 3px;
}

.check{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.checkvcn2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #C4C4C4;
    border-radius: 5px;
    margin-top: 5px;
    padding: 3px;
    width: 10em;
    height: 1.4em;
}

.botao{
    display: flex;
    justify-content: flex-end;
    width: 81.5%;
    margin-left: 8.5em;
}

select{
    font-size: 14px;
    font-weight: 400;
    background: #C4C4C4;
    border: none;
}

select.select2{
    width: 32%;
    height: 25px;
    margin-bottom: 5px;
    margin-right: 10px;
}

select.select3{
    width: 48.3%;
    height: 25px;
    margin-bottom: 5px;
    margin-right: 10px;
}

select.select4{
    width: 98.5%;
    height: 25px;
    margin-bottom: 5px;
}

input{
    font-size: 14px;
    font-weight: 400;
    background: #C4C4C4;
    border: none;
}

input.input1{
    width: 98.5%;
    height: 25px;
    margin-bottom: 5px;
}

input.input2{
    width: 32%;
    height: 25px;
    margin-bottom: 5px;
    margin-right: 10px;
}

input.input3{
    width: 48.3%;
    height: 25px;
    margin-bottom: 5px;
}

input.input5{
    margin-right: 5px;
}

input.bdimg{
    
}

textarea{
    background: #0000002B;
    border: none;
    resize: none;
    height: 9em;
    width: 97%;
    margin-top: 5px;
}

button:hover{
    cursor: pointer;
}

button.button1{
    border: none;
    border-radius: 5px;
    background: #FAD41B;
    height: 2em;
    width: 11em;
    font-size: 12px;
    margin-top: 3em;
}

button.vltr{
    display: flex;
    border: none;
    border-radius: 100%;
    background: #000;
    width: 3em;
    height: 2.4em;
    margin-bottom: 1em;
}

button.Loadimg{
    border: none;
    border-radius: 10px;
    background-color: #FAD41B;
    /* box-shadow: 5px 5px 10px black; */
    height: 20px;
    width: 12em;
}

label{
    background: #C4C4C4;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
}

img.addimg{
    height: 114px;
    width: 128px;
}

img.vlt{
    height: 28px;
    width: 30px;
}

@media (max-width: 1200px){
    .container{
        height: 70vh;
    }
    
}

`