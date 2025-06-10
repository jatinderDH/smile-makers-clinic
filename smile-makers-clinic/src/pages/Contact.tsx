import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CalendlyWidget from '../components/CalendlyWidget'
import { 
  Phone,
  Calendar,
  Send,
  ExternalLink,
  CheckCircle,
  User,
  MessageSquare,
  Clock
} from 'lucide-react'

const Contact = () => {
  const [appointmentType, setAppointmentType] = useState('new')
  const [selectedService, setSelectedService] = useState('')

  // Single Calendly URL for free account
  const calendlyUrl = 'https://calendly.com/smilemakers-chandigarh'

  const services = [
    'Orthodontics',
    'Crown & Bridges', 
    'Dental Implants',
    'Teeth Whitening',
    'Root Canal Treatment',
    'IVF/Fertility Clinic',
    'Heart & Chest Clinic',
    'General Consultation'
  ]

  const timeSlots = [
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ]

  return (
    <>
      <Helmet>
        <title>Book Appointment - SmileMakers Wellness Centre</title>
        <meta name="description" content="Book your appointment online at SmileMakers Wellness Centre. Schedule consultation with our expert medical team offering dental, orthodontic, IVF, and cardiac services in Chandigarh." />
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
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Schedule your visit with our expert medical team. Choose from our comprehensive 
              range of healthcare services and book your convenient time slot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Appointment Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  Quick Appointment Request
                </h3>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`p-3 text-left rounded-lg border-2 transition-all ${
                          selectedService === service
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{service}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Appointment Type */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Appointment Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setAppointmentType('new')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        appointmentType === 'new'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <User className="h-5 w-5 mx-auto mb-2" />
                      <div className="font-medium">New Patient</div>
                    </button>
                    <button
                      onClick={() => setAppointmentType('followup')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        appointmentType === 'followup'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <CheckCircle className="h-5 w-5 mx-auto mb-2" />
                      <div className="font-medium">Follow-up</div>
                    </button>
                  </div>
                </div>

                {/* Contact Options */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Us to Book
                  </h4>
                  
                  <div className="space-y-3">
                    <motion.a
                      href="tel:+919814038031"
                      className="flex items-center space-x-4 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="h-5 w-5" />
                      <div>
                        <div className="font-semibold">Call Now</div>
                        <div className="text-blue-100">+91-98140 38031</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/919814038031"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-green-100">Quick booking via WhatsApp</div>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Available Time Slots */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="p-2 text-center text-sm bg-blue-50 text-blue-700 rounded-lg border border-blue-200"
                    >
                      {time}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Available Monday-Saturday. Sunday: 10:00 AM - 2:00 PM only
                </p>
              </div>
            </motion.div>

            {/* Online Booking Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  Online Booking
                </h3>
                
                <div className="mb-6">
                  <CalendlyWidget url={calendlyUrl} />
                </div>
                
                <div className="text-center">
                  <motion.a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Open Full Booking Calendar</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Emergency Contact
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent medical emergencies, please call us directly:
                </p>
                <a
                  href="tel:+919814038031"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency: +91-98140 38031</span>
                </a>
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Appointment Information
                </h3>
                <div className="space-y-3 text-blue-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Confirmation within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Free consultation for new patients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Flexible rescheduling options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Multiple payment options available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Request <span className="text-gradient">Appointment</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fill out the form below to request your appointment. Our team will contact you 
              within 2 hours to confirm your booking.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98140 38031"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Service *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                    <option value="">Select a service</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="crown-bridges">Crown & Bridges</option>
                    <option value="dental-implants">Dental Implants</option>
                    <option value="teeth-whitening">Teeth Whitening</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="ivf">IVF/Fertility</option>
                    <option value="cardiology">Heart & Chest</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your symptoms or specific requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>Request Appointment</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact