import React, { useState } from 'react'
import CarouselPage1 from './CarouselPages/CarouselPage1'
import CarouselPage2 from './CarouselPages/CarouselPage2'
import CarouselPage3 from './CarouselPages/CarouselPage3'

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    { id: 1, content: <CarouselPage1 />, bg: 'bg-inherit' },
    { id: 2, content: <CarouselPage2 />, bg: 'bg-inherit' },
    { id: 3, content: <CarouselPage3 />, bg: 'bg-inherit' },
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
            className={`h-full w-full flex-shrink-0 items-center justify-center ${slide.bg}`}
            style={{ minWidth: '100%' }}
          >
            <div className="flex h-full w-full items-center justify-center">
              {slide.content}
            </div>
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
