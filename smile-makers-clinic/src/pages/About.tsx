import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Users,
  Award,
  Heart,
  Shield,
  Stethoscope,
  Star,
  CheckCircle,
  Target,
  Eye
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care and continuously improve our services.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Patient safety is our top priority with strict hygiene protocols and modern equipment.'
    },
    {
      icon: Users,
      title: 'Team Approach',
      description: 'Our multidisciplinary team works together to provide comprehensive healthcare solutions.'
    }
  ]

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '1000+', label: 'Happy Patients' },
    { number: '8', label: 'Specialized Services' },
    { number: '4', label: 'Expert Doctors' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - SmileMakers Wellness Centre | Expert Healthcare in Chandigarh</title>
        <meta name="description" content="Learn about SmileMakers Wellness Centre - a state-of-the-art dental and medical facility in Chandigarh with experienced PGIMER doctors providing comprehensive healthcare." />
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
              About <span className="text-gradient">SmileMakers</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A state-of-the-art dental and medical centre providing specialized treatment 
              of global quality under one roof, with experienced professionals from PGIMER.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SmileMakers Wellness Centre was founded with a vision to provide 
                  comprehensive healthcare services that combine medical excellence 
                  with compassionate care. Our journey began with a simple belief: 
                  every patient deserves access to world-class healthcare.
                </p>
                <p>
                  Located in the heart of Chandigarh, our clinic brings together 
                  experienced professionals from PGIMER who are dedicated to 
                  delivering exceptional medical and dental care. We have built 
                  our reputation on trust, expertise, and a patient-centered approach.
                </p>
                <p>
                  Today, we are proud to be a leading healthcare provider in the 
                  region, offering specialized services in dentistry, gynecology, 
                  cardiothoracic surgery, and fertility treatment under one roof.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, compassionate, and cutting-edge healthcare 
                services that improve the quality of life for our patients and their 
                families. We are committed to excellence in medical care, education, 
                and research while maintaining the highest ethical standards.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare provider in the region, recognized for 
                our clinical excellence, innovative treatments, and patient-centered 
                approach. We envision a future where quality healthcare is accessible 
                to all, delivered with compassion and expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment 
              to exceptional healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose SmileMakers?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine medical expertise with compassionate care to deliver 
              exceptional healthcare experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Experienced PGIMER doctors',
              'State-of-the-art technology',
              'Comprehensive services under one roof',
              'Patient-centered approach',
              'Strict hygiene protocols',
              'Flexible appointment scheduling',
              'Emergency care available',
              'Affordable treatment options',
              'Multilingual staff support'
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Accreditations & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <Stethoscope className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Medical Council Certified
                </h3>
                <p className="text-gray-600">
                  All our doctors are certified by relevant medical councils
                </p>
              </div>
              <div className="card text-center">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Standards
                </h3>
                <p className="text-gray-600">
                  Maintaining highest quality standards in healthcare delivery
                </p>
              </div>
              <div className="card text-center">
                <Star className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Patient Satisfaction
                </h3>
                <p className="text-gray-600">
                  Consistently high patient satisfaction ratings
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About 