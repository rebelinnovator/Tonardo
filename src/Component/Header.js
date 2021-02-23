import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
import { useWeb3React } from '@web3-react/core'

import {Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarBrand,NavbarText,Dropdown} from 'reactstrap'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components'

import {StyledButtonDiv} from '../Utils/StyledButton'
import { injected, bsc, walletconnect } from '../connectors'

import HeaderConnectModal from './HeaderConnectModal'
import HeaderDisconnectModal from './HeaderDisconnectModal'


// const StyledHamburger = styled.HamburgerMenu`
//     background-color:${({ theme }) => theme.text1};
// `
const MenuItemDiv = styled.div`
    margin:0px 10px 0px 10px;
    @media (max-width: 768px) {
        margin:0px 0px 10px 10px
    }
`
const Header = () =>{
    const [showCollapse, setShowCollapse] = useState(true);
    const [showConnectDlg,setShowConnectDlg] = useState(false);
    const [showDisConnectDlg,setShowDisConnectDlg] = useState(false);

    const biggerThan769 = useMediaPredicate("(min-width: 769px)");
    const { account, activate, deactivate } = useWeb3React()

    useEffect(()=>{
        if(!biggerThan769)
        {
            setShowCollapse(false)
        }
    },[biggerThan769])

    useEffect(()=>{
        
        console.log("account",account)
    },[account])
    const toggleNav = () => {
        // setIsOpen(!isOpen)
        console.log(showCollapse)
        setShowCollapse(!showCollapse)
    }
    /**
     * Web3 Integration
     */
    const ConnectWallet = () =>{
        /*
        if(!account){
            activate(injected)
            .catch(error=>{
                console.log("error:",error)
            })
            .finally(e=>{
                console.log("finaly",e)
            })
        }else{
            deactivate()
        }
        */
       if(!account){
        setShowConnectDlg(true)
       }else
       {
        setShowDisConnectDlg(true)
       }
       
        
    }
    return(
        <div className="MyNavBar">
            <div className="MyNavBarLogo">
                <a href="/" style={{width:'200px',height:'100%'}}>
                    
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 40" class="logo"><path fill="#94febf" fill-rule="evenodd" d="M29.4,8.6A11.5,11.5,0,0,1,39.9,19.4,17.1,17.1,0,0,0,8.5,10.5,11.5,11.5,0,0,1,19.3,0a17.2,17.2,0,0,0-8.9,31.4A11.5,11.5,0,0,1,0,20.6a17.1,17.1,0,0,0,31.3,9.1A11.4,11.4,0,0,1,20.6,40,17.1,17.1,0,0,0,29.4,8.6ZM19.9,27.2a6.9,6.9,0,0,1-5-2.1,7.1,7.1,0,1,1,5,2.1Zm36.6-9.7v7.4c0,1.3.5,1.6,1.8,1.6a4.8,4.8,0,0,0,1.8-.3v2.9a6.4,6.4,0,0,1-2.4.5c-3,0-4.8-1.9-4.8-5V17.5H50.4V14.4h2.5V9.9h3.6v4.5h3.6v3.1ZM77,21.9c0,5-2.5,7.7-7,7.7s-7.1-2.7-7.1-7.7,2.5-7.7,7.1-7.7S77,16.9,77,21.9Zm-3.6,0c0-4-1.3-4.8-3.4-4.8s-3.5.8-3.5,4.8,1.3,4.7,3.5,4.7S73.4,25.8,73.4,21.9ZM88,14.1v3.2a11.5,11.5,0,0,0-3.8.5V29.4H80.6V15.7A20.4,20.4,0,0,1,88,14.1Zm16.9,6.3v9h-3.6V20.1c0-1.4-.2-2.8-3.5-2.8a12,12,0,0,0-2.8.3V29.4H91.4V15.8a15,15,0,0,1,6.9-1.7C102.4,14.1,104.9,16.5,104.9,20.4Zm16.2.1v4.1c0,2.4-1.6,5-6.3,5s-6.4-2.6-6.4-5.1.5-4.7,6.5-4.7a11,11,0,0,1,2.6.2c0-1.7-.8-2.9-3.2-2.9a11.2,11.2,0,0,0-4.4.8V15a12.5,12.5,0,0,1,4.6-.9C118.8,14.1,121.1,16.4,121.1,20.5Zm-3.6,1.7h-2.1c-2.5,0-3.4.7-3.4,1.9s.9,2.4,2.8,2.4,2.7-.9,2.7-2.3Zm13.9-8.1,2.5.3V8.7h3.6V24.6c0,2.4-1.7,5-6.4,5-2,0-6.7-.8-6.7-7.9C124.4,16.8,126.9,14.1,131.4,14.1Zm-.3,12.4c1.6,0,2.8-.4,2.8-1.6V17.2l-2.4-.2c-2.1,0-3.5,1-3.5,4.5S128.8,26.5,131.1,26.5ZM155,21.9c0,5-2.5,7.7-7.1,7.7s-7.1-2.7-7.1-7.7,2.5-7.7,7.1-7.7S155,16.9,155,21.9Zm-3.6,0c0-4-1.4-4.8-3.5-4.8s-3.5.8-3.5,4.8,1.4,4.7,3.5,4.7S151.4,25.8,151.4,21.9Z"></path></svg></a>
                <div className="MyNavBarCollpaseBtn" onClick={toggleNav}>
                    <HamburgerMenu
                        style={{backgroundColor:'white'}}
                        isOpen={showCollapse}
                        menuClicked={toggleNav}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.2}
                    />
                </div>
                
            </div>
            {biggerThan769 && (
                <div className="MyNavBarMenu">
                    <div className="MyNavBarStart">
                        
                        <Link to = "/airdrop" className="nav-link">
                            <MenuItemDiv>
                                AirDrop
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Mining
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Voting
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Compliance
                            </MenuItemDiv>
                        </Link>
                        <Link to = "/airdrop" className="nav-link">
                            <MenuItemDiv>
                                Stats
                            </MenuItemDiv>
                        </Link>
                        <Link to = "/airdrop" className="nav-link">
                            <MenuItemDiv>
                                Info
                            </MenuItemDiv>
                        </Link>
                        
                    </div>
                    <div className="MyNavBarEnd">
                        <StyledButtonDiv>
                            Settings
                        </StyledButtonDiv>
                        <StyledButtonDiv onClick={ConnectWallet}>
                            {account && (
                                <span>DisConnect</span>
                            )}
                            {!account && (
                                <span>Connect</span>
                            )}
                        </StyledButtonDiv>
                    </div>
                </div>
            )}
            {!biggerThan769 && showCollapse && (
                <div className="MyNavBarMenu">
                    <div className="MyNavBarStart">
                        
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                AirDrop
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                            <MenuItemDiv>
                                Mining
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Voting
                            </MenuItemDiv>
                        </Link>
                    
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Compliance
                            </MenuItemDiv>
                        </Link>
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Stats
                            </MenuItemDiv>
                        </Link>
                        <Link to = "/airdrop" className="nav-link">
                        <MenuItemDiv>
                                Info
                            </MenuItemDiv>
                        </Link>
                        
                    </div>
                    <div className="MyNavBarEnd">
                        <StyledButtonDiv>
                            Settings
                        </StyledButtonDiv>
                        <StyledButtonDiv onClick={ConnectWallet}>
                            {account && (
                                <span>DisConnect</span>
                            )}
                            {!account && (
                                <span>Connect</span>
                            )}
                            
                        </StyledButtonDiv>
                    </div>
                    
                </div>
            )}
            <HeaderConnectModal 
                isOpen={showConnectDlg} 
                onDismiss={()=>setShowConnectDlg(false)}
            />
            <HeaderDisconnectModal
                isOpen={showDisConnectDlg} 
                onDismiss={()=>setShowDisConnectDlg(false)}
            />
           
            {/* <Navbar light expand = "lg" className="MyNavBar">
                <NavbarBrand href="/"><h1><p className="P-Logo" style={{color:'var(--main-color)'}}>Logo</p></h1></NavbarBrand>
                <NavbarToggler onClick={toggleNav}></NavbarToggler>

                <Collapse isOpen = {showCollapse} navbar>
                    <Nav className = "ml-auto" navbar>
                        <NavItem>
                            <Link to = "/airdrop" className="nav-link">
                                <p className="P-Middle">AirDrop</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to = "/mining" className="nav-link">
                                <p className="P-Middle">Mining</p>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
           </Navbar> */}
           
        </div>
    )
}
export default Header