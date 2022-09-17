import  { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import classes from "../majorcom/login.module.css"

export default function Login(props) {

    const[address,setAddress] =useState("Connect Wallet")
    const[shortaddress,setShortAddress] =useState("Connect Wallet")
    const[isopen,setIsopen] =useState(false)
    const [web3provider,setWeb3Provider] = useState(null);
    const [signer,setSigner] = useState(null);
    const [btncaption,setButtonCaption] = useState('Connect Wallet');
    //console.log("login",props)
   

    useEffect(()=>{
        if(isopen){
            setButtonCaption(waladdress)
           
        } else {
            setButtonCaption('Connect Wallet') 
        }
       props.waddress(address)
       props.wprovider(web3provider) 
       props.wsigner(signer)
       
       

    },[isopen])


    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
             options: {
                rpc: {
                56: 'https://bsc-dataseed.binance.org/'
              },
              network: 'binance',
              chainId: 56,
              infuraId: '2499b077f4de43f39fe538662cd916d1',
        }
        },
      
        }


        const waladdress=()=>{
            if(address){
            const leng=address.length;
            const fullstr = String(address)
            const wadd= fullstr.substring(0,5)+"..."+fullstr.substring(leng-5,leng)
            return wadd;
            }
           }


        async function connectwallet(){
            try{
            
              let web3Modal = new Web3Modal({
              cacheProvider: false, // optional
              providerOptions,// required
              });
              const instance = await web3Modal.connect();
              const provider = new ethers.providers.Web3Provider(instance);
              addresssetfunc(provider)
              }catch(err) {
              console.error(err);
            }
          }


          
async function disconnect () {
    console.log("Killing the wallet connection", web3provider);
      setIsopen(false)
     if(web3provider.close) {
        
      await web3provider.close();
      await Web3Modal.clearCachedProvider();
      setSigner(null)
      setWeb3Provider(null)
     
    }
    location.reload();
  
  }
         
  
  const addresssetfunc=(provider)=>{
    try {
      if(provider.provider.wc.protocol==='wc'){
        setWeb3Provider(provider);
        setAddress(provider.provider.accounts[0])
        setSigner(provider.getSigner())
        setIsopen(true)
         } }catch (e) {
          console.log(e)
         }
      
         try{
      if (provider.connection.url==='metamask'){
        setAddress(provider.provider.selectedAddress)
        setIsopen(true)
        setWeb3Provider(provider);
        setSigner(provider.getSigner())
      } 
    } catch (e) {
      console.log(e)
    }
  }

  return (
 
    <button  onClick={!isopen?connectwallet:disconnect } className={classes.connect__wallet}> {btncaption}   
   </button> 
  
    
  )
}
