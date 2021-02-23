import React, { useState, useEffect } from "react";
import {
    FooterDiv,
    FooterIconPanel,
    FoorterInfoItem,
    BottomStyledSpan
} from '../Utils/Utils'
const Footer = () =>{
    return(
        <FooterDiv >
            <div>
                <FoorterInfoItem>
                    <span>Donations address:</span>
                    <BottomStyledSpan>
                        <a href="https://etherscan.io/address/0xDD4c48C0B24039969fC16D1cdF626eaB821d3384">0xDD4c48C0B24039969fC16D1cdF626eaB821d3384</a>
                    </BottomStyledSpan>
                    </FoorterInfoItem>
                <FoorterInfoItem>
                    <span>Tornado.cash version:</span>
                    <BottomStyledSpan>
                    <a>763bcfb</a>
                    </BottomStyledSpan>
                </FoorterInfoItem>
            </div>
            {/* <FooterIconPanel>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
            </FooterIconPanel> */}
        </FooterDiv>
    )
}
export default Footer