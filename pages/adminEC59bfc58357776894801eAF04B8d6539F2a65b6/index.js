import {useEffect,useState} from 'react';
import abi from '../../contract/abi/nft.json';
import {IbalanceOf,IbaseURI,IburnStatus,IcalculatePrice,
    IfirstHonda,IfirstHondaForRare,IgetBalance,IgetBurntValue,
    IhasFirstHonda,IhasSecondHonda,IhasPreSaleStarted,IhasPublicSaleStarted, 
    IisWhitelisted,IMax_chihua_Per_txn,Iowner,Ipercent,IPRESALE_PRICE,
    IMax_Presale_Supply,IMax_supply,IMaxNftForWhitelist,ImaxNumberOfWhitelistedAddresses,
    InumberOfAddressesWhitelisted,IsecondHonda,ItopHolderAddress} from "../../contract/functiondata/functiondetails"
import {ethers } from "ethers";


function AdminPage(props) {
    const [tokenContract,setTokenContract] = useState(null)
    const nftContract=process.env.NEXT_PUBLIC_NFT_CONTRACT
    const [burncoinlist,setBurntCoinList] = useState([])
    const [instruction,setInstruction] = useState(null)
    const divisor=1000000000000000000;
    
    const [tokenname, setTokenName]=useState('')
    const [tokensymbol, setTokenSymbol]=useState('')
    const [contractowner, setcontractowner]=useState('')
    const [maxsupply, setmaxsupply]=useState(0)
    const [totalminted, settotalminted]=useState(0)
    const [baseuri, setbaseuri]=useState('')
    const [burnstatus, setburnstatus]=useState(false)
    const [burnpercent, setburnpercent]=useState(0)
    const [contractbalance, setcontractbalance]=useState(0)

    const [maxpresalesupply, setmaxpresalesupply]=useState(0)
    const [hasPreSaleStarted, sethasPreSaleStarted]=useState(0)
    const [PRESALE_PRICE, setPRESALE_PRICE]=useState(0)
    const [maxallocatedwhitelist, setmaxallocatedwhitelist]=useState(0)
    const [numberOfAddressesWhitelisted, setnumberOfAddressesWhitelisted]=useState(0)
    const [MaxNftForWhitelist, setMaxNftForWhitelist]=useState(0)

    const [Max_supply, setMax_supply]=useState(0)
    const [hasPublicSaleStarted, sethasPublicSaleStarted]=useState(0)
    const [Max_chihua_Per_txn, setMax_chihua_Per_txn]=useState(0)
    const [slabone, setslabone]=useState(0)
    const [slabtwo, setslabtwo]=useState(0)
    const [slabthree, setslabthree]=useState(0)
    const [slabfour, setslabfour]=useState(0)
    const [slabfive, setslabfive]=useState(0)

    const [firstHonda, setfirstHonda]=useState(0)
    const [secondHonda, setsecondHonda]=useState(0)
    const [hasFirstHonda, sethasFirstHonda]=useState(0)
    const [hasSecondHonda, sethasSecondHonda]=useState(0)
    const [firstHondaForRare, setfirstHondaForRare]=useState(0)
    const [topHolderAddress, settopHolderAddress]=useState(0)
    


const getCommon= async()=>{
        if(props.caddres!=="Connect Wallet"){
        setTokenContract(new ethers.Contract(nftContract,abi,props.csigner));
        if(tokenContract!=null){
        setTokenName(await tokenContract.name())
        setTokenSymbol(await tokenContract.symbol())
        setcontractowner(await tokenContract.owner())
        setmaxsupply(Number(await tokenContract.Max_supply()))
        settotalminted(Number(await tokenContract.totalSupply()))
        setbaseuri(await tokenContract.baseURI())
        setburnstatus(Number(await tokenContract.burnStatus())==0?"false":"true")
        setburnpercent(Number(await tokenContract.percent()))
        setcontractbalance(Number(await tokenContract.getBalance()))

        setmaxpresalesupply(Number(await tokenContract.Max_Presale_Supply()))
        sethasPreSaleStarted(Number(await tokenContract.hasPreSaleStarted())==0?"false":"true")
        setPRESALE_PRICE(Number(await tokenContract.PRESALE_PRICE()))
        setmaxallocatedwhitelist(Number(await tokenContract.maxNumberOfWhitelistedAddresses()))
        setnumberOfAddressesWhitelisted(Number(await tokenContract.numberOfAddressesWhitelisted()))
        setMaxNftForWhitelist(Number(await tokenContract.MaxNftForWhitelist()))

        setMax_supply(maxsupply-maxpresalesupply)
        sethasPublicSaleStarted(Number(await tokenContract.hasPublicSaleStarted())==0?"false":"true")
        setMax_chihua_Per_txn(Number(await tokenContract.Max_chihua_Per_txn()))
        setslabone(Number(await tokenContract.publicSalePrices(1)))
        setslabtwo(Number(await tokenContract.publicSalePrices(2)))
        setslabthree(Number(await tokenContract.publicSalePrices(3)))
        setslabfour(Number(await tokenContract.publicSalePrices(4)))
        setslabfive(Number(await tokenContract.publicSalePrices(5)))

        setfirstHonda(Number(await tokenContract.firstHonda()))
        setsecondHonda(Number(await tokenContract.secondHonda()))
        sethasFirstHonda(Number(await tokenContract.hasFirstHonda())==0?"false":"true")
        sethasSecondHonda(Number(await tokenContract.hasSecondHonda())==0?"false":"true")
        setfirstHondaForRare(Number(await tokenContract.firstHondaForRare()))
        settopHolderAddress(await tokenContract.topHolderAddress())
        } else {
            alert("Connect Wallet")
        }
    }

}


  return (
    
    <div className='px-10 bg-gray-300  py-10'>
       {instruction? <div className="max-w-full rounded overflow-hidden shadow-xl shadow-white py-10 px-10 text-2xl font-medium bg-slate-600 text-white">
       {instruction}
           </div>:null}

        <button className="text-2xl bg-slate-800 text-white p-5 rounded-xl" onClick={()=>getCommon()}>Update</button>
    <div className='flex flex-rows flex-wrap justify-items-stretch justify-center  mt-5'>
    <div className="basis-4/12">
    
        <div class="max-w-full rounded overflow-hidden shadow-xl shadow-white">
        <div className='text-center text-2xl font-medium font-Press bg-slate-600 text-white'>Other Functions</div>
        <div className='px-5 py-1' >addUserAddressToWhitelist(address _addressToWhitelist)</div>
        <div className='px-5 py-1'>airdropMint(address recipient, uint amount)</div>
        <div className='px-5 py-1'>burn(uint256 chiHuaToBurn)</div>
        <div className='px-5 py-1' >changeBurnCoinAddress(address newAddress)</div>
        <div className='px-5 py-1' >claimFirstHonda()</div>
        <div className='px-5 py-1'  >claimSecondHonda()</div>
        <div className='px-5 py-1' >grantFirstHonda()</div>
        <div className='px-5 py-1' >grantSecondHonda()</div>
        <div className='px-5 py-1'>mintPresale(uint256 amount)</div>
        <div className='px-5 py-1'>mintPublicsale(uint256 amount)</div>
        <div className='px-5 py-1' >removeUserAddressFromWhitelist(address _addressToRemove)</div>
        <div className='px-5 py-1'  >renounceOwnership()</div>
        <div className='px-5 py-1'>reservechi(uint256 chiHuaclub)</div>
        <div className='px-5 py-1' >setBaseURI(string memory baseURI)</div>
        <div className='px-5 py-1'  >setBurnPercentage(uint percentage)</div>
        <div className='px-5 py-1' >setBurnStatus(bool status)</div>
        <div className='px-5 py-1' >setMax_chihua_Per_txn(uint noOfToken )</div>
        <div className='px-5 py-1'>setMaxNftForWhitelist(uint noForWhitelist )</div>
        <div className='px-5 py-1'>setMaxNumberOfWhiteList(uint noOfaddresses)</div>
        <div className='px-5 py-1' >setMaxPresaleSupply(uint256 preSaleSupply)</div>
        <div className='px-5 py-1'  >setPresalePrice(uint256 preSaleprice)</div>
        <div className='px-5 py-1' >setPublicSaleSlabPrice(uint slab, uint256 price)</div>
        <div className='px-5 py-1' >setRareNft(uint rarenFt)</div>
        <div className='px-5 py-1' >setTopNftHolder(address newaddress)</div>
        <div className='px-5 py-1'>startPublicSale()</div>
        <div className='px-5 py-1'>stopPublicSale()</div>
        <div className='px-5 py-1' >startPresale()</div>
        <div className='px-5 py-1'  >stopPresale()</div>
        <div className='px-5 py-1' >stopFirstHonda() </div>
        <div className='px-5 py-1' >stopSecondHonda()</div>
        <div className='px-5 py-1'>transferFrom(address from, address to, uint256 tokenId)</div>
        <div className='px-5 py-1'>transferOwnership(address newOwner)</div>
        <div className='px-5 py-1' >withdrawAll()</div>

        
        </div>

    </div>
    <div className="basis-7/12">
    <div className='flex flex-rows flex-wrap justify-items-stretch justify-center gap-2 '>
        <div className="basis-5/12">
        <div class="max-w-full rounded overflow-hidden shadow-xl shadow-white">
        <div className='text-center text-2xl font-medium font-Press bg-slate-600 text-white'> Common Data</div>
        <div className='px-5 py-1 bg-red-300 '>Name: {tokenname}</div>
        <div className='px-5 py-1 bg-red-300'>Symbol: {tokensymbol}</div>
        <div className='px-5 py-1 bg-red-300' onClick={()=>setInstruction(Iowner())}>Owner; {contractowner}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IMax_supply())}>Max Supply: {maxsupply}</div>
        <div className='px-5 py-1  bg-red-300'>Total Minted: {totalminted}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IbaseURI())}>Base URI: {baseuri}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IburnStatus())}>burn Status: {burnstatus}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(Ipercent())}>burn percentage: {burnpercent}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IgetBalance())}>Contract Balance: {contractbalance} ({contractbalance/divisor} bnb)</div>
         </div>
        </div>

        <div className="basis-5/12">
        <div class="max-w-full rounded overflow-hidden shadow-xl shadow-white">
        <div className='text-center text-2xl font-medium font-Press bg-slate-600 text-white'> Pre Sale</div>
        <div className='px-5 py-1'  onClick={()=>setInstruction(IMax_Presale_Supply())} >Presale Supply: {maxpresalesupply}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IhasPreSaleStarted())}>PreSale Started: {hasPreSaleStarted}</div>
        <div className='px-5 py-1'  onClick={()=>setInstruction(IPRESALE_PRICE())} >Presale Price: {PRESALE_PRICE} ({PRESALE_PRICE/divisor} bnb)</div>
        <div className='px-5 py-1'  onClick={()=>setInstruction(ImaxNumberOfWhitelistedAddresses())} >Max allocated White List: {maxallocatedwhitelist}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(InumberOfAddressesWhitelisted())}>Current Whitelisted: {numberOfAddressesWhitelisted}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IMaxNftForWhitelist())} >Max NFT Allowed: {MaxNftForWhitelist}</div>
        </div>
        </div>

        
       
        

        <div className="basis-5/12">
        <div class="max-w-full rounded overflow-hidden shadow-xl shadow-white">
        <div className='text-center text-2xl font-medium font-Press bg-slate-600 text-white'> Public Sale</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IMax_supply())}>Public Supply:{Max_supply}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IhasPublicSaleStarted())}>Public sale Started:{hasPublicSaleStarted}</div>
        <div className='px-5 py-1'onClick={()=>setInstruction(IMax_chihua_Per_txn())}>Max Per Transactions:{Max_chihua_Per_txn}</div>
        <div className='px-5 py-1'>PSPrice 0-500: {slabone} ({slabone/divisor} bnb)</div>
        <div className='px-5 py-1'>PSPrice 500-2500: {slabtwo} ({slabtwo/divisor} bnb)</div>
        <div className='px-5 py-1'>PSPrice 2500-5000: {slabthree} ({slabthree/divisor} bnb)</div>
        <div className='px-5 py-1'>PSPrice 5000-7500: {slabfour} ({slabfour/divisor} bnb)</div>
        <div className='px-5 py-1'>PSPrice 7500-10000: {slabfive} ({slabfive/divisor} bnb)</div>
 
        </div>
        </div>


       
        <div className="basis-5/12">
        <div class="max-w-full rounded overflow-hidden shadow-xl shadow-white">
        <div className='text-center text-2xl font-medium font-Press bg-slate-600 text-white'>Prizes</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IfirstHonda())}>First Honda Prize: {firstHonda} ({firstHonda/divisor} bnb)</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IsecondHonda())}>Second Honda Prize: {secondHonda}  ({secondHonda/divisor} bnb)</div>
        <div className='px-5 py-1'onClick={()=>setInstruction(IhasFirstHonda())}>First Honda Approved: {hasFirstHonda}</div>
        <div className='px-5 py-1'onClick={()=>setInstruction(IhasSecondHonda())}>Second Honda Approved: {hasSecondHonda}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(IfirstHondaForRare())}>Rare NFT Number : {firstHondaForRare}</div>
        <div className='px-5 py-1' onClick={()=>setInstruction(ItopHolderAddress())} >Highest NFT Holder : {topHolderAddress}</div>
        </div>
        </div>

      
     
    </div>
    </div>
  
    </div>
    </div>
  )
}

export default AdminPage