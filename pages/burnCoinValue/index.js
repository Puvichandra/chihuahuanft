import {useEffect,useState} from 'react';
import abi from '../../contract/abi/nft.json';
import {ethers } from "ethers";


function BurnCoinValuePage(props) {
    const [tokenContract,setTokenContract] = useState(null)
    const nftContract=process.env.NEXT_PUBLIC_NFT_CONTRACT
    const [burncoinlist,setBurntCoinList] = useState([])

    useEffect(()=>{
        
          if(props.caddres!=="Connect Wallet"){
            setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
           
            }
       
       },[props.caddres])


 const findBurnCollection=async ()=>{
    let newlist=[];
    let result=[];
    if(props.caddres==="Connect Wallet"){
        alert("Please Connect to wallet")
        return
    }else{
       
        setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
    }
      
      
    for (let i=0;i<20;i++){
        try{
            setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
            if(tokenContract!=null){
                const adress=await tokenContract.burntAddress(i);
                newlist.push(adress)
               // console.log(adress)
              }  
        } catch(e){
            
            //console.log(newlist)
            break;
            
        }
    }

    
        try{
       let lstcount=newlist.length;
       for( let k=0;k<lstcount;k++) {
        const address=newlist[k];
          if(tokenContract!=null){
            const burntval=await tokenContract.getBurntValue(address)
            const newslt={
               "address":address,
               "bnbval":Number(burntval/1000000000000000000).toFixed(5)
            }

          result.push(newslt)  
          }  
         
         
       
       }    
       setBurntCoinList(result);

        } catch(e){
            console.log("error2")
        }

   
 }


 return <div className="h-screen py-20 bg-gray-500">
      
    
            
 <div className="pb-4 2xl:px-96  text-white text-md xl:text-xl">
   <div className='inline-block pl-10'>
    <button className= 'bg-slate-800 text-center rounded-2xl px-2 xl:px-10 py-2' onClick={()=>findBurnCollection()}>Update</button>
  </div>
<div className="pl-10 pb-4 inline-block">List of Burnt Coins</div>
<div className="flex flex-col bg-transparent mx-4 border-bodygray border-solid border-2 rounded-xl shadow-xl shadow-white">
 <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
   <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
     <div >
       <table className="min-w-full overflow-x-scroll ">
         <thead className="bg-bodygray border-b font-poppins">
           <tr className="text-txtborderColor">
           <th scope="col" className="text-xs xl:text-sm  font-medium px-2 xl:px-6 xl:py-4 text-left">
          Address
         </th>
        <th scope="col" className="text-xs xl:text-sm  font-medium px-2 xl:px-6 xl:py-4 text-left">
            Burnt Value(bnb)
        </th>
      

     
           </tr>
         </thead>
         <tbody>
          
     {burncoinlist.map((item,index)=>
  <tr key={index}>
  
     <td className="text-xs xl:text-sm  font-light px-2 xl:px-6 py-4 whitespace-pre-wrap ">{item.address}</td>
     <td className="text-xs xl:text-sm  font-light px-2 xl:px-6 py-4 ">{item.bnbval}</td>
   
 </tr>
  )}

        
         </tbody>
       </table>
     </div>
   </div>
 </div>
</div>
 
</div>




</div>
}

export default BurnCoinValuePage