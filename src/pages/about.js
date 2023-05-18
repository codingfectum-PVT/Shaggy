import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const HomeWrapper = styled(Container)`
height:100%;
display: flex;
    background-image:url("./Path red.png");
    background-color:#BC3848;
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
    margin-top: 40px;
    width: 200px;
}
@media (max-width: 900px) and (min-width: 749px){
    width:100%;
}
@media(min-width: 901px){
    width:70%;

}

`
const ShaggyImgWrapper = styled(Grid)`
@media (min-width: 600px){
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
`
const AboutHeading = styled.h1`
    font-size:70px;
    font-family:JAFAROWN;
    font-weight:400;
    margin-bottom:0px;
    margin-top:20px;
    color:#fff;
@media (max-width: 600px){
    font-size:39px;
    margin-top:-17px;
}
@media (max-width: 1000px) and (min-width: 749px){
    font-size:60px;
}
@media (min-width: 2000px){
    font-size:200px;
}
`
const HomeDescription = styled.p`
    color:#fff;
    font-size:16px;
    font-family:Roboto;
    font-weight:300;
    margin-top: 0px;
@media (max-width: 340px){
    font-size:10px !important ;
}
@media (max-width: 340px){
    font-size:10px !important ;
}
@media (max-width: 600px){
    font-size:11px ;
}
@media (min-width: 768px){
    width:100%;
}
@media (max-width: 1000px) and (min-width: 749px){
    font-size:15px;
}
@media (min-width: 2000px){
    font-size:30px;
}
`
const TextSection = styled(Grid)`
    display:flex;
    justify-content:center;
    align-items:center;
`
const BtnLinks = styled.a`
    color:#fff;
    font-size:20px;
    font-family:JAFAROWN;
    font-weight:400;
    margin-right:10px;
    padding:5px 10px;
    border-radius:10px;
    width: fit-content;
    display: inline-flex;
@media (min-width: 2000px){
        font-size:40px;
    }
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
    display:none;
}
@media (min-width: 600px){
    position: absolute;
    bottom: 0;
}
`
const CopyRightImg = styled.img`
    width: 80px;
    background:#ffffff4d;
    border-radius:10px;
    padding: 5px;
@media(max-width:375px){
        width: 60px;
    }
`
const AboutBtnImg = styled.img`
    // background:#000;
    // border-radius:10px;
    width:100%;
    max-width:150px;
    // padding: 5px;
    margin-right:5px;
@media (min-width: 2000px){
    width:150px;
    }
`
const AboutBtnImg2 = styled.img`
    // background:#000;
    // border-radius:10px;
    width:100%;
    max-width:89px;
    // padding: 5px;
    margin-right:5px;
@media (min-width: 2000px){
    width:89px;
    }
`
const Div = styled.div`
@media (max-width: 375px){
   margin-bottom:20px
    }
    @media (max-width: 600px){
        margin-bottom:75px
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

const Divwrap = styled.div`
display: flex;
    align-items: center;
`
export default function About() {
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
                        <a href="/"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/about"><ActiveBarSpan>.</ActiveBarSpan></a>
                        <a href="/tokenomics"><NonActiveBar>.</NonActiveBar></a>
                        <a href="/howtobuy"><NonActiveBar>.</NonActiveBar></a>
                    </div> */}
                </BarWrapper>
                <ShaggyImgWrapper item xs={11} sm={4} md={5} lg={5}>
                    <ShaggyAboutImg src="./Nice-Scooby-And-Shaggy-Image.png" />
                </ShaggyImgWrapper>
                <TextSection item xs={12} sm={7} md={6} lg={6}>
                    <Div>
                        <AboutHeading>About</AboutHeading>
                        <HomeDescription>Introducing the Shaggy fan token! Inspired by the legendary
                             character from Scooby Doo, our token is a fun and unique way for fans to 
                             show their love for Shaggy. With our token, you'll have exclusive access
                              to a range of exciting events, merchandise, and content that celebrate
                               the groovy lifestyle of everyone's favorite mystery-solving slacker. 
                               So come and join the fun – let's see what kind of adventures
                                we can get up to!
                        </HomeDescription>
                        <HomeDescription>With our Shaggy token, fans can 
                            own a piece of their favorite character and participate in exclusive events
                             and merchandise offerings. We are committed to building a vibrant and 
                             inclusive community that brings fans of all ages together.
                             So join us and let's solve some mysteries together!
                        </HomeDescription>
                        <Divwrap>
                        <BtnLinks>
                            {/* <div style={{display:"flex" , alignItems:"center"}}> */}
                                <AboutBtnImg src="./pulsechain.png"/>
                            {/* </div> */}
                        </BtnLinks>
                        <BtnLinks>
                            {/* <div style={{display:"flex" , alignItems:"center"}}> */}
                                <AboutBtnImg2 src="./pulsex.png"/>
                            {/* </div> */}
                        </BtnLinks>
                        </Divwrap>
                        {/* <BtnLinks>
                            <div style={{display:"flex" , alignItems:"center"}}>
                                <AboutBtnImg src="./Rectangle 2093.png"/>Dextools
                            </div>
                        </BtnLinks> */}
                    </Div>
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
        </HomeWrapper>
  );
}