import React from 'react'
import '../styles/Card.css'

export default function Card({image, name, handler, testimonial }) {
  return (
    <div className="card">
      <div className="profile">
        <img className="w-12" src={`/${image}`} />
        <div className="flex flex-col">
          <h2 className="text-lg">{name}</h2>
          <h3 className="text-sm">{handler}</h3>
        </div>
      </div>
      <p className="text-base">{testimonial}</p>
    </div>
  )
}