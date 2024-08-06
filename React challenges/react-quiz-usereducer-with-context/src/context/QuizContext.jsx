import { createContext, useReducer, useEffect } from "react"

const QuizContext = createContext()

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
            return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? "finish" : state.status }
        case "resetQuiz":
            return { ...initialState, questions: state.questions, status: "ready" }
        default:
            break;
    }
}


const QuizProvider = ({ children }) => {
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
        <QuizContext.Provider value={{
            numQuestions,
            maxPossiblePoints,
            questionIndex: state.questionIndex,
            secondsRemaining: state.secondsRemaining,
            dispatch,
            answer: state.answer,
            question: state.questions[state.questionIndex],
            highScore: state.highScore,
            points: state.points,
            status: state.status
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export { QuizContext, QuizProvider }