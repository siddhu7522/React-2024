import { useState } from "react";


function Slides({ slides }) {

    const [index, setIndex] = useState(0)
    const { title, text } = slides[index]
    console.log(slides.length)

    const handleNext = () => {
        if (index < slides.length - 1) {
            setIndex((index) => index + 1)
        }
    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex((index) => index - 1)
        }
    }

    const handleRestart= () =>{
        setIndex(0)
    }


    return (
        <div>
            <div id="navigation" className="text-center">
                {index===0 ? (
                    <button disabled onClick={handleRestart} data-testid="button-restart" className="small outlined">Restart</button>
                ):(
                    <button  onClick={handleRestart} data-testid="button-restart" className="small outlined">Restart</button>
                )}
                
                {index>0 ? (
                    <button onClick={handlePrev} data-testid="button-prev" className="small">Prev</button>
                ):(
                    <button disabled onClick={handlePrev} data-testid="button-prev" className="small">Prev</button>
                )}
                {index < slides.length - 1 ? (
                    <button onClick={handleNext} data-testid="button-next" className="small">Next</button>
                ) : (
                    <button disabled onClick={handleNext} data-testid="button-next" className="small">Next</button>
                )}
            </div>
            <div id="slide" className="card text-center">

                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>

            </div>
        </div>
    );

}

export default Slides;
