import React, { useEffect, useState } from 'react'
import StarIcon from '../Icons/star'
import PropTypes from 'prop-types'

const ARRAY_LENGTH = 3

const Rating = ({ rating }) => {
  const [stars, setStars] = useState(0)
  const [ratings, setRatings] = useState([])
  useEffect(() => {
    if (rating === 'hard') {
      setStars(3)
    }
    if (rating === 'medium') {
      setStars(2)
    }
    if (rating === 'easy') {
      setStars(1)
    }
  }, [rating])
  useEffect(() => {
    const newRatings = Array(ARRAY_LENGTH).fill(0).fill(1, 0, stars)
    setRatings(newRatings)
  }, [stars])
  console.log(ratings)

  return (
    <div>
      {ratings.map((item, i) => <StarIcon key={i} fill={item === 0 ? '#fff' : ''} />)}
    </div>
  )
}
Rating.propTypes = {
  rating: PropTypes.string.isRequired
}
export default Rating
