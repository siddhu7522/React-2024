import Star from "./Star"
import { useState } from "react"

const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",

}

const starContainerStyle = {
    display: "flex",
    gap: "4px"
}


//If maxRating does'nt exist default will be 5
function StarRating({ maxRating = 5, color="#fcc419", size=48, messages=[], onSetRating }) {
    const [rating, setRating] = useState(0)
    const[tempRating, setTempRating] =useState(0)
    const textStyle = {
        lineHeight: "0",
        margin: "0",
        color,
        fontSize: `${size}px`
    }
    const handleRating = (rating) =>{
        setRating(rating)
        onSetRating(rating)
    }
    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {/* This creates an array of size 5 and iterats through them  creates star */}
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        key={i}
                        onRate={()=>handleRating(i+1)}
                        //if current rating was greater than that index it will be filled
                        full={tempRating ? tempRating>=i+1 : rating >=i+1}
                        onHoverIn={()=>setTempRating(i+1)}
                        onHoverOut={()=>setTempRating(0)}
                        color={color}
                        size={size}
                    />
                ))}
            </div>
            <p style={textStyle}>{messages.length === maxRating? messages[tempRating ? tempRating-1 : rating-1] : tempRating || rating}</p>
        </div>
    )
}

export default StarRating