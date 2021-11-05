import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function PageError() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        },2000)
    })
    return (
        <>
            <h1>404 Error</h1>
            <p>redirecting to main page</p>
        </>
    )
}
