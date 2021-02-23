import React from 'react'
import styled from 'styled-components'

export const Row = styled.div`
    margin:1rem 0px 0px 0px;
`
export const Col = styled.div`

`
export const MainSection = styled.div`
    margin:3rem 0px 3rem 0px;
`
export const PanelContent = styled.div`
    margin:1.5rem;
`
export const PanelContentItem = styled.div`
    margin:0.2rem;
`
export const PanelContentSmallTitle = styled.div`
    margin-bottom:.7rem;
`
export const PanelContentSmallContent = styled.div`
    margin-bottom:1.5rem;
`
export const StyledButton = styled.div`
    background-color: ${({ theme }) => (theme.bg101 )};
    color:${({ theme }) => (theme.bg6 )};
    border-radius:3px;
    padding:.7rem;
    text-align:center;
    cursor:pointer;
    :hover{
        background-color: ${({ theme }) => (theme.bg103 )};
    }
`
export const InfoSpan = styled.span`
background-color: ${({ theme }) => (theme.bg101 )};
color:${({ theme }) => (theme.bg6 )};
cursor:pointer;
margin:.5rem;
font-size:12px;
padding:0rem .3rem;
border-radius:3px;
`
export const InfoSpan2 = styled.span`
    background-color: ${({ theme }) => (theme.bg100 )};
    border: 1px solid ${({ theme }) => (theme.bg101 )};
    color:${({ theme }) => (theme.text10 )};
    cursor:pointer;
    margin:.1rem 1rem .1rem 1rem;
    font-size:14px;
    font-weight:200;
    padding:0rem .3rem;
    border-radius:3px;
`
export const StyledInput = styled.input`
    padding: .7rem .7rem;
    width:94%;
    font-size:15px;
    background-color: ${({ theme }) => (theme.bg6 )};
    color:${({ theme }) => (theme.text1 )};
    border:1px solid ${({ theme }) => (theme.outLine1 )};
    border-radius:2px;
    margin-bottom: 1.5rem;

`
export const PanelContentSmallContentRow = styled.div`
    display: flex;
    justify-content:space-between;
`
export const PanelContentSmallContentCol = styled.div`
    width:45%;
`
export const DepositesDetailItem = styled.div`
    margin:0rem 0rem .5rem 0rem;
    background-color: ${({ theme , hasback }) => (hasback ? '#202020' :theme.bg6 )};
    padding:.3rem;
    width:100%;
`
export const DepositesDetailItemIndex = styled.span`
`
export const DepositesDetailItemContent = styled.span`
    color:${({ theme }) => (theme.bg101 )};
`
export const TabNavPart = styled.div`
    align-items: center;
    border-bottom: 0 solid #393939;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;

`
export const TabNavItemLeft= styled.li`
    

    background-color: ${({ theme,HasOutLine ,Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 1px 1px 0px;
    
    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    border-radius:5px 5px 0px 0px;
    transition: background-color .15s ease-in-out;
    ${({HasOutLine,Select,theme})=> HasOutLine && `
        color:${(Select ? theme.bg100 : theme.text10)};
    `}
    :first-child:after{
        position: absolute;
        background-color: ${({ theme,HasOutLine ,Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
        transform-origin: bottom left;
        width: 2rem;
        border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        border-width: 1px 1px 0px;
        top: -1px;
        bottom: 1px;
        transition: background-color .15s ease-in-out;

        content: "";
        right: -1.5rem;
        transform: skewX(
            20deg
        );
        border-left: none;
        border-top-right-radius: 5px;
        
    }
   
    :hover{
        ${({ theme , HasOutLine , MultiTab ,Select }) => !Select &&  `
            background-color:  ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
            cursor:pointer;

            :first-child:after{
                background-color: ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
                cursor:pointer;

            }
        `}
    }
   
`;
export const TabNavItemRight= styled.li`
    
    background-color: ${({ theme,HasOutLine ,Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 1px 1px 0px;

    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    border-radius:5px 5px 0px 5px;
    transition: background-color .15s ease-in-out;
    ${({HasOutLine,Select,theme})=> HasOutLine && `
        color:${(Select ? theme.bg100 : theme.text10)};
    `}
    :last-child:before{
        position: absolute;
        background-color: ${({ theme,HasOutLine ,Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
        transform-origin: bottom left;
        width: 2rem;
        border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        border-width: 1px 1px 0px;

        top: -1px;
        bottom: 1px;
        transition: background-color .15s ease-in-out;

        content: "";
        left: -1.5rem;
        transform: skewX(
            -20deg
        );
        border-right: none;
        border-top-left-radius: 5px;
    } 
  
    :hover{
        ${({ theme , HasOutLine , MultiTab ,Select }) => !Select &&  `
            background-color:  ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
            cursor:pointer;

            :last-child:before{
                background-color: ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
                cursor:pointer;
            }
        `}
    }
`
export const TabBottomPart = styled.div`
    display:flex;
    justify-content:space-between;
    ${({IsBottomRight})=>IsBottomRight && `
        float:right;
    `}
`
export const TabBottomNavPart = styled.div`
    background-color: ${({ theme }) => (theme.bg6)};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 0px 1px 1px 1px;

    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    ${({IsBottomRight})=>!IsBottomRight && `
        border-radius:0px 0px 0px 5px;
    `}
    ${({IsBottomRight})=>IsBottomRight && `
        border-radius:0px 0px 5px 0px;
    `}
    transition: background-color .15s ease-in-out;
    :after{
        position: absolute;
        background-color: ${({ theme}) => (theme.bg6)};
        
        width: 2.4rem;
        border: solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        top: -1px;
        transition: background-color .15s ease-in-out;
        ${({IsBottomRight})=>!IsBottomRight && `
            content: "";
            transform-origin: bottom left;
            right: -.5rem;
            transform: skewX(
                -20deg
            );
            border-bottom-right-radius: 5px;
            bottom:-2px;
            border-width: 1px 1px 1px 0px;

        `}
        ${({IsBottomRight})=>IsBottomRight && `
            content: "";
            transform-origin: bottom left;
            left: -.2rem;
            transform: skewX(
                20deg
            );
            border-bottom-left-radius: 5px;
            bottom:-1px;
            border-width: 1px 0px 1px 1px;

        `}
        
    }
`
export const TabContentPart = styled.div`
    
    border:1px solid ${({ theme , HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    ${({IsBottomRight})=>IsBottomRight && `
        border-radius:0px 0px 0px 5px;
    `}
    ${({IsBottomRight})=>!IsBottomRight && `
        border-radius:0px 0px 5px 0px;
    `}
    
    min-height:18rem;   
`
export const BottomStyledSpan = styled.div`
    padding:.3rem;
    font-size:11px;
    & a{
        color: ${({ theme }) => ( theme.bg101 )};
        cursor:pointer;
        :hover{
            color: ${({ theme }) => ( theme.bg105 )};
        }
    }
`
/**Modal */
export const ModalHeader=styled.div`
    color:${({ theme }) => ( theme.text1 )};
    font-size:20px;
    margin:1rem;
    text-align:center;

`
export const ModalContent = styled.div`
    color:${({ theme }) => ( theme.text1 )};
    font-size:15px;
    margin:1rem;
    text-align:center;
    
    text-align: -webkit-center;

`
/**Footer */
export const FooterDiv = styled.div`
    padding-top:3rem;
    padding-bottom:3rem;

    bottom: 0; 
    height: 40px; 
    @media (max-width: 768px) {
        display:flex;
        justify-content: center;
        
    }
    
`
export const FoorterInfoItem = styled.div`
    @media (min-width: 768px) {
        display:flex;
    }
    @media (max-width: 768px) {
        text-align:center;
    }

`
export const FooterIconPanel = styled.div`

`