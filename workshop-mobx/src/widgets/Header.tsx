import React, { useState } from 'react'
import styled from 'styled-components'
import navbar from '../store/navbar'
import { observer } from 'mobx-react-lite'


const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;

`

const Button = styled.button`
    color: black;
    background: none;
    border: none;
    border: 1px solid black;
    padding: 10px 100px;
    border-radius: 5px;
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
`


const Header: React.FC = observer(() => {
    const active = navbar.part;

    function changeNavbar(part:string){
        navbar.changePart(part);
    }

    return (
        <Container>
            <Button onClick={() => changeNavbar('head')} style={active === 'head' ? {background: 'black', color: 'white'} : {}}>голова</Button>
            <Button onClick={() => changeNavbar('body')} style={active === 'body' ? {background: 'black', color: 'white'} : {}}>тело</Button>
            <Button onClick={() => changeNavbar('legs')} style={active === 'legs' ? {background: 'black', color: 'white'} : {}}>ноги</Button>
            <Button onClick={() => changeNavbar('arms')} style={active === 'arms' ? {background: 'black', color: 'white'} : {}}>руки</Button>
        </Container>
    )
})

export default Header
