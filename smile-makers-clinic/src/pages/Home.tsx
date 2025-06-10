import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { 
  Calendar,
  Phone,
  Star,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  MapPin,
  Mail,
  ExternalLink,
  MessageSquare
} from 'lucide-react'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {
  const services = [
    {
      image: '/images/dental.png',
      title: 'Orthodontics',
      description: 'Correcting teeth and jaws positioning for a healthier mouth and pleasing appearance.',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200',
      iconBg: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      image: '/images/care.png',
      title: 'Crown & Bridges',
      description: 'Fixed prosthetic devices cemented onto existing teeth or implants.',
      color: 'bg-gradient-to-br from-green-100 to-green-200',
      iconBg: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      image: '/images/teeth.png',
      title: 'Dental Implants',
      description: 'Surgical components that interface with bone to support dental prosthesis.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200',
      iconBg: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      image: '/images/cosmetic.png',
      title: 'Teeth Whitening',
      description: 'Effective way of lightening natural tooth color without removing surface.',
      color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
      iconBg: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    },
    {
      image: '/images/hygien.png',
      title: 'Root Canal Treatment',
      description: 'Single-sitting RCT performed using advanced endodontic technology.',
      color: 'bg-gradient-to-br from-red-100 to-red-200',
      iconBg: 'bg-gradient-to-r from-red-500 to-red-600'
    },
    {
      image: '/images/ivf2.png',
      title: 'IVF/Fertility Clinic',
      description: 'Complete fertility care including IVF, IUI, ICSI, and counselling services.',
      color: 'bg-gradient-to-br from-pink-100 to-pink-200',
      iconBg: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      image: '/images/heartchest.png',
      title: 'Heart & Chest Clinic',
      description: 'Expert treatment for heart, lungs, and blood vessel related conditions.',
      color: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
      iconBg: 'bg-gradient-to-r from-indigo-500 to-indigo-600'
    },
    {
      image: '/images/surgery.png',
      title: 'Metal Free Crown',
      description: 'Highly aesthetic ceramic restorations that imitate natural teeth.',
      color: 'bg-gradient-to-br from-teal-100 to-teal-200',
      iconBg: 'bg-gradient-to-r from-teal-500 to-teal-600'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Happy Patients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '8', label: 'Specialized Services', icon: Stethoscope },
    { number: '24/7', label: 'Emergency Care', icon: Clock }
  ]

  const features = [
    'Experienced doctors from PGIMER',
    'State-of-the-art technology',
    'Hygienic and safe environment',
    'Comprehensive treatment under one roof',
    'Emergency dental care available',
    'Flexible appointment scheduling'
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Excellent service and professional staff. Dr. Dhaliwal is very experienced and caring.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      text: 'Best dental clinic in Chandigarh. Modern equipment and painless treatment.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      text: 'Great experience with orthodontic treatment. Highly recommend SmileMakers.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>SmileMakers Wellness Centre - Best Dental & Medical Clinic in Chandigarh</title>
        <meta name="description" content="State-of-the-art dental and medical centre in Chandigarh offering orthodontics, dental implants, IVF, heart & chest treatment by experienced PGIMER doctors." />
        <meta name="keywords" content="dental clinic chandigarh, orthodontics, dental implants, IVF clinic, heart treatment, PGIMER doctors" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          preload="metadata"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="video-overlay"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-cyan-200/30 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-200/20 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full text-sm border border-white/20">
                  ✨ Trusted by 1000+ Happy Patients
                </span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                The Healthy <span className="text-gradient-white">smile</span><br />
                through science<br />
                and <span className="text-gradient-white">artistry</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                Experience world-class dental and medical care with our highly trained team 
                of specialists from PGIMER. We provide comprehensive healthcare solutions 
                under one modern, state-of-the-art facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/appointment">
                  <motion.button
                    className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg btn-hover-effect"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Book Appointment</span>
                  </motion.button>
                </Link>
                <motion.a
                  href="tel:+919814038031"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-white" />
                  <span className="font-medium">Licensed & Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-white" />
                  <span className="font-medium">15+ Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Stats Cards with Glass Effect */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆 Best in Chandigarh
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals 
              using state-of-the-art technology and modern treatment methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-professional group hover:shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative mb-6">
                  {/* Bright Icon Container */}
                  <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    {/* White background for better icon visibility */}
                    <div className="absolute inset-2 bg-white rounded-xl shadow-inner"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-12 w-12 relative z-10 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm"
                    />
                  </div>
                  
                  {/* Background accent */}
                  <div className={`${service.color} absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-2xl -z-10 group-hover:scale-125 transition-transform duration-300 opacity-60`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/services">
              <motion.button
                className="btn-primary flex items-center space-x-2 mx-auto btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Patient Gallery Carousel Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the transformations and see the smiles we've created. 
              Our patients' happiness and satisfaction are our greatest achievements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageCarousel />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/gallery">
              <motion.button
                className="btn-primary flex items-center space-x-2 mx-auto btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Full Gallery</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose SmileMakers?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are committed to providing exceptional healthcare services with 
                a patient-centered approach, combining expertise with compassion.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-xl text-slate-600">
              Experienced professionals from PGIMER providing world-class healthcare
            </p>
          </motion.div>

          {/* Single row layout for all screen sizes */}
          <div className="flex justify-center gap-6 lg:gap-8 overflow-x-auto pb-4">
            {[
              { image: '/images/dr-1.jpg', name: 'Dr. Ambika Dhaliwal', specialty: 'Oral Medicine & Radiology' },
              { image: '/images/dr-2.jpg', name: 'Dr. Yadvinder S Dhaliwal', specialty: 'Orthodontist' },
              { image: '/images/dr-5.jpg', name: 'Dr. Rajinder Singh Dhaliwal', specialty: 'Cardiothoracic Surgeon' },
              { image: '/images/dr-6.jpg', name: 'Dr. Lakhbir Kaur Dhaliwal', specialty: 'Infertility Specialist' }
            ].map((doctor, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 text-center group w-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <div className="relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-36 h-36 object-cover rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 border-4 border-white"
                    />
                    {/* Professional badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Stethoscope className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Clean text without boxes */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-teal-600 font-semibold text-sm">
                    {doctor.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/team">
              <motion.button
                className="btn-primary flex items-center space-x-2 mx-auto btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Meet Our Full Team</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued patients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-gradient">Clinic</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find us in the heart of Chandigarh with convenient location and hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Google Maps Embed */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.8524621935945!2d76.75133831508543!3d30.696993081644805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca0c1c91ef%3A0x6ab5c5d59e5a67c8!2sSmilemakers%20Dental!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smilemakers Dental Sector 49 Chandigarh"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Address Card */}
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl"></div>
                <div className="relative p-8 border border-blue-200 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Location</h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="text-lg font-semibold text-blue-800">Smilemakers Dental and Orthodontic Clinic</p>
                        <p className="text-base leading-relaxed">
                          Flat no. 520, Vigyan Vihar Society<br />
                          Sector 49-A, Chandigarh<br />
                          Punjab, India
                        </p>
                        <motion.a
                          href="https://maps.app.goo.gl/APQjQpJtJ6xpFo7N6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mt-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span>View on Google Maps</span>
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Phone Numbers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  Contact Numbers
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+919814038031"
                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Primary Contact</p>
                      <p className="text-blue-600 text-lg font-medium">+91-98140 38031</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+919814038093"
                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Alternative Contact</p>
                      <p className="text-blue-600 text-lg font-medium">+91-98140 38093</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  Working Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Monday - Saturday</span>
                    <span className="text-blue-600 font-medium">10:30 AM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Sunday</span>
                    <span className="text-blue-600 font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Email & Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:yadvinderdhaliwal@hotmail.com"
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-blue-600">yadvinderdhaliwal@hotmail.com</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/919814038031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-green-100">Quick consultation</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Your Smile Back?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule an appointment today and experience world-class healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <motion.button
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Appointment
                </motion.button>
              </Link>
              <motion.a
                href="tel:+919814038031"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: +91-98140 38031
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home 