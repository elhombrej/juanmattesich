import React from 'react';
import {Button} from 'antd'
const LandingPage = () => {
    return (
        <div style={{
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>
            LandingPage
            </h1>
            <div>
                <Button href={'/home'}>
                    Ingresar
                </Button>
            </div>
        </div>
    )
}

export default LandingPage