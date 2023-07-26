import React from 'react'
import styled from 'styled-components'


const Head = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
`

const Body = styled.div`
    
`

const Arms = styled.div`
`

const Legs = styled.div`
`

const Skin: React.FC = () => {
  return (
    <>
        <Head/>
        <Arms/>
        <Body/>
        <Legs/>
    </>
  )
}

export default Skin