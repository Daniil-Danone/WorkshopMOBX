import React from 'react'
import styled from 'styled-components'

import navbar from '../store/navbar'
import head from '../store/head'
import body from '../store/body'
import arms from '../store/arms'
import legs from '../store/legs'
import { observer } from 'mobx-react-lite'

const Container = styled.div`
    width: 800px;
`


const Head = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        box-shadow: 1px 1px 4px gray;
    }
`

const Arms = styled.div`
    margin: 0 auto;
    width: 400px;
    display: flex;
    justify-content: space-between;
`

const Arm = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid black;
    cursor: pointer;
    transition: .3s ease;
    
    &:hover{
        box-shadow: 1px 1px 4px gray;
    }
`

const Body = styled.div`
    width: 100px;
    height: 200px;
    border: 1px solid black;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        box-shadow: 1px 1px 4px gray;
    }
`

const Legs = styled.div`
    margin: 0 auto;
    width: 100px;
    display: flex;
    justify-content: space-between;
`

const Leg = styled.div`
    width: 40px;
    height: 100px;
    border: 1px solid black;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        box-shadow: 1px 1px 4px gray;
    }
`

const Skin: React.FC = observer(() => {
    
    function changeNavbar(part:string){
        navbar.changePart(part);
    }

    return (
        <Container>
            <Head style={{background: head.color}} onClick={() => changeNavbar('head')}/>
            <Arms>
                <Arm style={{background: arms.color}}  onClick={() => changeNavbar('arms')}/>
                <Body style={{background: body.color}}  onClick={() => changeNavbar('body')}/>
                <Arm style={{background: arms.color}}  onClick={() => changeNavbar('arms')}/>
            </Arms>
            <Legs>
                <Leg style={{background: legs.color}}  onClick={() => changeNavbar('legs')}/>
                <Leg style={{background: legs.color}}  onClick={() => changeNavbar('legs')}/>
            </Legs>
        </Container>
    )
})

export default Skin