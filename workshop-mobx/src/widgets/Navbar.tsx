import React, { useState } from 'react'
import head from '../store/head'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import navbar from '../store/navbar'
import body from '../store/body'
import arms from '../store/arms'
import legs from '../store/legs'


const Button = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer
`

const Navbar: React.FC = observer(() => {
    const part = navbar.part;

    function setColor(color: string) {
        if (part === 'head'){
            head.setColor(color);
        }

        if (part === 'body'){
            body.setColor(color);
        }

        if (part === 'arms'){
            arms.setColor(color);
        }

        if (part === 'legs'){
            legs.setColor(color);
        }
    }

    return (
        <>
            <Button style={{background: 'red'}} onClick={() => setColor('red')}/>
            <Button style={{background: 'blue'}} onClick={() => setColor('blue')}/>
            <Button style={{background: 'pink'}} onClick={() => setColor('pink')}/>
            <Button style={{background: 'orange'}} onClick={() => setColor('orange')}/>
            <Button style={{background: 'lightgreen'}} onClick={() => setColor('lightgreen')}/>
        </>
    )
})

export default Navbar