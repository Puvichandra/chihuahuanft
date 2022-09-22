import React , {useEffect, useState} from 'react'
import classes from "./claimcomp.module.css"

//import {AiFillCloseCircle} from 'react-icons/ai'

const Claimrewards = (props) => {
  //console.log(props)

  useEffect(()=>{
  props
  },[props.counter,props.claimReward])

 
  return (
    <div className='bg-slate-600'>
    <div className='flex flex-rows bg-white justify-center mint__page'>
    <div className='basis-8/12 mint__container other__container'>
     <div className=' bg-blue-600  my-20 rounded-3xl mint__card claim__card'>
     <div className='text-4xl text-center font-Press font-bold text-black py-5'>Claim Rewards</div>
     <div className='flex flex-row text-center py-10 m-10 rounded-2xl reward__container'>
      <div className='basis-6/12 claim__container'>
        <div className='text-4xl text-black font-bold font-Press'>Total Claimed</div>
        <div className='text-2xl text-black font-bold font-Press py-5'> {props.rewardsCollected} BNB</div>
      </div>
      <div className='basis-6/12 claim__container'>
      <div className='text-4xl text-black font-bold font-Press'> To Claim</div>
      <div className='text-2xl text-black font-bold font-Press py-5'> {props.claimRewards} BNB</div>
      </div>

     </div>
     <div className='text-5xl text-white font-bold font-Press  text-center py-5' onClick={props.claim}>
      <button className='bg-red-300 px-5 py-2 eightbit-btn claim__button'>Claim Rewards</button> 
    </div>

     </div>
    
    </div>
   

    </div>
    </div>

  )
}

export default Claimrewards