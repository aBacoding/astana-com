import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import FAQs from './components/FAQs'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<Hero />
				<About />
				<Service />
				<FAQs />
				<Testimonial />
				<CallToAction />
				<Footer />
			</div>
		</div>
	)
}

export default App
