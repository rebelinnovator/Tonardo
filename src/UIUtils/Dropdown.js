import React, { useState, useEffect,useRef } from "react";
import styled from 'styled-components'
const StyledDropDown = styled.div`
    position:relative;
`
const StyledDropDownDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 9999;
    
    top: 50px;
    position:absolute;
    border-radius:3px;
    border: 1px solid ${({theme}) => theme.bg101};
    
    background: ${({ theme }) => theme.bg6};    
    display: ${({ hide }) => (hide ? 'block' : 'none')};
    width:100%;
`
const StyledDropDownHeader = styled.div`
    color:white;
    border:1px solid ${({theme,hide}) => hide?theme.bg101: theme.outLine1};
    padding:.7rem;
    border-radius:3px;
`
const StyledDropDownItemDiv = styled.div`
    padding:.7rem;
    
    ${({isSelect,theme})=>!isSelect && `
        :hover{
            background-color:${theme.bg102};
        }
    `}
    ${({isSelect,theme})=>isSelect && `
        
            background-color:${theme.bg101};
            color:${theme.bg6};
        
    `}
    
`
const DropDownMenu = ({list}) =>{
    const [hide,setHide] = useState(false)
    const [current,setCurrent] = useState("")
    const dropMenuRef = useRef(null);


    useEffect(()=>{
        if(Array.isArray(list))
        {
            setCurrent(list[0])//tempo
        }
    },[list])
    useEffect(() => {
        if (hide) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hide]);
    const handleClickOutside = (e) => {
        if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
          return;
        }
        setHide(false);
      };

    return(
        <StyledDropDown>
            <StyledDropDownHeader hide={hide} onClick={() => setHide(!hide)}>
                {current.name}
            </StyledDropDownHeader>
            <StyledDropDownDiv ref={dropMenuRef} hide={hide}>
                {list.map((item,index)=>{
                    return(
                        <StyledDropDownItemDiv isSelect={current.val == item.val} onClick={ () => 
                            {
                                setHide(false)
                                setCurrent(item)
                            }
                        }>
                            {item.name}
                        </StyledDropDownItemDiv>
                    )
                })}
               
            </StyledDropDownDiv>
        </StyledDropDown>
    )
}
export default DropDownMenu