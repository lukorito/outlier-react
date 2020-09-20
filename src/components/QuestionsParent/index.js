import React from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'
import './QuestionParent.scss'

const QuestionParentComponent = ({ questions, setCorrectAnswersTotal, setcurrentStep, currentStep, total }) => {
  let question = questions[currentStep]

  const handleNextQuestion = () => {
    setcurrentStep((prev) => {
      return prev > total - 2 ? 0 : prev + 1
    })
  }

  return (
    <div className='questions-container'>
      <Question
        currentQuestionCounter={currentStep + 1}
        totalQuestions={total}
        question={question}
        setCorrectAnswersTotal={setCorrectAnswersTotal}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  )
}

QuestionParentComponent.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setCorrectAnswersTotal: PropTypes.func.isRequired,
  setcurrentStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionParentComponent
