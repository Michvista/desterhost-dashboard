import React from "react";
import danger from "./images/danger.png";




const Organ = () =>{





    return(
        
<div className="orgadetails">

<div className="organization">
    <div className="coverdanger">
    <div className="organizationcover">

<div className="organizationame">
<label for="organame">Organisation Name</label>

<div className="organinput">
<input type="text" placeholder="Racoon Laboratories" />
</div>

</div>



<div className="organizationame">
<label for="organame">Organisation Url</label>

<div className="organinput">
<input type="text" placeholder="Racoon Laboratories" />
</div>

</div>
</div>

<div className="dangerr">
<span><img src={danger}  style={{width:"20px"}} /></span>
<span>You can only change the url once in 60 days</span>
</div>
</div>





<div className="butt">
    <button className="btn1">Save Changes</button>

    <button className="btn2">Cancel</button>
</div>

</div>
</div>





    );
}
export default Organ;
