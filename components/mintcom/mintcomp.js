import { useEffect, useState } from 'react';
//import { Progress } from "@material-tailwind/react";
import Progressbar from "../ui/progressbartw";

export default function Mintcomponent(props) {
    // const [isPresale, setIsPreSale]=useState(false);
    // const [ispublicsale, setIsPublicSale]=useState(false);
    // const [isSaleActive, setIsSaelActive]=useState(false);
    // const [iswhiteListed, setIsWhiteListed]=useState(props.isWhiteListed);
    const [wlistedText, setWlistedText]=useState('');
    const [count, setCount]=useState(1);
    const [cval, setCval]=useState(0);
   
    const nftval=35000000000000000/100000000000000000;
    let isPresale=props.IsPresaleStarted;
    let ispublicsale = props.IsPublicsaleStarted;
    let iswhiteListed= props.isWhiteListed; 
    let totpresalenft=Number(props.presaleSupply);
    let totalnft=Number(props.maxSupply)
    let totalSold=Number(props.totMinted)
    let percent=0;
    let totnft=0


        // useEffect(()=>{
        //     props.calcPublicPrice(1)  
        //     },[])

       useEffect(()=>{
        calculateValue()
       },[count])

        useEffect(()=>{
        salecheck()
        preOrPubliccheck() 
        setTextforWhiteListed()
        props.calcPublicPrice(count)  
       
        },[props])    


        
        const salecheck =()=>{
     
            if(!isPresale && !ispublicsale){
                return 'Sale is Not Active'
            } else if (isPresale ||ispublicsale){
                if(props.connectwallet==="Connect Wallet"||props.connectwallet===undefined){
                    return "Connect Wallet";
                } else {
                    return null;
                }
               
            }
        }


        const preOrPubliccheck =()=>{
            if(isPresale&& !ispublicsale){
                percent=(totalSold/totpresalenft) * 100;
                totnft=Number(totpresalenft);
                return 'PRE-SALE';
            } else if (!isPresale && ispublicsale){
                percent=(totalSold/totalnft ) * 100;
                totnft=totalnft;
                return "PUBLIC SALE";
            } else {
                return null;
            }
        }
    


    const setTextforWhiteListed=()=>{
       if(preOrPubliccheck()==='PRE-SALE' && salecheck()===null){
        if(iswhiteListed){
            setWlistedText("You are White Listed! You can mint")
        } else {
            setWlistedText("You are not White Listed!")
        }
      }
    }


 

    const calculateValue=(sign)=>{
        if(sign==="-"){
            if(count>1){
                setCount(count-1)
            } else {
                setCount(1)
            }
        } else if(sign==="+"){
            if(count<20){
                setCount(count+1)
            } else {
                setCount(20)
            }
        } 

        //setCval((nftval*count).toFixed(2))
        props.calcPublicPrice(count)
       
    }


  return (
<div>

  <div className='flex  flex-row justify-center xl:pt-4 xl:pb-2'>
    <div className='basis-9/12 xl:basis-6/12'>
    <div className='text-center font-Press text-white py-5 font-black text-2xl xl:text-4xl'>{preOrPubliccheck()}</div>
    {isPresale?<div className='text-center font-Press w-full text-white py-5 text-lg xl:text-2xl' >{wlistedText}</div>:null}
    {isPresale|| ispublicsale?<Progressbar done={percent.toFixed()} totnft={totnft} totsold={totalSold}/>:null}
    </div>
    </div>
    
    <div className='flex  flex-row justify-center py-10 xl:py-5 '>
    <div className=' basis-10/12 xl:basis-6/12'>
  <div className=' bg-slate-600 border-solid  shadow-lg shadow-black rounded-2xl   border-2'>
  <div className='text-center font-Press text-white py-4 font-black text-2xl xl:text-4xl'>{salecheck()}</div>


  <div className='text-center font-Press text-white py-5 text-2xl xl:text-4xl'>MINT YOUR NFT</div>
 

  <div className='text-center text-white text-lg xl:text-2xl font-Press'> Value: {props.publicPrice/100000000000000000}  bnb</div>
   <div className="flex flex-row justify-center gap-2 py-5">
   <div className='basis-2/12 text-center hover:bg-red-400  bg-red-300 rounded-full'>
    <button className='h-10 xl:h-16 text-2xl xl:text-4xl'  onClick={()=>calculateValue("-")}> - </button>
   </div>
   <div className='basis-6/12 h-10 xl:h-16 text-center bg-white   '>
    <button className='h-10 xl:h-16 text-2xl xl:text-4xl font-Press'> {count}</button>
   </div>

   
   <div className='basis-2/12 text-center hover:bg-red-400 bg-red-300 rounded-full'>
    <button className='h-10 xl:h-16 text-2xl xl:text-4xl'  onClick={()=>calculateValue("+")}> + </button>
   </div>


   </div>
   
   <div className='text-center text-white'>
    Min:1  Max:20
   </div>

   <div className="flex flex-row justify-center gap-2 py-10">
   
   <div className='basis-6/12 text-center hover:bg-red-400 bg-red-300 rounded-full'>
   {isPresale || ispublicsale?<button className='h-10 xl:h-16  text-2xl xl:text-4xl font-Press' onClick={()=>props.minttoken(count,props.publicPrice)}> Mint </button>:<button className='h-10 xl: h-16  font-Press text-2xl xl:text-4xl disabled:'> Mint </button>}
   </div>
 

   </div>


  </div>
    </div>
   </div>
   <div>{isPresale}</div>
   </div>
  )
}
