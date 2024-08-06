import { useEffect, useReducer } from "react"
import Header from "./Header"
import MyMain from "./MyMain"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen"
import Questions from "./Questions"
import Progress from "./Progress"
import FinishScreen from "./FinishScreen"
import Footer from "./Footer"
import Timer from "./Timer"

const initialState = {
  questions: [],
  //loading,error, ready, active, finished, reset
  status: "loading",
  questionIndex: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" }
    case "dataFailed":
      return { ...state, status: "error" }
    case "startGame":
      return { ...state, status: "active" }
    case "newAnswer":
      //to give points we need to find the current question and check the answer matches 
      const question = state.questions.at(state.questionIndex)
      console.log(question)
      //for points we need to check the answer that matches with current question option . So we are using action.payload
      return { ...state, answer: action.payload, points: action.payload === question?.correctOption ? state.points + question.points : state.points }
    case "nextQuestion":
      return { ...state, questionIndex: state.questionIndex + 1, answer: null }
    case "finishQuiz":
      return { ...state, status: "finish", highScore: state.points > state.highScore ? state.points : state.highScore }
    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining===0 ? "finish" : state.status }
    case "resetQuiz":
      return { ...initialState, questions: state.questions, status: "ready" }
    default:
      break;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const numQuestions = state.questions.length
  const maxPossiblePoints = state.questions.reduce((prev, curr) => prev + curr.points, 0)

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "dataRecieved", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }))
  }, [])
  return (
    <div className='app'>
      <Header />
      <MyMain>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {state.status === "active" &&
          <Footer>
            <Progress maxPossiblePoints={maxPossiblePoints} questionIndex={state.questionIndex} numQuestions={numQuestions} />
            <Questions numQuestions={numQuestions} questionIndex={state.questionIndex} dispatch={dispatch} answer={state.answer} question={state.questions[state.questionIndex]} />
            <Timer secondsRemaining={state.secondsRemaining} dispatch={dispatch} />
          </Footer>
        }
        {state.status === "finish" && <FinishScreen dispatch={dispatch} highScore={state.highScore} points={state.points} maxPossiblePoints={maxPossiblePoints} />}
      </MyMain>
    </div>
  )
}

export default App