import React, { useEffect, useRef, useState } from "react";
import upload from "./images/upload.png";




const Summary = () =>{
    return(
    <div className="summaryall">
        <div className="bug">
        <span><b>Bug summary:</b></span>
        <input type="text" placeholder="Example: Windows server fails to start up linux vm for my DR service"/>
        </div>

        <div className="machine">
        <span><b>Machine Build:</b></span>
        <input type="text" placeholder="Example: I’m using snap version/build 3.0.0~beta2-9796-g.2182ab55f"/>
        </div>

        <div className="api">
        <span><b>What CLI/API is used:</b></span>
        <input type="text" placeholder="Example: I tried to create a VM host using a previously discovered IBM LPAR machine, using the Windows 11 server."/>
        </div>

        <div className="dob">
        <span><b>Description of Bug:</b></span>
       <textarea name="text" rows="9" cols="10" wrap="soft" placeholder="Example: Windows fails to PXE boot IBM LPAR machine as VM host I'm using snap version/build 3.0.0~beta2-9796-g.2182ab55f. I tried to create a VM host using a previously discovered IBM LPAR machine, using the MAAS UI. >>I was able to select the machine under 'Add KVM' define its parameters, and select a project. I was also able to push 'Authenticate' and the expected commissioning process began. After the machine powered on, though, the commissioning process timed out trying to PXE boot the machine. Looking at the machine, it had indeed been powered on, but nothing happened after that"></textarea>
        </div>

        <div className="upload">
        <span><b>Upload Screenshots:</b></span>
       <div className="uplo">
        <img src={upload}/>
        <p>Drag or Upload Media from Device</p>

         <div className="file">
        <label for="files" id="up">Upload media</label>
        <input id="files" style={{display:"none"}} type="file"/>
         </div>

       </div>
        </div>

        <button id="file">Submit Bug report</button>
      
      





    </div>
    );
}

export default Summary;
