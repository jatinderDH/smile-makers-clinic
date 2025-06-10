import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Available gallery images
  const images = [
    {
      src: '/images/gallery/2.jpg',
      alt: 'Dental Treatment Success Story',
      caption: 'Transforming smiles with expert care'
    },
    {
      src: '/images/gallery/9.jpg',
      alt: 'Professional Dental Procedure',
      caption: 'State-of-the-art dental technology'
    },
    {
      src: '/images/gallery/10.jpg',
      alt: 'Patient Care Excellence',
      caption: 'Compassionate and professional service'
    },
    {
      src: '/images/gallery/11.jpg',
      alt: 'Dental Treatment Results',
      caption: 'Excellence in every treatment'
    },
    {
      src: '/images/gallery/6.jpg',
      alt: 'Doctor and Patient Consultation',
      caption: 'Professional care with visible results'
    },
    {
      src: '/images/gallery/16.jpg',
      alt: 'Smile Transformation Before & After',
      caption: 'Remarkable dental transformation results'
    },
    {
      src: '/images/gallery/17.jpg',
      alt: 'Happy Patient with Perfect Smile',
      caption: 'Achieving beautiful, confident smiles'
    },
    {
      src: '/images/gallery/18.jpg',
      alt: 'Professional Orthodontic Care',
      caption: 'Expert orthodontic treatment and results'
    },
    {
      src: '/images/gallery/19.jpg',
      alt: 'Dental Excellence in Action',
      caption: 'Quality care with lasting results'
    },
    {
      src: '/images/gallery/20.jpg',
      alt: 'Patient Satisfaction and Care',
      caption: 'Committed to patient comfort and results'
    },
    {
      src: '/images/gallery/21.jpg',
      alt: 'Advanced Dental Treatment',
      caption: 'Modern techniques for optimal outcomes'
    },
    {
      src: '/images/gallery/22.jpg',
      alt: 'Smile Makeover Success',
      caption: 'Life-changing dental transformations'
    },
    {
      src: '/images/gallery/23.jpg',
      alt: 'Comprehensive Dental Care',
      caption: 'Complete oral health solutions'
    },
    {
      src: '/images/gallery/24.jpg',
      alt: 'Exceptional Treatment Results',
      caption: 'Excellence in every aspect of dental care'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain bg-gray-100"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Caption */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2 drop-shadow-lg">
                {images[currentIndex].alt}
              </h3>
              <p className="text-white/90 text-sm lg:text-base drop-shadow-lg">
                {images[currentIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 m-1 ${
              index === currentIndex
                ? 'bg-teal-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-4 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? 'border-teal-600 scale-105'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel 