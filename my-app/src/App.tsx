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
import PaymentDelivery from './pages/PaymentDelivery'
import Owen from './pages/Owen'
import './App.css'
import Rosma from './pages/Rosma'
import Dekraft from './pages/Dekraft'
import Schneider from './pages/Schneider'

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
						<Route path='/payment' element={<PaymentDelivery />} />
						<Route path='/owen' element={<Owen />} />
						<Route path='/rosma' element={<Rosma />} />
						<Route path='/schneider-electric' element={<Schneider />} />
						<Route path='/dekraft' element={<Dekraft />} />
					</Routes>
					<CallToAction />
					<Footer />
				</div>
			</div>
		</Router>
	)
}

export default App
