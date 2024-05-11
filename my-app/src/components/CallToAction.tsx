import React, { useEffect } from 'react'
import { initializeTypedText, TypedTextData } from '../utils/typedText'

const CallToAction: React.FC = () => {
	useEffect(() => {
		const typingData: TypedTextData = {
			target: 'typing-text',
			text: ['Всегда рады помочь!', 'Свяжитесь с нами!'],
			delay: 10000,
		}
		initializeTypedText(typingData)
	}, [])

	return (
		<div className='call-to-action'>
			<div className='container'>
				<div className='row align-items-center'>
					<div
						className='col-md-8'
						data-aos='fade-right'
						data-aos-easing='linear'
						data-aos-duration='500'
					>
						<h2 className='typing-text'>{}</h2>
						<p>
							<strong>ТОО "Астана Ком"</strong> {''} всегда рядом с вами,
							обеспечивая надежные решения и поддержку в любой ситуации.
						</p>
					</div>
					<div
						className='col-md-2'
						data-aos='zoom-in'
						data-aos-easing='ease-in-sine'
						data-aos-duration='1000'
					>
						<a className='btn' href='/contact'>
							Контакт
						</a>
					</div>
					<div
						className='col-md-2'
						data-aos='zoom-in'
						data-aos-easing='ease-in-sine'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<a className='btn' href='/company/payment'>
							Сделка
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CallToAction
