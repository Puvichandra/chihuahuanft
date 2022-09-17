export const IbalanceOf=()=>{
    return (
        <>
    <div> Function: balanceOf() </div>
    <div> Argument: address </div>
    <div> returns: Integer </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns Number of NFT holds by this address </div>
        </>
    )

}

export const IbaseURI=()=>{
    return (
        <>
    <div> Function: baseURI() </div>
    <div> returns: URI String </div>
    <div className="bg-red-700"> Set:function setBaseURI( URI string) Accessible only by owner- sets base uri anytime </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns base URi String </div>
        </>
    )

}

export const IburnStatus=()=>{
    return (
        <>
    <div> Function:burnStatus() </div>
    <div> returns: boolean (true or false) </div>
    <div className="bg-red-700"> Set:function setBurnStatus(bool status) Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: true means it will burn at every mint, false will not burn </div>
        </>
    )

}

export const IcalculatePrice=()=>{
    return (
        <>
    <div> Function:calculatePrice() </div>
    <div> Argument: nooftoken (integer) </div>
    <div> condition1: public sale should be started condition 2:total minted must be lessthan Max supply </div>
    <div> returns: Integer (value in wei) </div>
    <div className="bg-red-700"> Set:function setPublicSaleSlabPrice(uint slab, uint256 Price) Access only by owner 
    conditon 1:slab lessthan 6  condition two:price(wei) greaterthan 0 </div>
    <div> Access: Anybody </div>
    <div> descriptions: calculate values of for all tokens in line with total minted </div>
        </>
    )

}

export const IfirstHonda=()=>{
    return (
        <>
    <div> Function:firstHonda() </div>
    <div> returns: Integer (value in wei) </div>
    <div> Access: Anybody </div>
    <div> descriptions: First Honda Price </div>
        </>
    )
}

export const IfirstHondaForRare=()=>{
    return (
        <>
    <div> Function:firstHondaForRare() </div>
    <div> returns: Integer (tokenId) </div>
    <div className="bg-red-700"> Set:function setRareNft(uint rarenft), Access only by owner ,
    conditon 1:totalminted==Max supply </div>
    <div> Access: Anybody </div>
    <div> descriptions: Token Id of rare NFT, initially set above 10000 </div>
        </>
    )
}

export const IgetBalance=()=>{
    return (
        <>
    <div> Function:getBalance() </div>
    <div> returns: Integer (value in wei) </div>
    <div> Access: Anybody </div>
    <div> descriptions: Balance at this Contract Address </div>
        </>
    )
}

export const IgetBurntValue=()=>{
    return (   
        <>
    <div> Function:getBurntValue() </div>
    <div> Argument: Burn Coin Address (address) </div>
    <div> condition: Total minted atleast more than one </div>
    <div> returns: Integer (value in wei) </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns no of wei burnt for this particular coin </div>
        </>
    )
}


export const IhasFirstHonda=()=>{
    return (   
        <>
    <div> Function:hasFirstHonda() </div>
    <div> returns: boolean </div>
    <div className="bg-red-700"> Set:function grantFirstHonda(), Access only by owner ,
     conditon 1:totalminted==Max supply </div>
     <div className="bg-red-700"> Set:function stopFirstHonda(), Access only by owner ,
     conditon 1:totalminted==Max supply </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns FirstHonda prize Status.
     Status true grants permission to claimer.
      Status false stops permission to claimer </div>
        </>
    )
}

export const IhasSecondHonda=()=>{
    return (   
        <>
    <div> Function:hasSecondHonda() </div>
    <div> returns: boolean </div>
    <div className="bg-red-700"> Set:function grantSecondHonda(), Access only by owner ,
     conditon 1:totalminted==Max supply </div>
     <div className="bg-red-700"> Set:function stopSecondHonda(), Access only by owner ,
     conditon 1:totalminted==Max supply </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns SecondHonda prize Status.
     Status true grants permission to claimer.
      Status false stops permission to claimer </div>
        </>
    )
}

export const IhasPreSaleStarted=()=>{
    return (   
        <>
    <div> Function:hasPreSaleStarted() </div>
    <div> returns: boolean </div>
    <div className="bg-red-700"> Set:function startPresale(), condition:public sale to be stopped, Access only by owner hasPreSaleStarted=true </div>
    <div className="bg-red-700"> Set:function stopPresale(), Access only by owner hasPreSaleStarted=false</div>
    <div> Access: Anybody </div>
    <div> descriptions: returns status of presale.true-presale started, false-presale stopped.
    </div>
        </>
    )
}

export const IhasPublicSaleStarted=()=>{
    return (   
        <>
    <div> Function:hasPublicSaleStarted() </div>
    <div> returns: boolean </div>
    <div className="bg-red-700"> Set:function startPublicSale(), condition:Pre sale to be stopped, Access only by owner hasPublicSaleStarted=true </div>
    <div className="bg-red-700"> Set:function stopPublicSale(), Access only by owner hasPublicSaleStarted=false</div>
    <div> Access: Anybody </div>
    <div> descriptions: returns status of Public sale.true-presale started, false-presale stopped.
    </div>
        </>
    )
}

export const IisWhitelisted=()=>{
    return (   
        <>
    <div> Function:isWhitelisted() </div>
    <div> Argument:address </div>
    <div> returns: boolean </div>
    <div className="bg-red-700"> Set:function addUserAddressToWhitelist(address _addressToWhitelist), condition:Not Whitelisted earlier,
     condition 2: current whitelisted numbers should be allocated whitelist.
     Action 1: setting mappin boolean true like ...whitelistedAddresses[_addressToWhitelist] = true;
     Action 2: numberOfAddressesWhitelisted += 1 adding whitelist numbers
      Access only by owner  </div>

      <div className="bg-red-700"> Set:function removeUserAddressFromWhitelist(address _addressToRemove), condition:Not Whitelisted earlier,
     condition 2: current whitelisted numbers should be allocated whitelist.
     Action 1: setting mappin boolean false like ...whitelistedAddresses[_addressToRemove] = false;
     Action 2: numberOfAddressesWhitelisted -= 1 adding whitelist numbers
      Access only by owner  </div> 
   
    <div> Access: Anybody </div>
    <div> descriptions: returns status of Public sale.true-presale started, false-presale stopped.
    </div>
        </>
    )
}

export const IMax_chihua_Per_txn=()=>{
    return (   
        <>
    <div> Function:Max_chihua_Per_txn() </div>
    <div> returns: Integer </div>
    <div className="bg-red-700"> Set:function setMax_chihua_Per_txn(uint noOfToken ),  Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns max number of tokens that can be minted during public sale.
    </div>
        </>
    )
}

export const IMax_Presale_Supply=()=>{
    return (   
        <>
    <div> Function:Max_Presale_Supply() </div>
    <div> returns: Integer </div>
    <div className="bg-red-700"> Set:function setMaxPresaleSupply(uint256 preSaleSupply),  Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns max number of presale supply.
    </div>
        </>
    )
}

export const IMax_supply=()=>{
    return (   
        <>
    <div> Function:Max_supply() </div>
    <div> returns: Integer </div>
    <div className="bg-red-700"> To reduce Max supply, Set:function burn(uint256 chiHuaToBurn), 
    condition 1:chiHuaToBurn  gt 0 && chiHuaToBurn lte 1000,
    Action1:uint NewChiHuaClub = Max_supply- chiHuaToBurn,
    Condition2:totalSupply() lte NewChiHuaClub, Max_supply= NewChiHuaClub  Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns max supply.
    </div>
        </>
    )
}

export const IMaxNftForWhitelist=()=>{
    return (   
        <>
    <div> Function:MaxNftForWhitelist() </div>
    <div> returns: Integer </div>
    <div className="bg-red-700">  Set:function setMaxNftForWhitelist(uint noForWhitelist ), 
     Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns max NFT for each  white list.
    </div>
        </>
    )
}

export const ImaxNumberOfWhitelistedAddresses=()=>{
    return (   
        <>
    <div> Function:maxNumberOfWhitelistedAddresses() initialised in constructor </div>
    <div> returns: Integer </div>
    <div className="bg-red-700">  Set:function setMaxNumberOfWhiteList(uint noOfaddresses), 
     Access only by owner </div>
    <div> Access: Anybody </div>
    <div> descriptions: returns max number of  white list.
    </div>
        </>
    )
}

export const InumberOfAddressesWhitelisted=()=>{
    return (   
        <>
    <div> Function:numberOfAddressesWhitelisted()  </div>
    <div> returns: Integer </div>
   
    <div> Access: Anybody </div>
    <div> descriptions: returns total number of  white listed address.
    </div>
        </>
    )
}

export const Iowner=()=>{
    return (   
        <>
    <div> Function:owner()  </div>
    <div> returns: address (Contract Careator) </div>
       <div> Access: Anybody </div>
    <div> descriptions: returns contract creator address.
    </div>
        </>
    )
}

export const Ipercent=()=>{
    return (   
        <>
    <div> Function:percent()  </div>
    <div> returns:integer </div>
    <div className="bg-red-700">  Set:function setBurnPercentage(uint percentage), 
     condition: percent gt 1, Access only by owner </div>
       <div> Access: Anybody </div>
    <div> descriptions: returns current burn percentage.
    </div>
        </>
    )
}


export const IPRESALE_PRICE=()=>{
    return (   
        <>
    <div> Function:PRESALE_PRICE()  </div>
    <div> returns:integer </div>
    <div className="bg-red-700">  Set:function setPresalePrice(uint256 preSaleprice) , 
      Access only by owner </div>
       <div> Access: Anybody </div>
    <div> descriptions: returns current Pre SalePrice.
    </div>
        </>
    )
}

export const IPublicSalePrices=()=>{
    return (   
        <>
    <div> Function:PublicSalePrices(uint number) intialised in constructor  </div>
    <div> returns:integer (value in wei) </div>
    <div className="bg-red-700"> Set:function setPublicSaleSlabPrice(uint slab, uint256 Price) Access only by owner 
    conditon 1:slab lessthan 6  condition two:price(wei) greaterthan 0, mapping(uint-uint256) public publicSalePrices;  </div>
       <div> Access: Anybody </div>
    <div> descriptions: returns public sale prices based on mapping.
    </div>
        </>
    )
}


export const IsecondHonda=()=>{
    return (
        <>
    <div> Function:secondHonda() </div>
    <div> returns: Integer (value in wei) </div>
    
    <div> Access: Anybody </div>
    <div> descriptions: second Honda Price </div>
        </>
    )
}


export const ItopHolderAddress=()=>{
    return (
        <>
    <div> Function:topHolderAddress() </div>
    <div> returns: address (value in wei) </div>
    <div className="bg-red-700"> Set:function setTopNftHolder(address newaddress) Access only by owner 
    conditon 1:totalSupply()==Max_supply   </div>
    <div> Access: Anybody </div>
    <div> descriptions: return topholder address </div>
        </>
    )
}

