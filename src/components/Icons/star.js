import React from 'react'

function StarIcon (props) {
  console.log(props, 'props')
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill={props.fill}
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='prefix__feather prefix__feather-star'
      {...props}
    >
      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
    </svg>
  )
}

export default StarIcon
