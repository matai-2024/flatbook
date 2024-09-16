import React, { useState } from 'react'
import SignUpForm from '../SignUpForm'

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    { id: 1, content: <SignUpForm />, bg: 'bg-gray-100' },
    { id: 2, content: 'Page 2', bg: 'bg-gray-200' },
    { id: 3, content: 'Page 3', bg: 'bg-gray-300' },
  ]

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex h-full w-full items-center justify-center ${slide.bg}`}
          >
            <h2 className="text-5xl font-bold">{slide.content}</h2>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  )
}

export default Carousel
