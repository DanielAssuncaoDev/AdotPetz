import styled from "styled-components"

export const Container = styled.div`

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8E8E8E;
    height: 90vh;
    padding-top: 3em;
    padding-bottom: 4em;
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
    height: 25.5em;
    padding: 2em 2em 1.5em 2em;
}

.addimgs{
    margin-right: 2em;
}

.inputs{
    margin-bottom: 5px;
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
    width: 79%;
}


input{
    font-size: 12px;
    font-weight: 400;
    background: #C4C4C4;
    border: none;
}

input.input1{
    width: 48.3%;
    height: 25px;
    margin-bottom: 5px;
}

input.input2{
    width: 32%;
    height: 25px;
    margin-bottom: 5px;
}

input.input3{
    width: 48.3%;
    height: 25px;
    margin-bottom: 5px;
}

input.input4{
    width: 97.2%;
    height: 25px;
    margin-bottom: 5px;
}

input.input5{
    margin-right: 5px;
}


textarea{
    background: #0000002B;
    border: none;
    resize: none;
    height: 9em;
    width: 97%;
    margin-top: 5px;
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

label{
    background: #C4C4C4;
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
}

`