import React from "react";
import app0 from "./images/icon2.png";
import app1 from "./images/icon3.png";
import app2 from "./images/icon1.png";
import app3 from "./images/icon4.png";





const  Projectbox = () =>{
    return(
        <div className="projectbox">
            <div className="projectbox1">
                <p><img src={app0} /></p>
                <div className="box">
                <span className="ongoing"><b>Ongoing Projects</b></span>
                <div className="number">
                <p><b>22.00</b></p>
                <p style={{color:"#03E55E"}}>(+0.5%)</p>
                </div>
                </div>
               
               

            </div>


            <div className="projectbox1">
                <p><img src={app1} /></p>
                <div className="box">
          <span className="new"><b>New Projects</b></span>
                <div className="number">
                <p><b>12.00</b></p>
                <p style={{color:"#03E55E"}}>(+0.5%)</p>
                </div>
                </div>
               
               

            </div>



            <div className="projectbox1">
                <p><img src={app2} /></p>
                <div className="box">
                <span  className="growth" ><b>Growth Index</b></span>
                <div className="number">
                <p><b>22.00</b></p>
                <p style={{color:"red"}}>(+0.5%)</p>
                </div>
                </div>
               
               

            </div>



            <div className="projectbox1">
                <p><img src={app3} /></p>
                <div className="box">
                <span className="onboard"><b>Onboarded contractors</b></span>
                <div className="number">
                <p><b>22.00</b></p>
                <p style={{color:"#03E55E"}}>(+0.5%)</p>
                </div>
                </div>
               
               

            </div>

        </div>
    );
}

export default Projectbox;
