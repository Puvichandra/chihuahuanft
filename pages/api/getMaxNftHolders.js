import { connectDatabse} from '../../helpers/db-utils';
import axios from 'axios';

export default async function handler(req, res) {
    
   const address = process.env.NEXT_PUBLIC_NFT_CONTRACT;
   // const address = '0x8D7B8680a042eC7f667AEeb7De2CD1EF472373D8';
   const chain= "bsc";
    var nftsData=[];
    var cursor="";
    var time=0;
    //const chain= "bsc testnet";


    var interval = setInterval( async function() { 
        if (cursor!=null) { 
          time++

        await axios.get(`https://deep-index.moralis.io/api/v2/nft/${address}/owners?chain=bsc%20testnet&format=decimal&cursor=${cursor}`,
         {
            headers:{
                accept:"application/json",
                "X-API-Key":"dOmygySd2aaSVl4CzyQNluv62slJ8aKH2FXRREuWfwOzpataFhisQSbrfJjOfEwU",
            },
         }).then((res)=>
         { 
            console.log(res.data.cursor);
         cursor=res.data.cursor;                            
         for (let i=0;i<res.data.result.length;i++){
             const newdata={
                 id:res.data.result[i].token_id,
                 address:res.data.result[i].owner_of,
             }
            
             nftsData.push(newdata)
                                  
      }
         })
    //------------------------------------------------------------------     
                
          
         }
         else { 
            clearInterval(interval);
            //console.log(nftsData)
            let tempResult = {}
            let sliceresult=0
            for(let { address } of nftsData)
              tempResult[address] = { 
                   address, 
                  count: tempResult[address] ? tempResult[address].count + 1 : 1
              }      
        
            let result = Object.values(tempResult)
            //sorting by count
            result.sort(function(a,b){
              return   b.count-a.count;
            })
            if(result.length>10){
               sliceresult=result.slice(0,10);
            } else {
                sliceresult=result;
            }
            const datnow=Math.floor(Date.now() /1000);
            for(let m=0;m<sliceresult.length;m++){
             updateMongo(sliceresult[m].address, sliceresult[m].count, m+1, datnow)
            }

            res.status(200).json({message:"Succeed"})
           
         }
      }, 5000);

 }





const updateMongo= async (address,count,id,datnow)=>{
try{
let  client=await connectDatabse('coindata');
const db=client.db();
await db.collection('jftopnftholders').updateOne({id:id},{$set:{address:address,noofnft:count, datnow:datnow}},{ upsert:true})    
client.close()
} catch {
    console.log("error")
  }
}


