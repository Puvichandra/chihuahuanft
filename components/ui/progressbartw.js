import React, { useState } from 'react'
import classes from "../ui/progressbartw.module.css"


export default function Progressbartw(props) {
   
    const [style, setStyle] = useState({});
   
   

    setTimeout(() => {
		const newStyle = {

			opacity: 1,
			width: `${props.done}%`
		}
		
		setStyle(newStyle);
	}, 200);



  return   (
	<div>
	  <div className='text-center text-white'>{props.totsold}/{props.totnft} Minted</div>
    	<div className={classes.progress}>
	  		<div className={classes.progressdone} style={style}>
				{props.done}%
			</div>
		</div>
		</div>
  )
}
