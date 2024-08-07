import React from "react";
import './offerRibbon.css';
import { useDeals } from "../Contexts/DealContext";
import { Link } from "react-router-dom";
const OfferRibbon=()=>{
    const deals=useDeals();
        return(
        <div className="OfferRibbon">
            {
                deals.map((item)=>{
                    return(
                       <Link style={{
                        color:"#DCF2F1",
                        textDecoration:"none"
                       }}>
                        <p>
                            {item.deal}
                        </p>
                       </Link>
                    )
                })
            }
        </div>
    )
}
export default OfferRibbon;