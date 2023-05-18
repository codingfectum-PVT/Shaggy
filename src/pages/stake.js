import React, { useState, useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import * as PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import StackNav from '../components/stacknav';
import { Button } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { createTheme } from '@mui/material/styles';

import Web3 from "web3";

var web3;
let stakingContact, tokenContact, stakingCA, tokenCA;
let deciConvert = 1e18;


const StackWrapper = styled(Container)`
  height:100%;
  display: flex;
  align-items: center;
  background-image:url("./assets/Stack bg.png");
  background-color:#B8BF19;
  background-size:contain;
  background-position:center;
  background-repeat:no-repeat;
  @media (max-width: 600px){
      background-image:unset;
      padding-bottom:20px;
  }
  .css-ttwr4n {
      height: 0px !important;
      display: none !important;
      background-color:#1976d200 !important;
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
      width: 140px;
  }
  @media (min-width: 901px){
      width:31%;
      position:absolute;
      bottom:0;
  }
  @media (max-width: 900px) and (min-width: 749px){
      width:40%;
      position:absolute;
      bottom:0;
  }
`
const ShaggyImgWrapper = styled(Grid)`
    display: flex;
    justify-content: center;
`
const StackHeading = styled.h1`
    font-size:55px;
    font-family:JAFAROWN;
    font-weight:400;
    margin-bottom:0px;
    margin-top:20px;
    color:#000;
@media (max-width: 600px){
    font-size:45px;
    margin-top:0px;
}
@media (min-width: 2000px){
    font-size:140px;
}
@media (max-width: 1100px) and (min-width: 768px){
    line-height: 50px;
    font-size:40px;
}
`
const TabSection = styled(Grid)`
    display:grid;
    align-items:center;
    margin-bottom:0px;
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
const CustomTabs = styled(Tab)`
  color:#fff;
  font-family:JAFAROWN;
  font-size:20px;
  font-weight:bold;
  background:#000;
  width: 50%;
  &:hover {
    color: #B8BF19;
    background:#70707047;
  }
  &.Mui-selected {
    color: #B8BF19 !important;
    background:#70707047;
  }
  @media (max-width: 600px){
    margin:auto;
  }
  @media (min-width: 2000px){
    font-size:50px;
    margin-right:10px;
  }
`
const TabDivWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:0px 20px;
    margin:10px 0px;
`
const DivFirstText = styled.p`
    color:#fff;
    font-family:Poppins;
    font-size:15px;
    font-weight:600;
    margin:0px;
  @media (max-width: 1300px){
    margin: 0px 0px 0px 0px;
    font-size:16px;
  }
  @media (max-width: 900px) and (min-width: 768px){
    margin: 0px 0px 0px 0px;
    font-size:14px !important;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const StackText = styled.p`
    font-size:18px;
    width:fit-content;
    font-weight:300;
    background: #b8bf1985;
    color: #B8BF19;
    padding: 7px 8px 7px 8px;
    border-radius: 13px;
    margin: 0px 0px 10px 0px;
  @media (max-width: 1300px){
    margin: 0px 0px 0px 0px;
    font-size:16px;
  }
  @media (max-width: 900px) and (min-width: 768px){
    margin: 0px 0px 0px 0px;
    font-size:14px !important;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const DivSecondText = styled.p`
    font-size:15px;
    color:#fff;
    font-family:poppins;
    margin:0px;
    font-weight:300;
  @media (max-width: 900px) and (min-width: 768px){
    margin: 0px 0px 0px 0px;
    font-size:14px !important;
  }
  @media (max-width: 1300px){
        margin: 0px 0px 0px 0px;
        font-size:16px;
    }
  @media(min-width: 2000px){
        font-size:30px;
      }
  @media(max-width: 600px){
        font-size:13px;
      }
`
const HrDivider = styled.hr`
    border: 0.5px solid #7070703d;
    width:100%;
`
const FieldText = styled.input`
    color:#fff;
    font-size:15px;
    font-family:poppins;
    font-weight:300;
    background:#0D0D0D;
    margin:0px;
    padding:10px;
    width:87%;
    border-radius:10px;
  @media (max-width: 1300px){
          font-size:14px;
      }
  @media(min-width: 2000px){
          font-size:30px;
        }
  @media(max-width: 600px){
        font-size:13px;
      }
`
const FieldBtn = styled(Button)`
    Color:#fff;
    font-family:poppins;
    font-size:15px;
    font-weight:600;
    background:#B8BF19;
    border-radius:10px;
    width:10%;
  @media (max-width: 1300px){
    font-size:14px;
    padding:8px 10px;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const ApproveBtn = styled(Button)`
    Color:#fff;
    font-family:poppins;
    font-size:15px;
    font-weight:600;
    background:#B8BF19;
    border-radius:10px;
    width:100%;
  @media (max-width: 1300px){
    font-size:14px;
    padding:8px 10px;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const FieldBtn2 = styled(Button)`
    Color:#fff;
    font-family:poppins;
    font-size:15px;
    font-weight:600;
    background:#ABABAB;
    border-radius:10px;
    width:10%;
  @media (max-width: 1300px){
    font-size:14px;
    padding:8px 10px;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const ApproveBtn2 = styled(Button)`
    Color:#fff;
    font-family:poppins;
    font-size:15px;
    font-weight:600;
    background:#ABABAB;
    border-radius:10px;
    width:100%;
  @media (max-width: 1300px){
    font-size:14px;
    padding:8px 10px;
  }
  @media(min-width: 2000px){
    font-size:30px;
  }
  @media(max-width: 600px){
    font-size:13px;
  }
`
const TabBox = styled(Box)`
  position: relative;
  background:#000;
  width:80%;
  padding-bottom:10px;
  @media (max-width: 900px){
    width:100%;
  }
`
const Loader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6c700fab;
  z-index: 1;
  backdrop-filter: blur(5px);
` 
const StackInnerWrapper = styled.div`
    display: grid;
    align-items: center;
`
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#b8bf1938',

}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Stake() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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

const [getErrorType, setErrorType] =  useState('');
const [getError, setError] =  useState(false);
const [getWalletConnected, setWalletConnected] =  useState('');
const [getWalletAddress, setWalletAddress] =  useState('');
const [getBtnAddress, setBtnAddress] =  useState('');
const [getStakedBalance, setStakedBalance] =  useState(0);
const [getStakedBalanceFormate, setStakedBalanceFormate] =  useState(0);
const [getTokenBalance, setTokenBalance] =  useState(0);
const [getTokenBalanceFormate, setTokenBalanceFormate] =  useState(0);
const [getRewardBalance, setRewardBalance] =  useState(0);
const [getRewardBalanceFormate, setRewardBalanceFormate] =  useState(0);
const [getStakingAmount, setStakingAmount] =  useState();
const [getWithdrawAmount, setWithdrawAmount] =  useState();
const [getApproveBTN, setApproveBTN] =  useState(false);
const [getInputError, setInputError] =  useState('');
const [getLoader, setLoader] =  useState(false);




  useEffect(()=>{
    connectWallet()
  },[getBtnAddress])
    /***************************************************
    *
    *    Handle web3 integration in DApp
    *    1=> amountFormate 
    *        a) set amount comma 
    *        b) set humber of digit after decimal
    *  
    *    2=> conciseWallet
    *        This function is used to hide half wallet address
    *        (i.e. 0xabc....zyx)
    * 
    *    3=> chainChanged
    *        This is ethereum function from web3, used to handle
    *        in changing NETWORK from metamask 
    * 
    *    4=> accountsChanged
    *        This is ethereum function from web3, used to handle
    *        in changing USER-WALLET-ADDRESS from metamask 
    *    
    *    5=> connectWallet
    *        This function is used to deal with contract(s)
    *        (i.e. getting/sending values from/in the contract(s)
    *        It will call when page reload and also on click
    * 
    *
    ****************************************************/
    // 1=> numaricAmount
  const amountFormate = (num,digit) => {
    var testnumber = Number.parseFloat(num).toFixed(digit);
    return testnumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // 2=> conciseWallet
  const conciseWallet = (value) => {
      const intvalue = value.toString();
      if( intvalue != ""){
          const start_char = value.toString().substring(0,6)+"*********";
          const end_char = value.toString().substr(value.length - 4);
          return (start_char + end_char)
      }
  }
  // 3=> chainChanged
  window.ethereum.on('connect',  ( _connectInfo => {
      // PulseChain 0x171
      // PulseChain Testnet 0x3af
      if ( _connectInfo.chainId != "0x171") {
          setErrorType('wrongNetwork')
          setError(true)
      }
  }));
  window.ethereum.on('chainChanged', (_chainId => {
      // PulseChain 0x171
      // PulseChain Testnet 0x3af
      if ( _chainId == "0x171") {
          window.location.reload();
      }else{
          setErrorType('wrongNetwork')
          setError(true)
      }
  }));
  // 4=> accountsChanged
  try {
      window.ethereum.on('accountsChanged', ( _mAddress => {
          if( _mAddress != "" ){
              setErrorType('walletChanged');
              setError(true);
              window.location.reload();
          }else{
              setWalletConnected(false)
              setErrorType('walletNotConnected')
              setError(true)
          }
      }));
  } catch (error) {
      console.log('Address: ', error)
  }

  // 5=> connectWallet
  const connectWallet = () => {
      if(typeof Web3 !== 'undefined'){

          web3 = new Web3(window.ethereum);
          try {
              window.ethereum.request({ method: 'eth_chainId' }).then( _chainId => {
                  // PulseChain 0x171
                  // PulseChain Testnet 0x3af
                  if ( _chainId != "0x171") {
                      setErrorType('wrongNetwork')
                      setError(true)
                  }
              })
          } catch (error) {
              console.log(error)
          }
          //staking testnet 0x9Fd55c2c2a3307821cD3Bd936b704d6514945a36
          //CA testnet 0x13407142a2C0988119C2b9b16C8934D1eb63ca58
          stakingCA = "0x3F504Bf96c0DfF294C1545888063131A450C0882";
          let stakingAbi = [
            {
              "inputs": [],
              "name": "emergencyWithdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "stake",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_SHAGGYToken",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "unstake",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "APY",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "BURN_FEE",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                }
              ],
              "name": "calculateReward",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "lastStakedTime",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "SECONDS_PER_DAY",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "shaggyToken",
              "outputs": [
                {
                  "internalType": "contract SHAGGYToken",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "stakedBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalStaked",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ];
          stakingContact = new web3.eth.Contract( stakingAbi , stakingCA );

          tokenCA = "0x3B2805eaD91eCC0a78134d64b54855E87Cbca09e";
          let tokenABI = [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [],
              "name": "AutoNukeLP",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sniper",
                  "type": "address"
                }
              ],
              "name": "BoughtEarly",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "isExcluded",
                  "type": "bool"
                }
              ],
              "name": "ExcludeFromFees",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [],
              "name": "ManualNukeLP",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "bool",
                  "name": "value",
                  "type": "bool"
                }
              ],
              "name": "SetAutomatedMarketMakerPair",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "tokensSwapped",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "ethReceived",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "tokensIntoLiquidity",
                  "type": "uint256"
                }
              ],
              "name": "SwapAndLiquify",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "oldAddress",
                  "type": "address"
                }
              ],
              "name": "UpdateUniswapV2Router",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newWallet",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "oldWallet",
                  "type": "address"
                }
              ],
              "name": "devWalletUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newWallet",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "oldWallet",
                  "type": "address"
                }
              ],
              "name": "marketingWalletUpdated",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "_isExcludedMaxTransactionAmount",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "automatedMarketMakerPairs",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "buyDevFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "buyLiquidityFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "buyMarketingFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "buyTotalFees",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deadAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "devWallet",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "disableTransferDelay",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "enableTrading",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "excluded",
                  "type": "bool"
                }
              ],
              "name": "excludeFromFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "updAds",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "isEx",
                  "type": "bool"
                }
              ],
              "name": "excludeFromMaxTransaction",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "isExcludedFromFees",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "lastLpBurnTime",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "lastManualLpBurnTime",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "limitsInEffect",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "lpBurnEnabled",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "lpBurnFrequency",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "manualBurnFrequency",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "percent",
                  "type": "uint256"
                }
              ],
              "name": "manualBurnLiquidityPairTokens",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "marketingWallet",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "maxTransactionAmount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "maxWallet",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "percentForLPBurn",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "removeLimits",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "sellDevFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "sellLiquidityFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "sellMarketingFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "sellTotalFees",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_frequencyInSeconds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_percent",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "_Enabled",
                  "type": "bool"
                }
              ],
              "name": "setAutoLPBurnSettings",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "value",
                  "type": "bool"
                }
              ],
              "name": "setAutomatedMarketMakerPair",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "swapEnabled",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "swapTokensAtAmount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokensForDev",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokensForLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokensForMarketing",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tradingActive",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "transferDelayEnabled",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "uniswapV2Pair",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "uniswapV2Router",
              "outputs": [
                {
                  "internalType": "contract IUniswapV2Router02",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_marketingFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_liquidityFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_devFee",
                  "type": "uint256"
                }
              ],
              "name": "updateBuyFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newWallet",
                  "type": "address"
                }
              ],
              "name": "updateDevWallet",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newMarketingWallet",
                  "type": "address"
                }
              ],
              "name": "updateMarketingWallet",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newNum",
                  "type": "uint256"
                }
              ],
              "name": "updateMaxTxnAmount",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newNum",
                  "type": "uint256"
                }
              ],
              "name": "updateMaxWalletAmount",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_marketingFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_liquidityFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_devFee",
                  "type": "uint256"
                }
              ],
              "name": "updateSellFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bool",
                  "name": "enabled",
                  "type": "bool"
                }
              ],
              "name": "updateSwapEnabled",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "newAmount",
                  "type": "uint256"
                }
              ],
              "name": "updateSwapTokensAtAmount",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ];
          tokenContact = new web3.eth.Contract( tokenABI , tokenCA );

          //get connected wallet address
          try {
              window.ethereum.request({ method: 'eth_requestAccounts'}).then( _account => {
                  conciseWallet(_account.toString());
                  setWalletConnected(true)
                  let userWalletAdd = _account.toString()
                  
                  setWalletAddress(userWalletAdd)
                  setBtnAddress(()=>{
                    return `${userWalletAdd?.substring(0, 3)}...${userWalletAdd?.substr(userWalletAdd?.length - 4)}`
                  })

                  tokenContact.methods.allowance(_account.toString(),stakingCA).call().then( result => {
                    if( result > 1 ){
                    setApproveBTN(false)
                    }else{
                    setApproveBTN(true)
                    }     
                  })

                  stakingContact.methods.stakedBalance(_account.toString()).call().then( result => {
                    setStakedBalance(result/deciConvert)
                    setStakedBalanceFormate(amountFormate(result/deciConvert,2))
                  })
                  stakingContact.methods.calculateReward(_account.toString()).call().then( result => {
                    setRewardBalance(result/deciConvert)
                    setRewardBalanceFormate(amountFormate(result/deciConvert,2))
                  })
                  tokenContact.methods.balanceOf(_account.toString()).call().then( result => {
                    setTokenBalance(result/deciConvert)
                    setTokenBalanceFormate(amountFormate(result/deciConvert,2))
                  })
                  // msContract.methods.allowance(_account.toString(),swapAdd).call().then( result => {
                  //     if( result > 1 ){
                  //     setApproveBTN(false)
                  //     }else{
                  //     setApproveBTN(true)
                  //     }   
                  // })
                  // swapContract.methods.conversion_rate().call().then( result => {
                  //     setInGameRate(result)
                  // })
              })
              .catch (error => {
                  setErrorType('walletNotConnected')
                  setError(true)
              });
          } catch (error) {
              setErrorType('noMetamask')
              setError(true)
          }
      }else{
          console.log('Please install metamask to use this page.!')
      }
  }

  const handleAmount = (vals, from, isMax = false) => {
    let val = vals.target.value;

    if (from === 'staking' ) {
      if(isMax){
        setStakingAmount(getTokenBalance)
      }else{
        setStakingAmount(val)
        if(val <= 0 || val > getTokenBalance){
          setInputError('Invalid amount')
        }else {
          setInputError('')
        } 
      }
    } else if (from === 'withdraw' ) {
      if(isMax){
        setWithdrawAmount(getStakedBalance)
      }else{
        setWithdrawAmount(val)
        if(val <= 0 || val > getStakedBalance){
          setInputError('Invalid amount')
        }else {
          setInputError('')
        }
      }
    }
  }

  const handleStake = () => {
    setLoader(true)
    if(getStakingAmount <= 0 || getStakingAmount > getTokenBalance){
      setInputError('Invalid amount')
      setLoader(false)
      return
    }
    
    setInputError('')
    let finalAmount = (Number(getStakingAmount)-0.0001).toString();
    finalAmount = web3.utils.toWei(finalAmount, 'ether')

    stakingContact.methods.stake(finalAmount)
    .send({from: getWalletAddress}).then( test => {
      setLoader(false)
      window.location.reload();
    })
    .catch(error => {
      setLoader(false)
      console.log('Getting Errors: ' , error);
    });

  }
  
  const handleWithdraw = () => {
    setLoader(true)
    if(getWithdrawAmount <= 0 || getWithdrawAmount > getStakedBalance){
      setInputError('Invalid amount')
      setLoader(false)
      return
    }
    
    setInputError('')
    let finalAmount = (Number(getWithdrawAmount)-0.0001).toString();
    finalAmount = web3.utils.toWei(finalAmount, 'ether')

    stakingContact.methods.unstake(finalAmount)
    .send({from: getWalletAddress}).then( test => {
        window.location.reload();
        setLoader(false)
    })
    .catch(error => {
      console.log('Getting Errors: ' , error);
      setLoader(false)
    });

  }
  const handleApprove = () => {
    setLoader(true)
    tokenContact.methods.approve(stakingCA, '115792089237316195423570985008687907853269984665640564039457584007913129639935')
    .send({from: getWalletAddress}).then( test => {
        tokenContact.methods.allowance(getWalletAddress,stakingCA).call().then( result => {
        setLoader(false)
        if( result > 1 ){
          setApproveBTN(false)
        }else{
          setApproveBTN(true)
        }
      })
    })
    .catch(error => {
        setLoader(false)
      console.log('Getting Errors: ' , error);
    });
  }
  return (
    <>
      <StackNav connectWallet={connectWallet} btnTitle={getBtnAddress? getBtnAddress: 'Connect Wallet'} wrongNetwork={getErrorType=='wrongNetwork'? true:false} />
      <StackWrapper maxWidth="xxl">
          <GridContainer container>
              <ShaggyImgWrapper item xs={11} sm={5} md={5} lg={5}>
                  <ShaggyHomeImg src="./Mask Group 5.png" />
              </ShaggyImgWrapper>
              <TabSection item xs={12} sm={7} md={7} lg={7}>
              <StackInnerWrapper>
                  <StackHeading>Staking</StackHeading>
                  <TabBox>
                    {getLoader? <Loader><img src="/loader.gif" alt="loader" /></Loader>:null}
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} aria-label="basic tabs example">
                          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <CustomTabs label="Stake" {...a11yProps(0)} />
                          <CustomTabs label="Withdraw" {...a11yProps(1)} />
                          </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                          <TabDivWrapper><DivFirstText>Staking</DivFirstText><StackText>1x</StackText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>APY:</DivFirstText><DivSecondText>130%</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Staked Amount:</DivFirstText><DivSecondText>{getStakedBalanceFormate} $Shaggy</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Current Balance:</DivFirstText><DivSecondText>{getTokenBalanceFormate} $Shaggy</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><HrDivider/></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Amount To Stake:</DivFirstText></TabDivWrapper>
                          <TabDivWrapper>
                            <FieldText 
                              type='number'
                              placeholder='0.0000 $Shaggy'
                              value={getStakingAmount} 
                              onChange={(event, from)=>handleAmount(event, 'staking')} 
                            />
                            <FieldBtn onClick={(event, from, isMax)=>handleAmount(event, 'staking', true)}>Max</FieldBtn>
                          </TabDivWrapper>
                          {getInputError? <TabDivWrapper><p style={{color: 'red', fontSize:12}}>{getInputError}</p></TabDivWrapper>:null}
                          {getApproveBTN?
                            <TabDivWrapper><ApproveBtn onClick={()=>handleApprove()}>Approve</ApproveBtn></TabDivWrapper>
                          : 
                            <TabDivWrapper><ApproveBtn onClick={()=>handleStake()}>Stake</ApproveBtn></TabDivWrapper>
                          }
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                          <TabDivWrapper><DivFirstText>Staking</DivFirstText><StackText>1x</StackText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>APY:</DivFirstText><DivSecondText>130%</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Staked Amount:</DivFirstText><DivSecondText>{getStakedBalanceFormate} $Shaggy</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Current Reward:</DivFirstText><DivSecondText>{getRewardBalanceFormate} $Shaggy</DivSecondText></TabDivWrapper>
                          <TabDivWrapper><DivFirstText></DivFirstText><DivSecondText></DivSecondText></TabDivWrapper>
                          <TabDivWrapper><HrDivider/></TabDivWrapper>
                          <TabDivWrapper><DivFirstText>Amount To Withdraw::</DivFirstText></TabDivWrapper>
                          <TabDivWrapper>
                            <FieldText
                              type='number'
                              placeholder='0.0000 $Shaggy'
                              value={getWithdrawAmount} 
                              onChange={(event, from)=>handleAmount(event, 'withdraw')}   
                            />
                            <FieldBtn2 onClick={(event, from, isMax)=>handleAmount(event, 'withdraw', true)}>Max</FieldBtn2>
                          </TabDivWrapper>
                          <TabDivWrapper>
                          </TabDivWrapper>
                          {/* <TabDivWrapper><ApproveBtn2>Approve</ApproveBtn2></TabDivWrapper> */}
                          {getInputError? <TabDivWrapper><p style={{color: 'red', fontSize:12}}>{getInputError}</p></TabDivWrapper>:null}
                          {getApproveBTN?
                            <TabDivWrapper><ApproveBtn onClick={()=>handleApprove()}>Approve</ApproveBtn></TabDivWrapper>
                          : 
                            <TabDivWrapper><ApproveBtn onClick={()=>handleWithdraw()}>Withdraw</ApproveBtn></TabDivWrapper>
                          }
                      </TabPanel>
                  </TabBox>
              </StackInnerWrapper>
              </TabSection>
              <CopyRightGrid container>
              <Grid item xs={3} sm={4} md={6} lg={6}>
              <button style={{background:'transparent',border:'none'}} onClick={toggleAudio}><CopyRightImg src="./Group 6981.png" alt=""/></button>
                <audio ref={audioRef} src="./audio.mp3" />
          {/* <audio ref={audioRef}>
              <source src="./audio.mp3" type="audio/mpeg" />
          </audio> */}
        {/* <button onClick={toggleAudio}>{isPlaying ? 'Stop' : 'Play'}</button> */}
              </Grid>
              <CopyWrightWrapper item xs={9} sm={8} md={6} lg={6}>
                  <CopyRight>© 2023 by ShaggyToken. All rights reserved!</CopyRight>
              </CopyWrightWrapper>
              </CopyRightGrid>
          </GridContainer>
      </StackWrapper>
    </>
  );
}