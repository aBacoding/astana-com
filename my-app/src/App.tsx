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
import FAQPage from './pages/FAQs_detailed'
import Services from './pages/Services'
import Terms from './pages/Terms'
import GeneralAgreements from './pages/GeneralAgreement'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import NotFoundPage from './pages/404'

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
						<Route path='/company/about' element={<AboutUs />} />
						<Route path='/company/partners' element={<Partners />} />
						<Route path='/company/payment' element={<PaymentDelivery />} />
						<Route path='/catalog/owen' element={<Owen />} />
						<Route path='/catalog/rosma' element={<Rosma />} />
						<Route path='/catalog/schneider-electric' element={<Schneider />} />
						<Route path='/catalog/dekraft' element={<Dekraft />} />
						<Route path='/help/faqs' element={<FAQPage />} />
						<Route path='/help/services' element={<Services />} />
						<Route path='/help/terms' element={<Terms />} />
						<Route
							path='/help/general-agreements'
							element={<GeneralAgreements />}
						/>
						<Route path='/help/privacy-policy' element={<PrivacyPolicy />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
					<CallToAction />
					<Footer />
				</div>
			</div>
		</Router>
	)
}

export default App
