import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
const HomeWrapper = styled(Container)`
height:100%;
display: flex;
    align-items: center;
    background-image:url("./Path 119995.png");
    background-color:#1A86E1;
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
const ShaggyHomeImg = styled.img`
@media (max-width: 600px){
    margin-top: 50px;
    width: 180px;
}
@media (min-width: 901px){
    width:31%;
    position:absolute;
    bottom:0;
}
@media (max-width: 900px) and (min-width: 749px){
    width:50%;
    position:absolute;
    bottom:0;
}
`
const ShaggyImgWrapper = styled(Grid)`
    display: flex;
    justify-content: center;
`
const HomeHeading = styled.h1`
    font-size:100px;
    font-family:JAFAROWN;
    font-weight:400;
    margin-bottom:0px;
    margin-top:20px;
    color:#fff;
@media (max-width: 600px){
    font-size:50px;
}
@media (min-width: 2000px){
    font-size:220px;
}
`
const HomeDescription = styled.p`
    color:#fff;
    font-size:20px;
    font-family:Roboto;
    font-weight:300;
    margin-top: 0px;
@media (min-width: 768px){
    width:80%;
}
@media (min-width: 2000px){
    font-size:50px;
}
`
const TextSection = styled(Grid)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:0px


   
`
const Div = styled.div`
margin-bottom:0px;

@media (max-width: 375px){
    margin-bottom:20px
     }
     @media (max-width: 600px){
         margin-bottom:75px
          }
`
const BuyNow = styled.a`
    color:#fff;
    background:#000;
    font-size:20px;
    font-family:JAFAROWN;
    font-weight:400;
    margin-right:10px;
    padding:5px 10px;
    border-radius:10px;
@media (min-width: 2000px){
        font-size:50px;
        padding:15px 15px;
    }
`
const Chart = styled.a`
    color:#000;
    background:#fff;
    font-size:20px;
    font-family:JAFAROWN;
    font-weight:400;
    padding:5px 10px;
    border-radius:10px;
@media (min-width: 2000px){
        font-size:50px;
        padding:15px 15px;
    }
`
const CopyRight = styled.p`
    font-family:poppins;
    font-weight:400;
    font-size:18px;
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
    display:none;
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
export default function Home() {
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
        <HomeWrapper maxWidth="xxl">
            <GridContainer container>
                <BarWrapper item xs={1} sm={1} md={1} lg={1}>
                    {/* <div>
                        <a href="/"><ActiveBarSpan>.</ActiveBarSpan></a>
                        <a href="/about"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/tokenomics"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/howtobuy"><NonActiveBar>.</NonActiveBar></a>
                    </div> */}
                </BarWrapper>
                <ShaggyImgWrapper item xs={11} sm={5} md={5} lg={5}>
                    <ShaggyHomeImg src="./Mask Group 5.png" />
                </ShaggyImgWrapper>
                <TextSection item xs={12} sm={6} md={6} lg={6}>
                    <Div>
                        <HomeHeading>SHAGGY</HomeHeading>
                        <HomeDescription>Zoinks! Shaggy's got a new gig as a meme
                             and fan token! Join the gang and hop on board for some
                            groovy adventures!
                        </HomeDescription>
                        <BuyNow href='https://app.pulsex.com/swap?outputCurrency=0x3B2805eaD91eCC0a78134d64b54855E87Cbca09e' target='_blank'>Buy Now</BuyNow>
                        <Chart href='https://dexscreener.com/pulsechain/0x615fa1449909d9106765b14744fcd9bd232079f3' target='_blank'>View Chart</Chart>
                    </Div>
                </TextSection>
                <CopyRightGrid container>
                <Grid item xs={3} sm={6} md={6} lg={6}>
                <button style={{background:'transparent',border:'none'}} onClick={toggleAudio}><CopyRightImg src="./Group 6981.png" alt=""/></button>
                  <audio ref={audioRef} src="./audio.mp3" />
            {/* <audio ref={audioRef}>
                <source src="./audio.mp3" type="audio/mpeg" />
            </audio> */}
          {/* <button onClick={toggleAudio}>{isPlaying ? 'Stop' : 'Play'}</button> */}


                </Grid>
                <CopyWrightWrapper item xs={9} sm={6} md={6} lg={6}>
                    <CopyRight>© 2023 by ShaggyToken. All rights reserved!</CopyRight>
                </CopyWrightWrapper>
                </CopyRightGrid>
            </GridContainer>
        </HomeWrapper>
  );
}