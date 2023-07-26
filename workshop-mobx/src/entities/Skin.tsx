import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 800px;
`


const Head = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid black;
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
`

const Body = styled.div`
    width: 100px;
    height: 200px;
    border: 1px solid black;
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
`

const Skin: React.FC = () => {
  return (
    <Container>
        <Head/>
        <Arms>
            <Arm/>
            <Body/>
            <Arm/>
        </Arms>
        <Legs>
            <Leg/>
            <Leg/>
        </Legs>
    </Container>
  )
}

export default Skin