import React, { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import QuestionParentComponent from './components/QuestionsParent'
import { convertToPercentage } from './utils'
const Questions = require('./questions.json')

function App () {
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0)
  const [currentStep, setcurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [minScore, setMinScore] = useState(0)

  const TOTAL = Questions.length

  useEffect(() => {
    setScore(convertToPercentage(correctAnswersTotal, currentStep + 1))
    setMaxScore(convertToPercentage(correctAnswersTotal + (TOTAL - (currentStep)), TOTAL))
    setMinScore(convertToPercentage(correctAnswersTotal, TOTAL))
  }, [currentStep])

  return (
    <div className='App'>
      <div className='top-progress'>
        <ProgressBar parts={[{ 'percentage': `${convertToPercentage(currentStep + 1, TOTAL)}%` }]} />
      </div>
      <QuestionParentComponent
        questions={Questions}
        setCorrectAnswersTotal={setCorrectAnswersTotal}
        setcurrentStep={setcurrentStep}
        currentStep={currentStep}
        total={TOTAL}
      />
      <div className='bottom-progress'>
        <div className='bottom-progress-wrapper'>
          <div className='score'>
            <div>
              <span>Score:&nbsp;</span>
              <span>{score}</span>
              <span>&#37;</span>
            </div>
            <div>
              <span>Max Score:&nbsp;</span>
              <span>{maxScore}</span>
              <span>&#37;</span>
            </div>
          </div>
          <div className='bottom-progress-container'>
            <ProgressBar
              parts={[
                { 'percentage': `${score}%` },
                { 'percentage': `${minScore}%` },
                { 'percentage': `${maxScore}%` }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
