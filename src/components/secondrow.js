import React from "react";
import graph from  "./images/Graph.png";
import frame from "./images/Frame 139.png"
import icon from "./images/Icons.png"



const Secondrow = () =>{

    return(
            
        <div className="secondrow">

<div className="secondrow1">
    
<div className="secondrowbox1">

<div className="userboxrow1">

<div className="usersbox">

    <p>Active Users</p>

    <div className='numbers'>
    <h3 className="num1"><b>27</b></h3>
    <h5 className="num2">/80</h5>
    </div>
   
</div>



<div className="usersbox">

<p>Questions Answered</p>

<div className='numbers'>
<h3 className="num1"><b>3,298</b></h3>

</div>

</div> 


<div className="usersbox">

<p>Av. Session Length</p>

<div className='numbers'>
<h3 className="num1"><b>2m 34s</b></h3>
</div>
</div>


</div>


<div className="userboxrow2">

<div className="usersbox">

<p>Starting Knowledge</p>

<div className='numbers'>
 <h3 className="num1"><b>64%</b></h3>
</div>
<img src={graph}  className="img"/>
</div>


 <div className="usersbox">

 <p>Current Knowledge</p>

<div className='numbers'>
<h3 className="num1"><b>86%</b></h3>
</div>
<img src={graph}  className="img"/>
</div>



<div className="usersbox">

<p>Knowledge Gain</p>

<div className='numbers'>
  <h3 className="num1"><b>+34%</b></h3>
</div>
 <img src={graph}  className="img"/>
 </div>



</div>

</div>
</div>

<div className="secondrow2">

<div className="secondrowbox2">

<div className="prog">
    
    <div className="header">
        <div className="act">
        <p>Activity</p>
        </div>
        <div className="month">
            <p>Month</p>
           <span><img src={icon}/></span>
        </div>
    </div>
    
    <hr className="hr"></hr>

    <img src={frame} className="imgframe"/>

    
</div>
</div>

</div>


</div>

     





    );
}

export default Secondrow;