import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Clock, 
  MapPin,
  Calendar
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [location] = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true
    if (href !== '/' && location.startsWith(href)) return true
    return false
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-teal-600 text-white py-2 text-sm">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 10:30 AM - 8:30 PM | Sun: 10:00 AM - 2:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-98140 38031</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sector 49-A, Chandigarh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            
            {/* Logo Section - Fixed Layout */}
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0">
                  <img 
                    src="/images/smilemakers-logo.png" 
                    alt="SmileMakers Logo" 
                    className="h-14 w-auto"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <h1 className="text-2xl font-bold text-green-600 leading-none">
                    Smilemakers Wellness Centre
                  </h1>
                  <p className="text-base font-semibold text-gray-700 mt-0.5">
                    Dental & Medical
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <ul className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                          isActive(item.href)
                            ? 'bg-teal-100 text-teal-700 font-semibold'
                            : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side - CTA Button */}
            <div className="flex items-center space-x-4">
              <Link href="/appointment">
                <motion.button
                  className="hidden sm:flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-lg"
          >
            <div className="container-max py-4">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'bg-teal-100 text-teal-700'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                
                {/* Mobile CTA Button */}
                <Link href="/appointment">
                  <button
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 