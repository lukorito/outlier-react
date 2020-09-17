import React, { useState } from 'react'
import Question from '../Question'
import './QuestionParent.scss'
const Questions = require('../../questions.json')

const QuestionParentComponent = () => {
  const [currentStep, setcurrentStep] = useState(0)
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0)
  console.log(correctAnswersTotal, 'total')

  const TOTAL_STEPS = Questions.length
  const question = Questions[currentStep]

  const handleNextQuestion = () => {
    setcurrentStep((prev) => {
      return prev > TOTAL_STEPS - 2 ? 0 : prev + 1
    })
  }

  return (
    <div className='questions-container'>
      <Question
        currentQuestionCounter={currentStep + 1}
        totalQuestions={TOTAL_STEPS}
        question={question}
        setCorrectAnswersTotal={setCorrectAnswersTotal}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  )
}

export default QuestionParentComponent
