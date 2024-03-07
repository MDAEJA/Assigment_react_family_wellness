import React from 'react';


const footter={
    // border: '2px solid black',
   marginLeft: '20%',
   marginRight: '20%',
   padding: '20px 20px',
   textAlign : 'center',
   backgroundColor : 'grey'
}
function Footer(){
    return(
        <>
        <footer>
            <div style={footter}>
                Copyright 2018 Wrbsite.com.All Rights Rewards.
            </div>
            <h4 style={{textAlign:'center',padding:'10px 10px'}}>Powered by website.com</h4>
        </footer>
        </>
    )
}
export default Footer;