import { useState } from "react"


function TextExpander({ children, expandButtonText="show more", collapseButtonText="Show less", buttonColor, expanded=false }) {
    const [showText, setShowText] = useState(expanded)
    const handleText = () => {
        setShowText(!showText)
    }

    return (
        <div>
            {showText ? (
                <>
                    {children}
                    <button onClick={handleText} style={{ color: buttonColor }}>{collapseButtonText}</button>
                </>
            ) : (
                <>
                    {children.substring(0, 150)}
                    <button onClick={handleText}>{expandButtonText}</button>
                </>
            )}
        </div>
    )
}

export default TextExpander