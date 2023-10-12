import { useEffect } from "react";
import ButtonDT from "./ButtonDT"

function QuestionDT({data, questionNumber, validateAnswer, applyColor}) {
    
  return (
    <div>
        <header>
            <h4>{data[questionNumber].question}</h4>
        </header>
        <ButtonDT key={data[questionNumber].id} answersOptions={data[questionNumber].answers} validateAnswer={validateAnswer} applyColor={applyColor} />
    </div>
  )
}

export default QuestionDT