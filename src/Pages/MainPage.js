import React, { useState, useEffect } from "react";
import {
    Row,
    PanelContent,
    PanelContentItem,
    PanelContentSmallTitle,
    PanelContentSmallContent,
    PanelContentSmallContentRow,
    PanelContentSmallContentCol,
    DepositesDetailItem,
    DepositesDetailItemIndex,
    DepositesDetailItemContent,
    InfoSpan,
    InfoSpan2,
    StyledButton,
    StyledInput,
    TabNavPart,
    TabNavItemLeft,
    TabNavItemRight,
    TabContentPart,
    TabBottomPart,
    TabBottomNavPart,
    BottomStyledSpan
} from '../Utils/Utils'
import {
    Article,
    ArticleContent,
    ArticleLeft,
    ArticleText,
    MainPageContent,
    MainPageContentItemDiv,
    
} from '../Utils/MainPageContent'
import DropDownMenu from '../UIUtils/Dropdown'
import StepLine from '../UIUtils/StepLine'

import {StyledButtonDiv} from '../Utils/StyledButton'
import { Chrono } from "react-chrono";


const TokenList=[
    {name:'ETH',val:'ETH'},
    {name:'DAI',val:'DAI'},
    {name:'cDAI',val:'cDAI'},
    {name:'USDC',val:'USDC'},
    {name:'USDT',val:'USDT'}
]
const AmountList = [
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
    },

]
const MainPageContentItem = ({HasOutLine,MultiTab,FirstTab,SecondTab,Contents,BottomNav,IsBottomRight}) =>{
    const [selTab,setSelTab] = useState(0)
    return(
        <MainPageContentItemDiv>
            <TabNavPart>
                    <TabNavItemLeft Select={selTab == 0 && MultiTab} MultiTab={MultiTab} HasOutLine={HasOutLine} onClick={
                    ()=>{
                        if(MultiTab){
                            setSelTab(0)
                        }
                    
                    }}>
                        {FirstTab}
                    </TabNavItemLeft>
                    {SecondTab && (
                        <TabNavItemRight Select={selTab == 1 && MultiTab} MultiTab={MultiTab} HasOutLine={HasOutLine} onClick={
                            ()=>{
                                if(MultiTab){
                                    setSelTab(1)
                                }
                            }}>
                            {SecondTab}
                        </TabNavItemRight>
                    )}
                    
            </TabNavPart>
            <TabContentPart HasOutLine={HasOutLine} IsBottomRight={IsBottomRight}>
                {Contents[selTab]}
            </TabContentPart>
            <TabBottomPart IsBottomRight={IsBottomRight}>
                <TabBottomNavPart IsBottomRight={IsBottomRight} HasOutLine={HasOutLine}>
                    {BottomNav}
                </TabBottomNavPart>
            
            </TabBottomPart>
            
            
        </MainPageContentItemDiv>
    )
}
const MainPage = () => {
    return(
        <div>
            <Row>
                <Article>
                    <ArticleContent>
                        <ArticleLeft>
                            <span style={{height:'3rem',width:'3rem'}}>

                            </span>
                        </ArticleLeft>
                        <ArticleText>
                            <span>
                            Tornado.cash was audited. However, it is still an experimental software. Please use at your own risk.
                            </span>
                        </ArticleText>
                        
                    </ArticleContent>
                </Article>
                <Article>
                    <ArticleContent>
                        <ArticleLeft>
                            <span style={{height:'3rem',width:'3rem'}}>

                            </span>
                        </ArticleLeft>
                        <ArticleText>
                            <span>
                            Tornado.cash was audited. However, it is still an experimental software. Please use at your own risk.
                            </span>
                        </ArticleText>
                        
                    </ArticleContent>
                </Article>
            </Row>
            <Row>
                <MainPageContent>
                    <MainPageContentItem 
                        HasOutLine={true}
                        MultiTab={true}
                        FirstTab={
                            <span style={{fontSize:'20px'}}>Deposit</span>
                        }
                        SecondTab={
                            <span style={{fontSize:'20px'}}>Withdraw</span>

                        }
                        Contents={
                            [
                                <PanelContent>
                                    <PanelContentItem>
                                        <PanelContentSmallTitle>
                                            <span>Token</span>
                                        </PanelContentSmallTitle>
                                        <PanelContentSmallContent>
                                            <DropDownMenu list={TokenList}>
                                            </DropDownMenu>
                                        </PanelContentSmallContent>
                                    </PanelContentItem>
                                    <PanelContentItem>
                                        <PanelContentSmallTitle>
                                            <span>Amount</span>
                                            <InfoSpan>i</InfoSpan>
                                        </PanelContentSmallTitle>
                                        <PanelContentSmallContent>
                                            <StepLine
                                                
                                            />
                                        </PanelContentSmallContent>
                                    </PanelContentItem>
                                    <PanelContentItem>
                                        <StyledButton>
                                            <span>Connect</span>
                                        </StyledButton>
                                    </PanelContentItem>
                                </PanelContent>,
                                <PanelContent>
                                     <PanelContentItem>
                                        <PanelContentSmallTitle>
                                            <span>Note</span>
                                            <InfoSpan>i</InfoSpan>
                                        </PanelContentSmallTitle>
                                        <PanelContentSmallContent>
                                            <StyledInput placeholder={"Please enter your note"}/>
                                        </PanelContentSmallContent>
                                    </PanelContentItem>
                                    <PanelContentItem>
                                        <PanelContentSmallTitle>
                                            <span>Recipient Address</span>
                                            <InfoSpan>i</InfoSpan>
                                        </PanelContentSmallTitle>
                                        <PanelContentSmallContent>
                                            <StyledInput  placeholder={"Please paste address here"}/>
                                        </PanelContentSmallContent>
                                    </PanelContentItem>
                                    <PanelContentItem>
                                        <StyledButton>
                                            <span>Withdraw</span>
                                        </StyledButton>
                                    </PanelContentItem>
                                </PanelContent>
                            ]
                        }
                        BottomNav={
                            <BottomStyledSpan><a href="https://etherscan.io/address/0x169AD27A470D064DEDE56a2D3ff727986b15D52B">usdt-100.tornadocash.eth</a></BottomStyledSpan>
                        }
                        IsBottomRight={false}

                    />
                    <MainPageContentItem
                        HasOutLine={false}
                        FirstTab={
                            <>
                            <span style={{fontSize:'20px'}}>Statistics</span>
                            <InfoSpan2>0.1 ETH</InfoSpan2>

                            </>
                        }
                        BottomNav={
                            <BottomStyledSpan>Your Ip:<a>192.168.1.5</a></BottomStyledSpan>
                        }
                        IsBottomRight={true}
                        Contents={
                            [<PanelContent>
                                <PanelContentItem>
                                    <PanelContentSmallTitle>
                                        <span>Anonymity set</span>
                                        <InfoSpan>i</InfoSpan>
                                    </PanelContentSmallTitle>
                                    <PanelContentSmallContent>
                                        <span>6 equal user deposits</span>
                                    </PanelContentSmallContent>
                                </PanelContentItem>
                                <PanelContentItem>
                                    <PanelContentSmallTitle>
                                        <span>Latest deposits</span>
                                    </PanelContentSmallTitle>
                                    <PanelContentSmallContent>
                                        <PanelContentSmallContentRow>
                                            <PanelContentSmallContentCol>
                                                <DepositesDetailItem hasback={true}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                                <DepositesDetailItem hasback={false}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                                <DepositesDetailItem hasback={true}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                                <DepositesDetailItem hasback={false}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                                <DepositesDetailItem hasback={true}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                            </PanelContentSmallContentCol> 
                                            <PanelContentSmallContentCol>
                                                <DepositesDetailItem hasback={true}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                                <DepositesDetailItem hasback={false}>
                                                    <DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
                                                    <DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
                                                </DepositesDetailItem>
                                            </PanelContentSmallContentCol> 
                                            

                                        </PanelContentSmallContentRow>
                                        
                                    </PanelContentSmallContent>
                                </PanelContentItem>
                            </PanelContent>]
                        }
                    />
                 
                </MainPageContent>
            </Row>
        </div>
    )
}
export default MainPage