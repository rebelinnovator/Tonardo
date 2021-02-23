import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle, css } from 'styled-components'
// import { useDarkModeManager } from '../contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

const MEDIA_WIDTHS = {
    upToSmall: 600,
    upToMedium: 960,
    upToLarge: 1280
  }
  const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
    accumulator[size] = (...args) => css`
      @media (max-width: ${MEDIA_WIDTHS[size]}px) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {})
  export default function ThemeProvider({ children }) {
//    const [darkMode] = useDarkModeManager()
    const darkMode = true

  
    return <StyledComponentsThemeProvider theme={theme(darkMode)}>{children}</StyledComponentsThemeProvider>
  }

  const theme = (darkMode, color) => ({
    customColor: color,
    textColor: darkMode ? color : 'black',
  
    panelColor: darkMode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)',
    backgroundColor: darkMode ? '#212429' : '#F7F8FA',
    // purples
    wisteriaPurple: darkMode ? '#8c0a0a' : '#01796f',
  
    uniswapPink: darkMode ? '#fa9e9e' : 'black',
  
    concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
    inputBackground: darkMode ? '#1F1F1F' : '#FAFAFA',
    shadowColor: darkMode ? '#000' : '#2F80ED',
    mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  
    text1: darkMode ? '#FAFAFA' : '#1F1F1F',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',

    text10:darkMode ? '#94febf' : '#94febf',
    //shadow color
    shadow: darkMode ? '#afafaf24' : '#e4e4e4',
  
    // special case text types
    white: '#FFFFFF',
  
    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FAFAFA',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#565A69' : '#888D9B',
    bg6: darkMode ? '#000' : '#FFFFFF',
    bg7: darkMode ? '#1f2124' : '#FAFAFA',
  
    bg11: darkMode ? '#FAFAFA' : '#212429',
    bg33: darkMode ? '#EDEEF2' : '#40444F',
  
    bg100:darkMode ? '#0e1f17' : 'black',
    bg101:darkMode ? '#94febf' : 'black',
    bg102:darkMode ? '#1e4935' : 'black',
    bg103:darkMode ? '#419b66' : 'black',
    bg105:darkMode ? '#2be978' : 'black',
    modalBackground:darkMode ? '#0b0b0baa' : 'black',

    
    outLine1:darkMode ? '#393939' : 'black',
    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.6)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.4)',
    onlyLight: darkMode ? '#22242a' : 'transparent',
    divider: darkMode ? 'rgba(43, 43, 43, 0.435)' : 'rgba(43, 43, 43, 0.035)',
  
    //primary colors
    primary1: darkMode ? '#2172E5' : '#fa9e9e',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',
    primary6: darkMode ? '#626262' : '#e1e1e1',
  
  
    // color text
    primaryText1: darkMode ? '#6da8ff' : '#fa9e9e',
  
    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#fa9e9e',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',
  
    shadow1: darkMode ? '#000' : '#2F80ED',
  
    // media queries
    mediaWidth: mediaWidthTemplates,
  
    // other
    red1: '#FF6871',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    link: '#2172E5',
    blue: '2f80ed',
  
    background: darkMode ? 'black' : `radial-gradient(50% 50% at 50% 50%, #fa9e9e30 0%, #fff 0%)`
  
  
  })

  export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 15px;    
    font-weight:100;
    background-color: ${({ theme }) => theme.bg6};
  }
  a{
    color:${({ theme }) => theme.text1};
    text-decoration:none;
    margin:0.1rem;
    :hover{
      color:${({ theme }) => theme.text10};
    }
  }
  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`