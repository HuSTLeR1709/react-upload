import React, {useState} from "react";
import Tours from "./components/Tours";
import data from "./data";


const App = () => {
  const [tours, setTours]= useState(data);
  function removeTour(id){
    const newtours= tours.filter(tour=> tour.id!==id)
    setTours(newtours);
  }
  function refreshtour(){
    setTours(data);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="rfrbtn" onClick={()=>refreshtour()}>
          Refresh
        </button>
      </div>


    );
  }

  return (
  
  <div> 
  <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  
  
  )
};

export default App;
