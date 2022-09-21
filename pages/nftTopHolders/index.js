import {useState,useEffect} from 'react';


function NftTopHoldersPage() {
    const [holders,setHolders] = useState([])
    const [timeCaptured,setTimeCaptured] = useState('')
    const getData=()=>{
        fetch(process.env.NEXT_PUBLIC_GET_HOLDERS).then((res)=>res.json()).then((data)=>{setHolders(data.topholders);})
    }

    useEffect(()=>{
        if(holders.length===0){
          getData();
          
        } else {
            var tval=holders[0].datnow
            var theDate = new Date(tval * 1000);
            setTimeCaptured(theDate.toUTCString());
          
        }
         
      },[holders])

      // const convertTime=()=>{
      //   if(holders.length>0){
      //   var tval=holders[0].datnow
      //   var theDate = new Date(tval * 1000);
        
      //  setTimeCaptured(theDate.toUTCString());
      //   }
      // }

      return <div className="py-20 bg-gray-500">
      
    
            
        <div className="pb-4 xl:px-80  text-white ">
        {holders.length>0?<div className="px-5 xl:pl-10 pb-4 text-md xl:text-2xl">Top Holders as of {timeCaptured} </div>:null}
      <div className="flex flex-col bg-transparent mx-4 border-bodygray border-solid border-2 rounded-xl shadow-xl shadow-white">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
            <div >
              <table className="min-w-full  ">
                <thead className="bg-bodygray border-b font-poppins">
                  <tr className="text-txtborderColor">
                  <th scope="col" className="text-xs xl:text-sm font-medium  px-2 xl:px-6 py-4 text-left">
                id
              </th>
              <th scope="col" className="text-xs xl:text-sm  font-medium  px-2 xl:px-6 py-4 text-left">
                Address
              </th>
              <th scope="col" className="text-xs xl:text-sm   font-medium  px-2 xl:px-6 py-4 text-left">
               No Of NFT
              </th>

            
                  </tr>
                </thead>
                <tbody>
                 
            {holders.map((item)=>
         <tr key={item.id}>
            <td className="text-xs xl:text-sm font-light px-2 xl:px-6 py-4 ">{item.id}</td>
            <td className="text-xs xl:text-sm   font-light px-2 xl:px-6 py-4 ">{item.address}</td>
            <td className="text-xs xl:text-sm font-light px-2 xl:px-6 py-4 ">{item.noofnft}</td>
          
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

export default NftTopHoldersPage;