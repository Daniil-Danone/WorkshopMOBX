import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 1200px;
    margin: 0 auto;

`

const Button = styled.button`
    color: black;
    background: none;
    border: none;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 5px;
    transition: .3s ease-in-out;

    &:hover {
        background: black;
        color: white;
    }
`


const Header: React.FC = () => {
  return (
    <Container>
        <Button>головы</Button>
        <Button>ноги</Button>
        <Button>тело</Button>
        <Button>руки</Button>
    </Container>
  )
}

export default Header
