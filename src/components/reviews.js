import React, {useState} from "react";
import arrow from "./images/Arrow Down.png"
import Secondrow from "./secondrow";
import Thirdrow from "./thirdrow";









const Reviews = () =>{

    const[set, setSet] = useState("");


    return(

        <div className="all">

            <div className='firstrow'>


           <div className="select">
            <div id="select">
                <span><p>Timeframe: <b>This Month</b></p></span>
                <span><img src={arrow}/></span>
            </div>
            
           </div>

           <div className="select">
           <div id="select">
                <span><p>People: <b>All</b></p></span>
                <span><img src={arrow}/></span>

            </div>
           </div>


           <div className="select">
           <div id="select">
                <span><p>Topic:<b> All</b></p></span>
                <span><img src={arrow}/></span>

            </div>
           </div>

        </div>

         <Secondrow/>

         <Thirdrow />

        </div>
    );
}

export default Reviews;