import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDocumentTitle } from '../utils/setDocumentTitle'

export default function PageError() {
    const history = useHistory()
    const [documentTitle] = useDocumentTitle("404 Page")
    useEffect(() => {
        setTimeout(() => {
            history.goBack();
        },2000)
    },[history])
    return (
        <Container sx={{display:"block", textAlign:"center"}}>
            <h1>page not found</h1>
            <p>redirecting to main page</p>
        </Container>
    )
}
