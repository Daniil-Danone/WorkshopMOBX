import React from 'react'
import styled from 'styled-components'


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
