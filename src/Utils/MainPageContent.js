import React from 'react'
import styled from 'styled-components'

export const Article = styled.div`
    margin-bottom:2rem;
    padding: 0;
    border: 1px solid #393939;
    overflow: hidden;
    border-radius:4px;
`
export const ArticleContent = styled.div`
    align-items: center;
    padding-top:0;
    display: flex;
`
export const ArticleLeft = styled.div`
    position: relative;
    align-self: stretch;
    display: inline-flex;
    align-items: center;
    margin-right: 1rem;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    :after{
        content: "";
        position: absolute;
        transform: skewX(
        20deg
        );
        background-color: #1d1d1d;
        border-right: 1px solid #393939;
        top: -1px;
        bottom: -1px;
        border-top-right-radius: 2px;
        left: -50%;
        right: -.2rem;
    }
`
export const ArticleText = styled.div`
    padding: .5rem 2rem .5rem .5rem;
    text-align: center;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    white-space: pre-wrap;
`
export const MainPageContent = styled.div`
    
    @media (min-width: 768px) {
        display: flex;    
        justify-content:space-between;
    }
`
export const MainPageContentItemDiv = styled.div`
    width:45%;
    margin-bottom:2rem;
    @media (max-width: 768px) {
        width:100%;
    }
`
