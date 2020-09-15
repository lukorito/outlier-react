import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useDeepCompareEffect from 'use-deep-compare-effect'
import './ProgressBar.scss'

const ProgressBar = ({ parts = [] }) => {
  const colors = ['#A9A9A9', '#696969', '#000000']

  const [widths, setWidths] = useState(parts.map((part) => part.percentage))

  useDeepCompareEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        parts.map((item) => {
          return item.percentage
        })
      )
    })
  }, [parts])

  return (
    <div className='progress-full'>
      {parts.map((item, index) => (
        <div
          className='progress-part'
          key={index}
          style={{
            width: widths[index],
            backgroundColor: colors[index]
          }}
        />
      ))}
    </div>
  )
}

ProgressBar.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.shape({}))
}

ProgressBar.defaultProps = {
  parts: []
}

export default ProgressBar
