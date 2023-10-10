import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const [readmore, setReadmore]= useState(false);
     
    const desc= readmore? info:`${info.substring(0,200)}....`;
    function readmoreHandeler(){
        setReadmore(!readmore);

    }
    return (
        <div className="card">
            <img src={image} className="img"></img>
            <div className="Tourdetails">
                <h4 className="tourprice">{price}</h4>
                <h3 className="tourname">{name}</h3>
                
                </div>
                <div className="tourdetails">{desc}
                <span className="readbutton" onClick={readmoreHandeler}>{readmore?`Show less`:`Read more`}</span>
                </div>
                <button className="rembutton" onClick={()=>removeTour(id)}>
                    Not Interested
                </button>
            

        </div>
    








    )



 
}

export default Card;