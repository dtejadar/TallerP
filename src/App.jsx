import { useState, useEffect } from 'react'
import './App.css'
import { data } from "./data/data.js";
import QuestionDT from './components/QuestionDT'

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [ocultarBoton, setocultarBoton] = useState(true);
  const [applyColor, setApplyColor] = useState(false)
  
  const validateAnswer = (answer) => {
    console.log(answer);
    if(answer.correct)
    {
      setAnswerCorrect(true);
    }
    else{
      setocultarBoton(false);
      setApplyColor(true);
    }
  }

  const resetQuestions = () => {
    !answerCorrect
      setQuestionNumber(0);
      setApplyColor(false);
      setocultarBoton(true);
  }

  useEffect(() => {
    if(answerCorrect){
      if(questionNumber < data.length - 1){
        setQuestionNumber(questionNumber+1);
        setAnswerCorrect(false); 
        setocultarBoton(true);
      }
      else{
        setocultarBoton(false);
        setApplyColor(true);
      }
    }

  }, [answerCorrect])

  return (
    <div>
      <QuestionDT data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} validateAnswer={validateAnswer} applyColor={applyColor}/>
      {
        <button hidden={ocultarBoton} onClick={() => resetQuestions()}>{answerCorrect === false ? 'Fallaste Reinciar' : answerCorrect && questionNumber === 2 ? 'Prueba superada' : ''}</button>
      }
    </div>
  )
}

export default App
