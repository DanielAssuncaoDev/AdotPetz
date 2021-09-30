import styled from 'styled-components'

export const Container = styled.div`

.container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #8E8E8E;
    padding: 0em 2em;
    height: 92vh;
}

.box1{
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    background-color: #E5E5E5;
    padding: 3em;
    margin-top: 1em;
}

.imgadm{
    padding-right: 2em;
}

.box1-pt2{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2em;
    margin-top: 2em;
}

.itens{
    margin-top: 5px;
    font-size: 16px;
}

.botao{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.box2{
    display: flex;
    flex-wrap: row;
    justify-content: space-evenly;
    color: white;
    font-size: 15px;
}



.item1-bx2 img{
    margin-right: -30px;
    padding-top: 0.9em;
    width: 90px;
    height: 90px;
}

.item3-bx2 img{
    width: 100px;
    height: 100px;
}

 img.icon{
    margin-top: -5px;
    width: 25px;
    height: 27px;
}

.item2-bbx2 img{
    width: 100px;
    height: 100px;
}

.botao button{
    display: flex;
    flex-direction: row;
    padding-top: 1em;
    padding-left: 2em;
    border: none;
    border-radius: 8px;
    width: 7em;
    height: 3em;
    background-color: #F4DC5E;
}


.item1-bx2 button{
    display: flex;
    flex-direction: row;
    border-color: black;
    border-radius: 5px;
    border-width: 1px;
    width: 9em;
    height: 8em;
    background-color: #F4DC5E;
    margin-bottom: 10px;
    margin-left: -5px;
    
}

.item2-bbx2 button{
    display: flex;
    flex-direction: row;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    width: 9em;
    height: 8em;
    background-color: #FAF8EB;
    margin-bottom: 10px;
    margin-left: 20px;
}

.item3-bx2 button{
    display: flex;
    flex-direction: row;
    border-color: black;
    border-radius: 5px;
    border-width: 1px;
    width: 9em;
    height: 8em;
    background-color: #F4DC5E;
    margin-bottom: 10px;
    margin-left: 15px;
    
}

p{
    margin-left: 40px;
}

`