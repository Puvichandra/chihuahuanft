import Claimcomp from "../../components/majorcom/claimcomp"
import { useState,useEffect } from 'react'
import {ethers } from "ethers";
import nftabi from "../../contract/abi/nft.json"

//import {AiFillCloseCircle} from 'react-icons/ai'

const Claimrewards = (props) => {
const nftContract=process.env.NEXT_PUBLIC_NFT_CONTRACT
const [tokenContract,setTokenContract]=useState(props.tokenContract)
const [rewardsCollected,setrewardsCollected] = useState(0)
const [claimRewards,setClaimRewards] = useState(0)
const [counter,setCounter] = useState(0)
const divisor=1000000000000000000

useEffect(()=>{
    if(props.caddres!=="Connect Wallet"){
        setTokenContract(new ethers.Contract(nftContract,nftabi,props.csigner));
    }
},[props.caddres])

 useEffect(()=>{
    setInterval(()=>{
        if(tokenContract!=undefined){
            getData()
        }
    },2000)   
    if(tokenContract!=undefined){
        getData()
    }       
   },[props.caddres,tokenContract,claimRewards])



const getData=async ()=>{
        setClaimRewards((Number(await tokenContract.claimAwards())/divisor).toFixed(5))
        setrewardsCollected((Number(await tokenContract.rewardCollected())/divisor).toFixed(5))
}

const claim= async ()=>{
   
    if(Number(claimRewards)===0){
        alert("Your have no rewards to collect")
    } else {
        if(tokenContract!=undefined){
            setTokenContract(new ethers.Contract(nftContract,nftabi,props.csigner));
        } 
        await tokenContract.getRewards()
        
    }
    
   
   
}


  return (
   <Claimcomp claimRewards={claimRewards} rewardsCollected={rewardsCollected} claim={claim} counter={counter}/>

  )
}

export default Claimrewards
