import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const TokenWrapper = styled(Container)`
height:100%;
display: flex;
    background-image:url("./Path black.png");
    background-color:#171717;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
@media (max-width: 600px){
        background-image:unset;
    }
`
const GridContainer = styled(Grid)`
@media (min-width: 600px){
    height:100vh;
    position:relative;
}

`
const ShaggyAboutImg  = styled.img`
@media (max-width: 600px){
    margin-top: 70px;
    width: 200px;
}
@media (min-width: 600px){
    width:100%;

}
`
const ShaggyImgWrapper = styled(Grid)`
@media (min-width: 600px){
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const AboutHeading = styled.h1`
    font-size:60px;
    font-family:JAFAROWN;
    font-weight:300;
    margin-bottom:0px;
    margin-top:20px;
    color:#fff;
@media (max-width: 600px){
    font-size:37px;
    margin-top:-17px;
}
@media (min-width: 1400px){
    font-size: 90px;
}
@media (min-width:2000px){
    font-size:200px;
}
`
const TextSection = styled(Grid)`
    display:flex;
    justify-content:start;
    align-items:center;
`
const CopyRight = styled.p`
    font-family:poppins;
    font-weight:400;
    font-size:14px;
    text-align:left;
@media (max-width: 600px){
    font-size:12px;
}
`
const CopyWrightWrapper = styled(Grid)`
    display:flex;
    justify-content:center;
    align-items:end;
    color:#fff;
`
const CopyRightGrid = styled(Grid)`
@media (max-width: 600px){
    margin-top:20px;
    
}
@media (min-width: 600px){
    position: absolute;
    bottom: 0;
}
`
const CopyRightImg = styled.img`
    width: 100px;
    background:#ffffff4d;
    border-radius:10px;
    padding: 5px;
@media(max-width:375px){
        width: 60px;
    }
`
const FieldText = styled.p`
    font-size:18px;
    font-weight:400;
    font-family:JAFAROWN;
    margin:0px;
    color:#fff;
@media (max-width: 600px){
    font-size: 10px;
}
@media (min-width:2000px){
    font-size:40px;
}
`
const LastFieldText = styled.p`
    font-size:18px;
    font-weight:400;
    font-family:poppins;
    margin:0px;
    color:#000;
@media (max-width: 600px){
    font-size: 10px;
}
@media (min-width:2000px){
    font-size:40px;
}
`
const FieldWrapper = styled.div`
    background:#ffffff4d;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    margin-bottom:10px;
`
const LastFieldWrapper = styled.div`
    background:#fff;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    margin-top:10px;
`
const WrapperDiv = styled.div`
    width: 75%;
@media (max-width: 1000px) and (min-width: 749px){
    width: 94%;
}
@media (max-width: 749px){
    width:100%;
}
`
const ActiveBarSpan = styled.span`
    display: block;
    color: #fff;
    background: #fff;
    height: 55px;
    border-radius: 36px;
    width: 2px;
    font-size: 1px;
    margin-top:5px;
    margin-bottom:5px;
`
const NonActiveBar = styled.span`
    display: block;
    color: #ffffff4d;
    background: #ffffff4d;
    height: 55px;
    border-radius: 36px;
    width: 2px;
    font-size: 1px;
    margin-top:5px;
    margin-bottom:5px;
`
const BarWrapper = styled(Grid)`
    display:flex;
    align-items:center;
`
export default function Tokenomics() {
    const handleButtonClick = () => {
        const audioElement = document.getElementById('audio');
        audioElement.play();
      };
      const [isPlaying, setIsPlaying] = useState(false);
      const audioRef = useRef(null);
    
      const toggleAudio = () => {
        const audio = audioRef.current;
    
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
    
        setIsPlaying(!isPlaying);
      };
  return (
        <TokenWrapper maxWidth="xxl">
            <GridContainer container>
                <BarWrapper item xs={1} sm={1} md={1} lg={1}>
                    {/* <div>
                        <a href="/"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/about"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/tokenomics"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/howtobuy"><ActiveBarSpan>.</ActiveBarSpan></a>
                    </div> */}
                </BarWrapper>
                <ShaggyImgWrapper item xs={11} sm={5} md={5} lg={5}>
                    <ShaggyAboutImg src="./Mask Group 7.png" />
                </ShaggyImgWrapper>
                <TextSection item xs={12} sm={6} md={6} lg={6}>
                    <WrapperDiv>
                        <AboutHeading>How To Buy</AboutHeading>
                        <FieldWrapper>
                            <FieldText>1 - Create Your Wallet</FieldText>
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldText>2 - Deposit $PLS to MetaMask</FieldText>
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldText>3 - Visit $SHAGGY on PulseX</FieldText>
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldText>4 - Swap $PLS for $SHAGGY</FieldText>
                        </FieldWrapper>
                        {/* <LastFieldWrapper>
                            <LastFieldText>Contract</LastFieldText>
                            <LastFieldText>TBA</LastFieldText>
                        </LastFieldWrapper> */}
                    </WrapperDiv>
                </TextSection>
                <CopyRightGrid container>
                <Grid item xs={3} sm={6} md={6} lg={6}>
                <button style={{background:'transparent',border:'none'}} onClick={toggleAudio}><CopyRightImg src="./Group 6981.png" alt=""/></button>
                  <audio ref={audioRef} src="./audio.mp3" />
                </Grid>
                <CopyWrightWrapper item xs={9} sm={6} md={6} lg={6}>
                    <CopyRight>© 2023 by ShaggyToken. All rights reserved!</CopyRight>
                </CopyWrightWrapper>
                </CopyRightGrid>
            </GridContainer>
        </TokenWrapper>
  );
}