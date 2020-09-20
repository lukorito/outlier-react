import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Question.scss'
import { shuffle } from 'lodash'
import useDeepCompareEffect from 'use-deep-compare-effect'
import Rating from '../Rating'

const Question = ({ question, currentQuestionCounter, totalQuestions, setCorrectAnswersTotal, handleNextQuestion }) => {
  const [correctAnswer, setCorrectAnswer] = useState(() => {
    return question.correct_answer
  })
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answers, setAnswers] = useState([])

  useDeepCompareEffect(() => {
    // add correct answer to the local component state
    setCorrectAnswer(() => {
      return question.correct_answer
    })
    // shuffle answers on new question
    setAnswers(shuffle([...question.incorrect_answers, question.correct_answer]))
  }, [question])

  const handleAnswerClick = answer => e => {
    setSelectedAnswer(answer)
    if (question.correct_answer === answer) {
      setCorrectAnswersTotal((prevTotal) => {
        return prevTotal + 1
      })
    }
  }
  const handleNext = (e) => {
    e.preventDefault()
    handleNextQuestion()
    // reset
    setSelectedAnswer('')
  }

  const handleDisableButton = (answer) => {
    return answer === selectedAnswer ? false : answer !== correctAnswer
  }

  return (
    <div className='question'>
      <div className='question-counter'>
        <span>Question {currentQuestionCounter} of {totalQuestions} </span>
      </div>
      <div className='question-category'>
        <span>{decodeURIComponent(question.category)}</span>
      </div>
      <div className='question-rating'>
        <Rating rating={question.difficulty} />
      </div>
      <div className='question-main'>
        <span>{decodeURIComponent(question.question)}</span>
      </div>
      <div className='question-answers'>
        {answers.map((answer, index) => (
          <div className='button-container' key={index}>
            <button
              onClick={handleAnswerClick(answer)}
              disabled={
                selectedAnswer && handleDisableButton(answer)
              }
            >
              {decodeURIComponent(answer)}
            </button>
          </div>
        ))}
      </div>
      {selectedAnswer && (
        <div className='answer-feedback'>
          <div className='question-feedback'>
            <span>
              {selectedAnswer === correctAnswer ? 'Correct!' : 'Sorry!'}
            </span>
          </div>
          <div className='question-next'>
            <button
              onClick={handleNext}
            >
              Next Question
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.shape({}).isRequired,
  currentQuestionCounter: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  setCorrectAnswersTotal: PropTypes.func.isRequired,
  handleNextQuestion: PropTypes.func.isRequired
}

export default Question
