import React from 'react'
import {
    CircularProgress,
    Container,
} from '@material-ui/core';

function Loading({condition}) {

    return (
        <Container style={{textAlign: 'center'}}>
           { condition && <CircularProgress style={{padding: 20,}}/>}
        </Container>
    )
}

export default Loading

