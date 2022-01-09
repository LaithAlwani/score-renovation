import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function PageError() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.goBack();
        },2000)
    })
    return (
        <Container sx={{display:"block", textAlign:"center"}}>
            <h1>page not found</h1>
            <p>redirecting to main page</p>
        </Container>
    )
}
