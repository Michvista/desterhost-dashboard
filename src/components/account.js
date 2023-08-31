import React from "react";
import star from "./images/_.png";
import nig from "./images/nig.png";



const Account = () =>{





    return(
        
        <div className="acctdetails">
            <div className="firstlast">

            <div className="firstname">
            <label for="firstname">First Name</label><span><img src={star} /></span>

            <div className="firstinput">
            <input type="text" placeholder="Drannan" />
            </div>
           
            </div>
            
            <div className="lastname">
            <label for="lastname">Last Name</label><span><img src={star} /></span>
            
            <div className="lastinput">
            <input type="text" placeholder="Last name" />
            </div>
           
            </div>
            </div>

            <div className="username">
            <label for="username">Username</label><span><img src={star} /></span>
            
            <div className="userinput">
            <input type="text" placeholder="johnDoe" />
            </div>
           
            </div>
            

            <div className="mailphone">
            
            <div className="email">
            <label for="email">Email</label><span><img src={star} /></span>
            
            <div className="emailinput">
            <input type="text" placeholder="Email" />
            </div>
           
            </div>


             
            <div className="phonenum">
            <label for="email">Phone No.</label>
            
            <div className="phoneinput">
                <span><img src={nig} style={{width:"45px", marginBottom:"2px"}}/></span>
            <input type="number" placeholder="83 563 888 320" style={{marginLeft:"10px", appearance:"textfield"}}/>
            </div>
           
            </div>
            </div>

            <div className="bio">
            <label for="Bio">Bio </label><span><img src={star} /></span><span style={{fontSize:"12px", color:"gray", marginLeft: "10px"}}>(Write a short introduction about yourself)</span>
            
            <div className="bioinput">
            <input type="text"  />
            </div>
           
            </div>

            <div className="butt">
                <button className="btn1">Save Changes</button>

                <button className="btn2">Cancel</button>
            </div>
            </div>

    );
}

export default Account;
