import uuid4 from "uuid4";
import Style from './ButtonDT.module.css';

function ButtonDT({answersOptions, validateAnswer, applyColor}) {

  return (
    <div>
        {
            answersOptions.map(answer => (
                <button className={applyColor && answer.correct ? Style.answerCorrect : applyColor && !answer.correct ? Style.answerIncorrect: ''} key={uuid4()} onClick={() => validateAnswer(answer)}>{answer.text}</button>
            ))
        }
    </div>
  )
}

export default ButtonDT