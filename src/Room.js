import React, {useState} from 'react';
import "./Room.css";


function Room() {
    let [isLit, setLit] = useState("dark");
    let [tmp, setTmp] = useState(22);
    function updateLit() {



    }

  return (
      
    
    <div className={`room ${isLit}`}>
      <h2>This Room is {isLit}</h2>
      <br/>
      <button className="lit" onClick={() => { setLit(isLit = "lit") }}>
        Turn ON
      </button>
      <button className="dark" onClick={() => { setLit(isLit = "dark") }}>
        Turn OFF
      </button>

      

      <br/>
       <h3>The Temperature is {tmp} celsius</h3>
      <button className="add" onClick={() => { setTmp( ++tmp) }}>
        Increase Temp
      </button>
      <button className="sub" onClick={() => { setTmp(--tmp) }}>
        Decrease Temp
      </button>

      <br />
      <butoon className="red" onClick={() => {
        if (isLit === "lit" || isLit === "Red" || isLit === "Green" || isLit === "Blue") {
          setLit(isLit = "Red")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> red Light </butoon>

<butoon className="green" onClick={() => {
        if (isLit === "lit" || isLit === "Red" || isLit === "Green" || isLit === "Blue") {
          setLit(isLit = "Green")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> green Light </butoon>
            <butoon className="blue" onClick={() => {
        if (isLit === "lit" || isLit === "Red" || isLit === "Green" || isLit === "Blue") {
          setLit(isLit = "Blue")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> blue Light </butoon>
    

    </div>
  );
}

export default Room;