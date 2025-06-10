import { Router, Route, Switch } from 'wouter'
import { HelmetProvider } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsApp from './components/WhatsApp'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/team" component={Team} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/appointment" component={Contact} />
                <Route path="/contact">
                  {() => {
                    window.location.href = '/'
                    return null
                  }}
                </Route>
                <Route>
                  <div className="section-padding">
                    <div className="container-max text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Page Not Found
                      </h1>
                      <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist.
                      </p>
                      <a href="/" className="btn-primary">
                        Go Home
                      </a>
                    </div>
                  </div>
                </Route>
              </Switch>
            </motion.main>
          </AnimatePresence>
          
          <Footer />
          <ScrollToTop />
          <WhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
