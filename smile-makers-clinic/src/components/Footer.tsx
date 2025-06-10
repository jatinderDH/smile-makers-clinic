import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Shield,
  Award,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Appointment', href: '/appointment' },
  ]

  const services = [
    'Orthodontics',
    'Crown & Bridges',
    'Dental Implants',
    'Teeth Whitening',
    'Root Canal Treatment',
    'IVF/Fertility Clinic',
    'Heart & Chest Clinic',
    'General Dentistry'
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Phone, href: 'https://wa.me/919814038031?text=Hello! I would like to know more about your dental and medical services at SmileMakers Wellness Centre.', label: 'WhatsApp', isWhatsApp: true },
  ]

  const features = [
    { icon: Heart, text: 'Experienced Doctors' },
    { icon: Shield, text: 'Safe & Hygienic' },
    { icon: Award, text: 'Quality Treatment' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <img 
                    src="/images/smilemakers-logo.png" 
                    alt="SmileMakers Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <h3 className="text-xl font-bold text-white leading-none">
                    Smilemakers Wellness Centre
                  </h3>
                  <p className="text-sm text-gray-300 mt-0.5">
                    Dental & Medical
                  </p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A state-of-the-art dental and medical centre providing specialized 
                treatment of global quality under one roof. Our experienced team 
                from PGIMER ensures the best care for your health.
              </motion.p>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Quick Links
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <motion.a 
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {link.name}
                      </motion.a>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our Services
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Contact Info
              </motion.h4>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      #520, Vigyan Vihar,<br />
                      Sector 49-A, Chandigarh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div className="text-gray-300 text-sm">
                    <a href="tel:+919814038031" className="hover:text-white transition-colors">+91-98140 38031</a>
                    <br />
                    <a href="tel:+919814038093" className="hover:text-white transition-colors">+91-98140 38093</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <a 
                    href="https://wa.me/919814038031?text=Hello! I would like to know more about your dental and medical services at SmileMakers Wellness Centre."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                  >
                    WhatsApp: +91-98140 38031
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300 text-sm">yadvinderdhaliwal@hotmail.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-1" />
                  <div className="text-gray-300 text-sm">
                    <p>Mon - Sat: 10:30 AM - 8:30 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        social.isWhatsApp 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-gray-800 hover:bg-blue-600'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              © {currentYear} SmileMakers Wellness Centre. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 