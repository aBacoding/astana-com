import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AboutUs from './pages/AboutUs'
import Service from './components/Service'
import FAQs from './components/FAQs'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Partners from './pages/Partners'
import './App.css'

const App: React.FC = () => {
	return (
		<Router>
			<div className='App'>
				<div className='wrapper'>
					<Header />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<Hero />
									<About />
									<Service />
									<FAQs />
									<Testimonial />
								</>
							}
						/>
						<Route path='/about' element={<AboutUs />} />
						<Route path='/partners' element={<Partners />} />
					</Routes>
					<CallToAction />
					<Footer />
				</div>
			</div>
		</Router>
	)
}

export default App
