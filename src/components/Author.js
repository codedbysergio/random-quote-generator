import React from 'react'

export default function Author( { quotes, number }) {
  return (
    <div className='author' id='author'>- {quotes[number]["author"]}</div>
  )
}
