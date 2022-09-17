import '../styles/globals.css'
import Layout from '../components/ui/layout';
import { createContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress, { set } from 'nprogress';
import { BallTriangle} from  'react-loader-spinner';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  //console.log("app")
  const router = useRouter()
  const [isLoading,setIsLoading] =useState(false);
  const [walletaddress, setWalletAddress] =useState("Connect Wallet")
  const [w3provider, setw3provider] =useState(null)
  const [w3signer, setw3signer] =useState(null)
  //const waladdress= createContext()
  //console.log("app", walletaddress)

  useEffect(() => {
    const handleStart = (url) => {
      setIsLoading(true)
      //console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      setIsLoading(false)
      //console.log(`completed`)
      NProgress.done()
    }

 

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router,w3provider])

  return (
  
  <Layout waddress={setWalletAddress} wprovider={setw3provider} wsigner={setw3signer} >
    {isLoading?<div className='w-screen h-screen opacity-40 '>
    <div className='absolute left-1/2 top-1/2 w-32  h-32 bg-transparent m-auto'>
    <BallTriangle color='white' height="100" width="100" ariaLabel='loading'/>
    </div></div>:<Component {...pageProps} caddres={ walletaddress} cprovider={w3provider} csigner={w3signer}/>}
  </Layout>
 
  )
 
}



export default MyApp
