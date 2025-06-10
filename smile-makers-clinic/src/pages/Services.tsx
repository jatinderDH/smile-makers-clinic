import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      image: '/images/dental.png',
      title: 'Orthodontics',
      description: 'Correcting teeth and jaws positioning for a healthier mouth and pleasing appearance using modern braces and aligners.',
      features: ['Metal Braces', 'Ceramic Braces', 'Invisible Aligners', 'Retainers'],
      color: 'bg-blue-100'
    },
    {
      image: '/images/care.png',
      title: 'Crown & Bridges',
      description: 'Fixed prosthetic devices cemented onto existing teeth or implants to restore function and aesthetics.',
      features: ['Porcelain Crowns', 'Metal Crowns', 'Fixed Bridges', 'Implant Crowns'],
      color: 'bg-green-100'
    },
    {
      image: '/images/teeth.png',
      title: 'Dental Implants',
      description: 'Surgical components that interface with bone to support dental prosthesis like crowns, bridges, or dentures.',
      features: ['Single Implants', 'Multiple Implants', 'All-on-4', 'Bone Grafting'],
      color: 'bg-purple-100'
    },
    {
      image: '/images/cosmetic.png',
      title: 'Teeth Whitening',
      description: 'Effective way of lightening natural tooth color without removing tooth surface for a brighter smile.',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Laser Whitening', 'Custom Trays'],
      color: 'bg-yellow-100'
    },
    {
      image: '/images/hygien.png',
      title: 'Root Canal Treatment',
      description: 'Single-sitting RCT performed using advanced endodontic technology to save infected teeth.',
      features: ['Single Visit RCT', 'Rotary Endodontics', 'Microscopic RCT', 'Pain-free Treatment'],
      color: 'bg-red-100'
    },
    {
      image: '/images/ivf2.png',
      title: 'IVF/Fertility Clinic',
      description: 'Complete fertility care including IVF, IUI, ICSI, and counselling services for couples.',
      features: ['IVF Treatment', 'IUI Procedures', 'ICSI', 'Fertility Counseling'],
      color: 'bg-pink-100'
    },
    {
      image: '/images/heartchest.png',
      title: 'Heart & Chest Clinic',
      description: 'Expert treatment for heart, lungs, and blood vessel related conditions by experienced cardiologists.',
      features: ['Cardiac Consultation', 'ECG & Echo', 'Chest X-Ray', 'Heart Surgery'],
      color: 'bg-indigo-100'
    },
    {
      image: '/images/surgery.png',
      title: 'Metal Free Crown',
      description: 'Highly aesthetic ceramic restorations that imitate natural teeth for a perfect smile.',
      features: ['Zirconia Crowns', 'E-max Crowns', 'Porcelain Veneers', 'Aesthetic Fillings'],
      color: 'bg-teal-100'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - SmileMakers Wellness Centre | Comprehensive Healthcare</title>
        <meta name="description" content="Comprehensive dental and medical services at SmileMakers including orthodontics, dental implants, IVF, heart treatment, and more by experienced PGIMER doctors." />
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive healthcare services delivered by experienced professionals 
              using state-of-the-art technology and modern treatment methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${service.color} w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg border border-gray-200`}>
                    <div className="bg-white p-2 rounded-md shadow-inner">
                      <img src={service.image} alt={service.title} className="h-10 w-10 filter drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book an appointment today and let our experts take care of your health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <motion.button
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </motion.button>
              </Link>
              <Link href="/appointment">
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services 