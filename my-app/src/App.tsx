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
import Plk110_30_tl from './pages/owen/Plk110_30_tl'
import Pr200_24_5_1_0 from './pages/owen/Pr200_24_5_1_0'
import Dts125m_50m_0_5_60_i_50 from './pages/owen/Dts125m_50m_0_5_60_i_50'
import Sp315_r from './pages/owen/Sp315_r'
import Mv110_224_8a from './pages/owen/Mv110_224_8a'
import Gz_16_3_7_100 from './pages/owen/Gz_16_3_7_100'

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
						<Route
							path='/catalog/owen/plk110-220-30-tl'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Plk110_30_tl />}
						/>
						<Route
							path='/catalog/owen/pr200-24-5-1-0'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Pr200_24_5_1_0 />}
						/>
						<Route
							path='/catalog/owen/dts125m-50m-0-5-60-i-15'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Dts125m_50m_0_5_60_i_50 />}
						/>
						<Route
							path='/catalog/owen/sp315-r'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Sp315_r />}
						/>
						<Route
							path='/catalog/owen/mv110-224-8a'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Mv110_224_8a />}
						/>
						<Route
							path='/catalog/owen/gz-16-3-7-100'
							// eslint-disable-next-line react/jsx-pascal-case
							element={<Gz_16_3_7_100 />}
						/>
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
