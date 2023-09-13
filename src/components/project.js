import React, { useEffect, useRef, useState } from "react";
import app0 from "./images/Appicon1.png";
import app1 from "./images/Appicon2.png";
import app2 from "./images/Appicon3.png";
import del from "./images/del.png";
import edi from "./images/edit.png";
import review from "./data";
import vector from "./images/Vector.png";






const  Projectbox = () =>{

    const [name, setName] = useState("");
    
    const [category, setCategory] = useState("");
    
    const [date, setDate] = useState("");
    
    const [des, setDes] = useState("");
    
    const nam = (event)=>{
        setName(event.target.value);
    }
    
    const kol = (event) =>{
        setCategory(event.target.value);
            }

            
    const nem = (event) =>{
        setDate(event.target.value);
            }

            
    const adu = (event) =>{
        setDes(event.target.value)

    }
const[tour, setTour] = useState(review);

    
const [ana, setAna] = useState(true);

const ui = () =>{
    setAna(false)
}
const iu = () =>{
    setAna(true);
}


const yinu = (Task)=>{
    const id = Math.floor(Math.random() * 1000) + 1
    
        const inu = { id, ...Task } 
        setTour([...tour, inu])
    }
    
{/*
    const [active, setActive] = useState(false);

    const holl =() =>{
        setActive(true);
    }
*/}
    
    const Teg = (id) => {
        setTour(tour.filter((tours) => tours.id !== id));
    }

    const het = (event) =>{
        event.preventDefault();
        if(!name, !date, !category, !des){
            alert("please enter text");
            return
        }
   iu();
        yinu({name, date, category, des});


        setName("")
        setDate("")
        setCategory("")
        setDes("")
    }

    return(
        <div className="projectall">

        
        <div className="projectbox">

            <div className="projectbox1">
                <p><img src={app0} /></p>
                <div className="box">
                <span style={{color:"#FFACAC", fontSize:"13px"}}><b>Total Tickets</b></span>
                <div className="number">
                <p><b>44</b></p>
                </div>
                </div>
            </div>

            <div className="projectbox1">
                <p><img src={app1} /></p>
                <div className="box">
                <span style={{color:"blue" , fontSize:"13px"}}><b>Pending Tickets</b></span>
                <div className="number">
                <p><b>22</b></p>
                
                </div>
                </div>    
            </div>



            <div className="projectbox1">
                <p><img src={app2} /></p>
                <div className="box">
                <span style={{color:"#03E55E" , fontSize:"13px"}}><b>Resolved Tickets</b></span>
                <div className="number">
                <p><b>22</b></p>
                
                </div>
                </div> 
            </div>
        </div>





        <div className="plus1" onClick={ui}>
<div className="plus">
    <img src={vector}/>
    <span>New Ticket</span>
</div>
</div>

       
<div className="tickettable">


    {/*
    <table style={{width:"100%", borderBottom: "1px solid #DFDFDF"}} id="tab">

        <tr style={{backgroundColor:"#DFDFDF"}}>
            <th>Tickets Name</th>
            <th>Category</th>
            <th>Ticket ID</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
        </tr>

        <tr className={active? "holla" : ""} >
            <td>
                <div className="check">
                <span><input type="checkBox" id="check"/></span>
                <span >Server down time</span>
                </div>
                
            </td>

            <td >Domains</td>
            <td>#1234</td>
            <td>12/04/2024</td>
            <td><span style={{backgroundColor:"#FFE5E5", borderRadius:"5px", padding:"7px"}}>Pending</span></td>
            <td>
                <div className="deled">
                    <span><img src={edi}/></span>
                   <span onClick={holl} ><img src={del}/></span>
                </div>
                
                </td>
        </tr>

        
        
        {tour.map((veb) =>(
       
       <tr>
           <td>
               <div className="check">
               <span><input type="checkBox" id="check"/></span>
               <span>{veb.name}</span>
               </div>
               
           </td>

           <td>{veb.category}</td>
           <td>#1234</td>
           <td>{veb.date}</td>
           <td><span style={{backgroundColor:"#FFE5E5", borderRadius:"5px", padding:"7px"}}>Pending</span></td>
           <td>
               <div className="deled">
                   <span><img src={edi}/></span>
                  <span onClick={()=> Teg(veb.id)}><img src={del}/></span>
               </div>
               
               </td>
       </tr>
       ))}
        
    </table>
    */}
    {ana? 
<div className="tableall">


<table style={{width:"100%", borderBottom: "1px solid #DFDFDF"}} id="tab">

        <tr style={{backgroundColor:"#DFDFDF"}}>
            <th>Tickets Name</th>
            <th>Category</th>
            <th>Ticket ID</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
        </tr>

        {tour.map((veb) =>(
       
        <tr>
            <td>
                <div className="check">
                <span><input type="checkBox" id="check"/></span>
                <span>{veb.name}</span>
                </div>
                
            </td>

            <td>{veb.category}</td>
            <td>#1234</td>
            <td>{veb.date}</td>
            <td><span style={{backgroundColor:"#FFE5E5", borderRadius:"5px", padding:"7px"}}>Pending</span></td>
            <td>
                <div className="deled">
                    <span><img src={edi}/></span>
                  <span onClick={()=> Teg(veb.id)}><img src={del}/></span>
                 
                </div>
                
                </td>
        </tr>
        ))}
    </table>
    
    <div className="prev">
        <p>Prev</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>10</p>
        <p>Next</p>
    </div>
        </div>:

    <div className="formall">

    
    <div className="fom">
        <form className="fum" onSubmit={het}>
            <div className="tickets">
            <span>Ticket Name:</span>
          <div className="ticketsinpu">
           <input type="text" value={name} onChange={nam}/>
           </div>
           </div>
        <div className="catDate">
        <div className="cate">
            <span>Category:</span>
            <div className="cateinpu">
        <select value={category} onChange={kol}>
            <option value="domain0"></option>
            <option value="Domains">Domains1</option>
            <option  value="Domains">Domains2</option>
        </select>
          </div>
        </div>
        
        <div className="date">
            <span>Date:</span>
            <div className="dateinpu">
        <input type="text" value={date} onChange={nem}/>
        </div>
        </div>
        </div>

        <div className="des">
            <label for="ticket">Ticket Description:</label>
            <div className="desinpu">
       <textarea name="text" rows="6" cols="10" wrap="soft" value={des} id="des" onChange={adu}></textarea>
        </div>
        </div>
        <input type="submit" id="sub" value="submit ticket"/>
        </form>
      
    </div>

    </div>}

        
</div>

        </div>
    );
}

export default Projectbox;
