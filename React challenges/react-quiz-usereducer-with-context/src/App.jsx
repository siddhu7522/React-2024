import { useContext, useEffect, useReducer } from "react"
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
import { QuizContext } from "./context/QuizContext"


function App() {
  const { status } = useContext(QuizContext)

  return (
    <div className='app'>
      <Header />
      <MyMain>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" &&
          <Footer>
            <Progress />
            <Questions />
            <Timer />
          </Footer>
        }
        {status === "finish" && <FinishScreen />}
      </MyMain>
    </div>
  )
}

export default App