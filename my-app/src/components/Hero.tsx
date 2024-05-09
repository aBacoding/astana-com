import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

const Hero: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(TextPlugin)

		gsap.to('.up', {
			duration: 3.1,
			delay: 2.4,
			text: 'Контрольно-измерительные приборы',
		})

		gsap.to('.down', {
			duration: 3.1,
			delay: 5.4,
			text: '& Автоматика',
		})
	}, [])

	return (
		<div className='hero'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div
						className='col-md-6'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='1000'
						data-aos-delay='1000'
					>
						<h2>
							<span className='up'></span>
						</h2>
						<h2>
							<span className='down'></span>
						</h2>
						<p>
							<strong>ТОО "Астана Ком"</strong> – ведущий поставщик
							контрольно-измерительных приборов и программных решений для
							автоматизации. Мы предлагаем оборудование для ГВС, отопления,
							вентиляции, котельных и пищевых производств: измерители, счетчики,
							таймеры, тахометры, промышленные контроллеры, сенсорные панели,
							преобразователи частоты, датчики, реле и многое другое. Всегда
							готовы проконсультировать и помочь выбрать оптимальное решение.
						</p>
					</div>
					<div
						className='col-md-6'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='1000'
					>
						<img src='img/logo/ecommerce.jpg' alt='Img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
