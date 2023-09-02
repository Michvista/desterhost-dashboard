import React from "react";





const Billing = () =>{


    return(
    <div className="contents">


<div className="billdetails">
<div className="billingplans">

<div className="freeplan">
<p style={{fontWeight:"bold"}}>Free Plan</p>

<p style={{color:"#768389"}}>Limited Offer</p>

<p style={{fontWeight:"bold"}}><span style={{fontSize:"25px"}}>$0/</span>month</p>

<button style={{backgroundColor:"rgba(118, 131, 137, 0.50)", width:"100%", padding:"8px", borderRadius:"5px", border:"none", color:"#768389", marginTop:"70px"}}>Current Plan</button>

</div>



 
<div className="freeplan">
<p style={{fontWeight:"bold"}}>professional Plan</p>

<p style={{color:"#768389"}}>Unlimited Offer</p>

<p style={{fontWeight:"bold"}}><span style={{fontSize:"25px"}}>$20/</span>month</p>

<button style={{backgroundColor:"#0634BF", width:"100%", padding:"8px", borderRadius:"5px", border:"none", color:"white", marginTop:"70px"}}>Choose Plan</button>

</div>
    
</div>
</div>



        </div>
        );
}

export default Billing;