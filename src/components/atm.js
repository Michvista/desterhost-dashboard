import React from "react";
import card from "./images/card.png";





const Atm = () =>{

    return(
    <div>
        
<div className="atmdetails">

<div className="atmall">
           <div className="atm">
            <div className="remove">
            <h4>Card Details</h4>
            <h6 style={{color:"red"}}>remove card</h6>
            </div>
        
            <div className="carddetails">
                <span style={{backgroundColor:"white", padding:"10px"}}><img src={card}/></span>
                <span >Mastercard *****4598</span>
                <span style={{paddingLeft:"30px"}}><input type="radio"  checked/></span>
            </div>



            <div className="addpayment">


                <h5>+ Add another payment method</h5>
            </div>


            
            


            </div>

            <div className="butt">
                <button className="btn1">Save Changes</button>

                <button className="btn2">Cancel</button>
            </div>
            </div>
            </div>





    </div>
    );



}
export default Atm;
