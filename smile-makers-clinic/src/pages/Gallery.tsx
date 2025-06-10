import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Camera,
  Users,
  Building,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Gallery images with descriptions
  const galleryImages = [
    { src: '/images/gallery/1.jpg', title: 'Modern Clinic Interior', category: 'clinic' },
    { src: '/images/gallery/2.jpg', title: 'Advanced Equipment', category: 'equipment' },
    { src: '/images/gallery/3.jpg', title: 'Consultation Room', category: 'clinic' },
    { src: '/images/gallery/4.jpg', title: 'Dental Treatment Setup', category: 'equipment' },
    { src: '/images/gallery/5.jpg', title: 'Reception Area', category: 'clinic' },
    { src: '/images/gallery/6.jpg', title: 'Orthodontic Treatment', category: 'treatment' },
    { src: '/images/gallery/7.jpg', title: 'Waiting Area', category: 'clinic' },
    { src: '/images/gallery/8.jpg', title: 'Sterilization Unit', category: 'equipment' },
    { src: '/images/gallery/9.jpg', title: 'Patient Care', category: 'treatment' },
    { src: '/images/gallery/10.jpg', title: 'Diagnostic Equipment', category: 'equipment' },
    { src: '/images/gallery/11.jpg', title: 'Treatment Room', category: 'clinic' },
    { src: '/images/gallery/12.jpg', title: 'Dental Procedures', category: 'treatment' },
    { src: '/images/gallery/13.jpg', title: 'Modern Facilities', category: 'clinic' },
    { src: '/images/gallery/14.jpg', title: 'Patient Comfort', category: 'treatment' },
    { src: '/images/gallery/15.jpg', title: 'Clinical Excellence', category: 'clinic' }
  ]

  // Doctor images
  const doctorImages = [
    { src: '/images/dr-1.jpg', title: 'Dr. Ambika Dhaliwal', subtitle: 'Oral Medicine & Radiology Specialist' },
    { src: '/images/dr-2.jpg', title: 'Dr. Yadvinder S Dhaliwal', subtitle: 'Orthodontist Specialist' },
    { src: '/images/dr-5.jpg', title: 'Dr. Rajinder Singh Dhaliwal', subtitle: 'Cardiothoracic Surgeon' },
    { src: '/images/dr-6.jpg', title: 'Dr. Lakhbir Kaur Dhaliwal', subtitle: 'Infertility Specialist' }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % galleryImages.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <Helmet>
        <title>Gallery - SmileMakers Dental | Clinic Photos & Facilities</title>
        <meta name="description" content="Explore SmileMakers Dental clinic gallery showcasing our modern facilities, advanced equipment, and expert medical team in Chandigarh." />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take a virtual tour of our modern dental facility and meet our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Carousel */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image Display */}
            <div className="relative h-[500px] lg:h-[700px] xl:h-[800px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-contain transition-all duration-500"
              />
              
              {/* Overlay with image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {galleryImages[currentImageIndex].title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm capitalize drop-shadow-lg">
                    {galleryImages[currentImageIndex].category}
                  </span>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-8 space-x-2 overflow-x-auto pb-4 px-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'border-blue-600 scale-110' 
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2 flex-wrap">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 m-1 ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Users className="inline-block h-10 w-10 text-blue-600 mr-4" />
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced doctors are dedicated to providing the highest quality healthcare services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctorImages.map((doctor, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={doctor.src}
                    alt={doctor.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {doctor.title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {doctor.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlights */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Building className="inline-block h-10 w-10 text-blue-600 mr-4" />
              Our Modern Facilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-blue-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art medical and dental equipment for precise diagnosis and treatment
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-green-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Contemporary clinic design with comfortable patient areas and modern consultation rooms
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-purple-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sterilization Standards</h3>
              <p className="text-gray-600">
                Highest standards of hygiene and sterilization for patient safety and care
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery 