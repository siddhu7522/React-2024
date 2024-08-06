import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="close">&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Step {step}: {messages[step - 1]}</p>
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor={"#7950f2"} color={"#fff"} >
              <span>previous</span>
            </Button>
            <Button onClick={handleNext} bgColor={"#7950f2"} color={"#fff"} >
              <span>Next</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
