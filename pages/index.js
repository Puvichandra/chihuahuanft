import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {ethers } from "ethers";
import axios from 'axios';
import MintComp from "../components/mintcom/mintcomp";
import nftabi from "../contract/abi/nft.json"



export default function Home(props) {


 

<Head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap" rel="stylesheet"/>
</Head>


const nftContract=process.env.NEXT_PUBLIC_NFT_CONTRACT
const [tokenContract,setTokenContract] = useState(null)
const [totalMinted,setTotalMinted]=useState(0)
const [IsPresaleStarted,setIsPresaleStarted]=useState(false)
const [IsPublicsaleStarted,setIsPublicsaleStarted]=useState(false)
const [presaleSupply,setPresaleSupply]=useState(0)
const [isWhiteListed,setIsWhiteListed]=useState(false)
const [maxSupply,setMaxSupply]=useState(0)
const [preSalePrice,setPreSalePrice]=useState(0)
const [publicPrice,setPublicPrice]=useState(0)
//const [nftnumber,setNftNumber]=useState(0)
const abi=nftabi;

useEffect(()=>{
  setInterval(() => {
     if(tokenContract!=null){
      getTokenData();
    }
   
  }, 2000);
  calcPublicPrice(1)
 },[])

useEffect(()=>{
  setInterval(()=>{
    if(props.caddres!=="Connect Wallet"){
      setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
      }
  },2000) 
 },[props.caddres])

 useEffect(()=>{
  if(tokenContract!=null){
    getTokenData();
  }  
 },[props.caddres,tokenContract,IsPresaleStarted,IsPublicsaleStarted,isWhiteListed])


const getTokenData= async ()=>{
    //setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
    setTotalMinted(await tokenContract.totalSupply());
    setIsPresaleStarted(await tokenContract.hasPreSaleStarted());
    setIsPublicsaleStarted(await tokenContract.hasPublicSaleStarted());
    setPresaleSupply(await tokenContract.Max_Presale_Supply());
    setIsWhiteListed(await tokenContract.isWhitelisted(props.caddres));
    setMaxSupply(await tokenContract.Max_supply());
    setPreSalePrice(await tokenContract.PRESALE_PRICE());
 
  }

  const calcPublicPrice= async (nftnumber)=>{
      if(tokenContract!=null){
        if(IsPublicsaleStarted){
      setPublicPrice(await tokenContract.calculatePrice(nftnumber))
      } else if(IsPresaleStarted){
        setPublicPrice(preSalePrice*nftnumber)
      }
       }  
   }

 
  async function minttoken(nftNumber,publicPrice){
   //console.log(nftNumber);
    let transaction;
      if(nftNumber<=0){
         alert("Please Enter positive number" );
      return;
      } else if (nftNumber>20){
         alert("Please Enter numbers between 0 to 20" );
      return;
      }
    
      try{
        if(IsPresaleStarted && !IsPublicsaleStarted && tokenContract!=null){
         transaction=await tokenContract.mintPresale(nftNumber,{value: BigInt(publicPrice)})
        } else if (!IsPresaleStarted && IsPublicsaleStarted && tokenContract!=null){
         transaction=await tokenContract.mintPublicsale(nftNumber,{value: BigInt(publicPrice)})
        }
         const transactionReceipt = await transaction.wait();
      
        if (transactionReceipt.status !== 1) {
            alert('error message');
            return;}
         } catch(err) {
              try{
                alert(err.error.data.message);
                return;
              } catch (err){
                alert(err.error.data.message);
                return;
              }
            
        }
     
  }
  






  return    <div className='bg-slate-600  font-Press font-bold -top-44'> 
  
    <MintComp  connectwallet={props.caddres} appprovider={props.cprovider} totMinted={totalMinted}
      IsPresaleStarted={IsPresaleStarted} IsPublicsaleStarted={IsPublicsaleStarted}
      presaleSupply={presaleSupply}  isWhiteListed={isWhiteListed} maxSupply={maxSupply}
      preSalePrice={preSalePrice} calcPublicPrice={calcPublicPrice} publicPrice={publicPrice} minttoken={minttoken}
    />
  
    </div>

}