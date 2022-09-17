import { createContext, Fragment, useEffect, useState } from "react";

import MainHeader from "./mainheader";
import Head from "next/head";
import Script from 'next/script'
function Layout(props){
  
      return    (
        <div>
  
      <div>
      
    <MainHeader  waddress={props.waddress} wprovider={props.wprovider} wsigner={props.wsigner}/>
  
      <main   className="bg-bodygray">
            {props.children } 
      </main>
     
  
        </div>
        </div>
      );
      
  }
  export default Layout;