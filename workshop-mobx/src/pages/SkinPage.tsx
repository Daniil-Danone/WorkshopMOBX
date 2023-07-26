import React from 'react'
import Header from '../widgets/Header';
import Skin from '../entities/Skin';
import Navbar from '../widgets/Navbar';
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px
`


const SkinPage: React.FC = () => {
  return (
    <>
        <Header/>
        <Content>
            <Skin/>
            <Navbar/>
        </Content>
    </>
  )
}

export default SkinPage;
