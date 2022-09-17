import Link from 'next/link'
import Image from 'next/image';
import Login from '../majorcom/Login';
import { useEffect, useState } from 'react';






function MainHeader(props){

  const [show, setShow] = useState(false);
//   useEffect(()=>{
//     console.log("mainheader", props)
//   })
  
    return (
        <div className="sticky top-0 z-50 bg-gray-900 text-white">
        <nav className='bg-nftColor'>
            <div className="max-w-9xl mx-auto px-8">
                <div className="flex items-center justify-center h-20">
                    <div className=" flex items-center">
                        
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-40 md:space-x-40 sm:space-x-20 ">
                            
                                <Link href="/"><a className="flex-shrink-0" >
                                <Image className='relative z-30 inline object-cover w-12 h-12 border-20 border-white rounded-full' src="/img/logochi.png" alt="Workflow" width={70} height={70}/>
                                </a></Link>

                                {/* <Link href="/"><a className="text-black font-poppins dark:hover:text-white px-3 py-2 rounded-md text-4xl font-bold -mt-2 xl:text-4xl xl:px-0"  >
                                    Market Place<span className="text-4xl text-txtred">.</span></a></Link> */}
                            
                                <Link  href="/"><a className="text-txtborderColor font-poppins  hover:bg-lightgrey dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium xl:text-sm 2xl:text-md"  >
                                    Home </a></Link>

                                <Link  href="/burnCoinValue"><a className="text-txtborderColor  font-poppins dark:text-white  hover:bg-lightgrey dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium xl:text-sm 2xl:text-md" style={{marginLeft:"auto"}} >
                                   Burnt List</a></Link>

                                   <Link  href="/nftTopHolders"><a className="text-txtborderColor  font-poppins dark:text-white  hover:bg-lightgrey dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium xl:text-sm 2xl:text-md" style={{marginLeft:"auto"}} >
                                   Leader Board</a></Link>
                                   
                             
                                   <Login className="text-white" waddress={props.waddress} wprovider={props.wprovider} wsigner={props.wsigner}/> 

                              
                            </div>
                           
                        </div>
                    </div>
                  
                    <div className="flex w-full flex-row lg:hidden items-center justify-between mt-10 pb-5">
                        {/* <div className="items-start">
                        <a className="text-white font-poppins hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-2xl font-bold -mt-2"  >
                                    jellyfork<span className="text-4xl text-txtred">.</span></a>
                         
                        </div> */}

                        <Link href="/"><a className="flex-shrink-0" >
                                <Image className='relative z-30 inline object-cover w-12 h-12 border-20 border-white rounded-full' src="/img/logochi.png" alt="Workflow" width={70} height={70}/>
                                </a></Link>
                        <div >
                        <button className="text-white dark:text-white hover:text-gray-300 inline-flex items-end justify-end p-2 rounded-md focus:outline-none mobile-menu-button"
                        onClick={() => setShow((s) => !s)}>
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:hidden mobile-menu duration-300 ease-out sm:transition-none"  style={{ display: show ?   "block":"none" }}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/"><a className="text-white font-poppins  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium block">
                    Home
                </a></Link>
                <Link  href="/burnCoinValue"><a className="text-white font-poppins dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium block">
                Burnt List
                </a></Link>

                <Link  href="/nftTopHolders"><a className="text-white font-poppins dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium block">
                Leader Board
                </a></Link>
  
                <Login className="text-white" waddress={props.waddress} wprovider={props.wprovider} wsigner={props.wsigner}/> 
    

                
                </div>
            </div>
        </nav>
    </div>


    )

}

export default MainHeader;