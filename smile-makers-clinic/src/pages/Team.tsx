import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Award,
  BookOpen,
  Clock,
  Star,
  Mail,
  Phone
} from 'lucide-react'

const Team = () => {
  const doctors = [
    {
      image: '/images/dr-1.jpg',
      name: 'Dr. Ambika Dhaliwal',
      designation: 'Oral Medicine & Radiology Specialist',
      specialization: 'MDS(Oral Medicine & Radiology)',
      experience: '8+ Years',
      education: ['MDS(Oral Medicine & Radiology)', 'Ex. Prof. & HOD, National Dental College'],
      expertise: ['Oral Medicine', 'Radiology', 'Oral Ulcers', 'Dental Cosmetology', 'Smile Designing', 'Dental Implants', 'Oro-facial Pains'],
      achievements: ['Ex-professor and head for Department of oral medicine and radiology', 'Expert in Oral cancer and General dentistry', 'Specialist in temporomandibular joint disorders'],
      email: 'contact@smilemakersdoc.com',
      phone: '+91-98140 38031'
    },
    {
      image: '/images/dr-2.jpg',
      name: 'Dr. Yadvinder S Dhaliwal',
      designation: 'Orthodontist & Dentofacial Orthopaedics',
      specialization: 'MDS(Orthodontics & Dentofacial Orthopaedics)',
      experience: '15+ Years',
      education: ['MDS(Orthodontics & Dentofacial Orthopaedics)', 'Ex. Prof. & HOD, National Dental College'],
      expertise: ['Orthodontics', 'Invisible Braces', '3-D Solutions', 'Beautiful Healthy Smiles', 'Braces for All Ages'],
      achievements: ['Graduated in 2004 with Bachelors of Dental Sciences', 'Qualified as an Orthodontist in 2009', 'Worked as professor for National Dental College for 10 years', 'Acclaimed teacher with experience of publishing research articles'],
      email: 'yadvinderdhaliwal@hotmail.com',
      phone: '+91-98140 38031'
    },
    {
      image: '/images/dr-5.jpg',
      name: 'Dr. Rajinder Singh Dhaliwal',
      designation: 'Cardiothoracic Surgeon',
      specialization: 'MBBS, MS, MN/MCG Surgery',
      experience: '25+ Years',
      education: ['MBBS, MS, MN/MCG Surgery', 'MCh, DNB(CTV Surgery)', 'FACS, FCCP, FNCCS, FICA, FIACS', 'Heart & Chest Specialist (Former Prof. & HOD, Dept. of Cardiothoracic Surgery, P.G.I, Chandigarh)'],
      expertise: ['Cardiothoracic Surgery', 'Heart Surgery', 'Chest Surgery', 'CTV Surgery'],
      achievements: ['Highly qualified Cardiothoracic Surgeon', 'Former Professor and Head of Department of Cardiothoracic Surgery at Post Graduate Institute', 'Trained 170 students for super specialty of CTV Surgery', 'Published about 200 papers in various journals'],
      email: 'cardiology@smilemakersdoc.com',
      phone: '+91-98140 38031'
    },
    {
      image: '/images/dr-6.jpg',
      name: 'Dr. Lakhbir Kaur Dhaliwal',
      designation: 'Infertility Specialist & Gynecologist',
      specialization: 'MBBS, DGO, MD(Obstetrics & Gynaecology)',
      experience: '20+ Years',
      education: ['MBBS, DGO, MD(Obstetrics & Gynaecology)', 'Ex-Prof and HOD, PGIMER'],
      expertise: ['Infertility Treatment', 'Reproductive Endocrinology', 'Gynecology', 'IVF', 'ICSI', 'Pre and Post Delivery Care', 'Infertility Evaluation/Treatment', 'Gamets & Embryo Freezing', 'High-Risk Pregnancy Care'],
      achievements: ['Infertility Specialist, Gynecologic Endocrinologist and Reproductive Endocrinologist', 'Worked at PGIMER as Ex-Prof and HOD for more than 37 years', 'Completed MBBS from Govt. Medical College, Amritsar in 1975', 'DGO from Christian Medical College, Ludhiana in 1977', 'MD - Obstetrics & Gynaecology from Christian Medical College, Ludhiana in 1979'],
      email: 'gynecology@smilemakersdoc.com',
      phone: '+91-98140 38093'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Expert Team - SmileMakers Wellness Centre | PGIMER Doctors</title>
        <meta name="description" content="Meet our experienced team of doctors from PGIMER specializing in dental care, gynecology, cardiology, and orthodontics at SmileMakers Wellness Centre." />
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
              Meet Our <span className="text-gradient">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of highly qualified doctors from PGIMER brings together decades 
              of experience and expertise to provide you with world-class healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                    <div className="relative">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {doctor.experience}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="h-full flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                      <p className="text-xl text-blue-600 font-semibold mb-1">{doctor.designation}</p>
                      <p className="text-lg text-gray-600 mb-6">{doctor.specialization}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                            <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                            Education
                          </h4>
                          <ul className="space-y-1">
                            {doctor.education.map((edu, eduIndex) => (
                              <li key={eduIndex} className="text-gray-600 text-sm">{edu}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                            <Star className="h-5 w-5 text-blue-600 mr-2" />
                            Expertise
                          </h4>
                          <ul className="space-y-1">
                            {doctor.expertise.map((exp, expIndex) => (
                              <li key={expIndex} className="text-gray-600 text-sm">{exp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                          <Award className="h-5 w-5 text-blue-600 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {doctor.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={`mailto:${doctor.email}`}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">{doctor.email}</span>
                        </a>
                        <a 
                          href={`tel:${doctor.phone}`}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">{doctor.phone}</span>
                        </a>
                      </div>
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
              Schedule a Consultation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book an appointment with our expert doctors for personalized care
            </p>
            <motion.a
              href="/appointment"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="h-5 w-5" />
              <span>Book Appointment</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Team 