import React from 'react'
import ThemeProvider, { GlobalStyle } from './Theme'

import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
//import { NetworkContextName } from './constants'

import getLibrary from './serviceUtil/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

const Providers = ({children}) =>{
    return (
         <Web3ReactProvider getLibrary={getLibrary}>
             <Web3ProviderNetwork getLibrary={getLibrary}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
             </Web3ProviderNetwork>
        </Web3ReactProvider>
    )
}
export default Providers