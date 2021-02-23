import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import { injected, bsc, walletconnect } from '../connectors'

import Modal from '../UIUtils/Modal'
import {
    ModalHeader,
    ModalContent,
    StyledButton
} from '../Utils/Utils'
const HeaderConnectModal = ({isOpen,onDismiss}) =>{
    const { account, activate, deactivate } = useWeb3React()
    const ConnectWallet = () =>{
        activate(injected)
        onDismiss()
    }
    return(
        <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={null} maxHeight={90}>
            <div style={{width:'100%'}}>
            <ModalHeader>
                <span>
                    Your Wallet
                </span>
            </ModalHeader>
            <ModalContent>
                <span>
                    Please select your Web3 compatible wallet:
                </span>
                <StyledButton style={{
                    width:'100px',
                    height:'100px',
                    marginTop:'1rem',
                    backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIzLjYgMzAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS44NCAuNSkiPjxwYXRoIGQ9Im0zMDUuMTkgMC0xMjUuODggOTQuMDkgMjMuMjgtNTUuNTF6IiBmaWxsPSIjZTI3NjFiIiBzdHJva2U9IiNlMjc2MWIiLz48ZyBmaWxsPSIjZTQ3NjFiIiBzdHJva2U9IiNlNDc2MWIiPjxwYXRoIGQ9Im0xNC42IDAgMTI0Ljg2IDk1LTIyLjE0LTU2LjQyeiIvPjxwYXRoIGQ9Im0yNTkuOSAyMTguMTEtMzMuNTMgNTEuNjkgNzEuNzQgMTkuODcgMjAuNjItNzAuNDF6Ii8+PHBhdGggZD0ibTEuMzEgMjE5LjI2IDIwLjUgNzAuNDEgNzEuNzMtMTkuODctMzMuNTQtNTEuNjl6Ii8+PHBhdGggZD0ibTg5LjQ5IDEzMC43Ni0yMCAzMC40NCA3MS4yMyAzLjE4LTIuNTMtNzd6Ii8+PHBhdGggZD0ibTIzMC4zIDEzMC43Ni00OS4zLTQ0LjMxLTEuNjUgNzcuOTMgNzEuMS0zLjE4eiIvPjxwYXRoIGQ9Im05My41NCAyNjkuOCA0Mi43Ni0yMS0zNi45NC0yOXoiLz48cGF0aCBkPSJtMTgzLjQ5IDI0OC44IDQyLjg4IDIxLTUuOTQtNTB6Ii8+PC9nPjxwYXRoIGQ9Im0yMjYuMzcgMjY5LjgtNDIuODgtMjEgMy40MSAyOC4xNC0uMzggMTEuODR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtOTMuNTQgMjY5LjggMzkuODUgMTktLjI1LTExLjg0IDMuMTYtMjguMTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTM0IDIwMS4xOC0zNS42NS0xMC41NyAyNS4xNy0xMS42MXoiIGZpbGw9IiMyMzM0NDciIHN0cm9rZT0iIzIzMzQ0NyIvPjxwYXRoIGQ9Im0xODUuNzYgMjAxLjE4IDEwLjUxLTIyLjE4IDI1LjMgMTEuNTl6IiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48ZyBmaWxsPSIjY2Q2MTE2IiBzdHJva2U9IiNjZDYxMTYiPjxwYXRoIGQ9Im05My41NCAyNjkuOCA2LjA3LTUxLjY5LTM5LjYxIDEuMTV6Ii8+PHBhdGggZD0ibTIyMC4zIDIxOC4xMSA2LjA3IDUxLjY5IDMzLjUzLTUwLjU0eiIvPjxwYXRoIGQ9Im0yNTAuNDEgMTYxLjItNzEuMSAzLjE4IDYuNTggMzYuOCAxMC41LTIyLjE4IDI1LjMgMTEuNTl6Ii8+PHBhdGggZD0ibTk4LjM1IDE5MC42MSAyNS4zLTExLjYxIDEwLjM1IDIyLjE4IDYuNzEtMzYuOC03MS4yMS0zLjE4eiIvPjwvZz48cGF0aCBkPSJtNjkuNSAxNjEuMiAyOS44NiA1OC41Ny0xLTI5LjE2eiIgZmlsbD0iI2U0NzUxZiIgc3Ryb2tlPSIjZTQ3NTFmIi8+PHBhdGggZD0ibTIyMS42OSAxOTAuNjEtMS4yNiAyOS4xNiAzMC01OC41N3oiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNDAuNzMgMTY0LjM4LTYuNzMgMzYuOCA4LjM1IDQzLjQxIDEuOS01Ny4xN3oiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNzkuMzEgMTY0LjM4LTMuNDEgMjIuOTIgMS41MiA1Ny4yOSA4LjQ3LTQzLjQxeiIgZmlsbD0iI2U0NzUxZiIgc3Ryb2tlPSIjZTQ3NTFmIi8+PHBhdGggZD0ibTE4NS44OSAyMDEuMTgtOC40NyA0My40MSA2LjA3IDQuMjEgMzYuOTQtMjkgMS4yNi0yOS4xNnoiIGZpbGw9IiNmNjg1MWIiIHN0cm9rZT0iI2Y2ODUxYiIvPjxwYXRoIGQ9Im05OC4zNSAxOTAuNjEgMSAyOS4xNiAzNi45NCAyOSA2LjA3LTQuMjEtOC4zNi00My4zOHoiIGZpbGw9IiNmNjg1MWIiIHN0cm9rZT0iI2Y2ODUxYiIvPjxwYXRoIGQ9Im0xODYuNTIgMjg4Ljc4LjM4LTExLjg0LTMuMTYtMi44MWgtNDcuNjlsLTIuOTEgMi44MS4yNSAxMS44NC0zOS44NS0xOSAxMy45MiAxMS40NiAyOC4yMSAxOS43Nmg0OC40NWwyOC4zNC0xOS43NCAxMy45MS0xMS40NnoiIGZpbGw9IiNjMGFkOWUiIHN0cm9rZT0iI2MwYWQ5ZSIvPjxwYXRoIGQ9Im0xODMuNDkgMjQ4LjgtNi4wNy00LjIxaC0zNWwtNi4wNyA0LjIxLTMuMTYgMjguMTQgMi45MS0yLjgxaDQ3LjY5bDMuMTYgMi44MXoiIGZpbGw9IiMxNjE2MTYiIHN0cm9rZT0iIzE2MTYxNiIvPjxwYXRoIGQ9Im0zMTAuNSAxMDAuMjEgMTAuNzYtNTEuOTUtMTYuMDctNDguMjYtMTIxLjcgOTAuOTEgNDYuODEgMzkuODUgNjYuMTYgMTkuNDkgMTQuNjgtMTcuMTktNi4zMy00LjU5IDEwLjEyLTkuMjktNy44NC02LjExIDEwLjEyLTcuNzd6IiBmaWxsPSIjNzYzZDE2IiBzdHJva2U9IiM3NjNkMTYiLz48cGF0aCBkPSJtLTEuMzQgNDguMjYgMTAuNzUgNTItNi44MyA1LjA0IDEwLjEyIDcuNzctNy43IDYuMTEgMTAuMTIgOS4yOS02LjMyIDQuNTkgMTQuNTUgMTcuMTkgNjYuMTYtMTkuNDkgNDYuNzktMzkuODUtMTIxLjctOTAuOTF6IiBmaWxsPSIjNzYzZDE2IiBzdHJva2U9IiM3NjNkMTYiLz48cGF0aCBkPSJtMjk2LjQ2IDE1MC4yNS02Ni4xNi0xOS40OSAyMC4xMSAzMC40NC0zMCA1OC41NyAzOS40Ny0uNTFoNTguODN6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtODkuNDkgMTMwLjc2LTY2LjE2IDE5LjQ5LTIyIDY5aDU4LjY3bDM5LjM1LjUxLTI5Ljg1LTU4LjU2eiIgZmlsbD0iI2Y2ODUxYiIgc3Ryb2tlPSIjZjY4NTFiIi8+PHBhdGggZD0ibTE3OS4zMSAxNjQuMzggNC4xOC03My40NyAxOS4yMy01Mi4zM2gtODUuNGwxOSA1Mi4zMyA0LjQzIDczLjQ3IDEuNTIgMjMuMTcuMTIgNTdoMzVsLjI1LTU3eiIgZmlsbD0iI2Y2ODUxYiIgc3Ryb2tlPSIjZjY4NTFiIi8+PC9nPjwvc3ZnPg==)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '70px 70px',
                    backgroundPosition: 'center'
                }}
                onClick={ConnectWallet}
                >

                </StyledButton>
            </ModalContent>
            </div>
        </Modal>
    )
}
export default HeaderConnectModal