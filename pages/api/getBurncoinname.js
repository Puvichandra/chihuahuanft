import { connectDatabse} from '../../helpers/db-utils'

export default async function handler(req, res) {
 let client;
    
 if(req.method==='GET'){
    try{
        client=await connectDatabse('coindata');
    } catch {
        res.status(500).json({message:"Database connection failed"})
        return;
    }
    
    try {
        const db=client.db();
        
        const documents = await db.collection('burncoindata').find({}, {projection:{"coinaddress":1, "coinname":1, }} ).sort({"id":1}).toArray();
       // console.log(documents)
        res.status(201).json({burnnames:documents})
       
    } catch {
        res. status(500).json({message:'Unable to get documents'})
    }
    
    client.close();
 }




}