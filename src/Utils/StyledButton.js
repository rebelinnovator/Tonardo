import React from 'react'
import styled from 'styled-components'

export const StyledButtonDiv = styled.div`
    background-color:${({ theme }) => theme.bg100};
    color:${({ theme }) => theme.text10};
    border-radius:3px;
    border:1px solid ${({ theme }) => theme.text10};
    padding:10px;
    margin:5px;
    :hover{
        background-color:${({ theme }) => theme.bg101};
        color:${({ theme }) => theme.bg100};
        cursor:pointer;
    }
`