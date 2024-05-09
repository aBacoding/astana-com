import React, { useEffect } from 'react'

import { initializeTestimonialSlider } from '../utils/slickConfig'

const AboutUs: React.FC = () => {
	useEffect(() => {
		initializeTestimonialSlider()
	})

	return (
		<>
			<div className='page-header'>
				<div
					className='container'
					data-aos='zoom-in'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1500'
				>
					<div className='row'>
						<div className='col-12'>
							<h2>О Компании</h2>
						</div>
						<div className='col-12'>
							<a href='/about'>ТОО "Астана Ком"</a>
							<a href='/about'>О нас</a>
						</div>
					</div>
				</div>
			</div>

			<div className='about'>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div
							className='col-md-6'
							data-aos='fade-down'
							data-aos-easing='linear'
							data-aos-duration='1000'
							data-aos-delay='500'
						>
							<img src='img/logo/astanacomlogo.png' alt='Img' />
						</div>
						<div
							className='col-md-6'
							data-aos='fade-left'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='500'
						>
							<h2 className='section-title'>ТОО "Астана Ком"</h2>
							<p>
								<strong>ТОО "Астана Ком"</strong> – ведущий поставщик
								контрольно-измерительных приборов и программных решений для
								автоматизации. Мы предлагаем оборудование для ГВС, отопления,
								вентиляции, котельных и пищевых производств: измерители,
								счетчики, таймеры, тахометры, промышленные контроллеры,
								сенсорные панели, преобразователи частоты, датчики, реле и
								многое другое. Всегда готовы проконсультировать и помочь выбрать
								оптимальное решение.
							</p>
							<p>
								Компания ТОО "Астана Ком" с 2015 года является официальным
								дистрибьютором ПО ОВЕН, РОСМА, Schneider Electric, DEKraft. Мы
								гордимся широким ассортиментом высококачественного
								измерительного и контрольного оборудования, программируемых
								устройств, силовых и коммутационных устройств, датчиков и
								программного обеспечения. {''}
								<strong>Наша цель</strong> — предоставлять инновационную и
								надежную продукцию, которая помогает клиентам оптимизировать
								процессы и повысить эффективность.
							</p>
							<p>
								Наши{' '}
								<strong>
									контрольно-измерительные приборы, программируемые устройства,
									силовые и коммутационные устройства, а также датчики
								</strong>{' '}
								обеспечивают точные и надежные показания, гибкость управления и
								эффективное электропитание. Дополняют это программное
								обеспечение и коммуникационные устройства, которые создают
								бесшовную связь между оборудованием и позволяют мониторить и
								собирать данные для улучшения бизнес-процессов.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='team'>
				<div className='container-fluid'>
					<div
						className='section-header'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<h2>Наши сотрудники</h2>
						<p>
							Мы, <strong>ТОО "Астана Ком",</strong> готовы обслужить вас в
							любое время, стремясь к непрерывному совершенствованию наших
							систем для предоставления первоклассного сервиса и максимального
							удовлетворения потребностей клиентов.
						</p>
					</div>
					<div className='row'>
						<div
							className='col-sm-6 col-lg-3'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='team-item'>
								<div className='team-img'>
									<img src='../../img/team/rustam.jpg' alt='Team' />
								</div>
								<div className='team-text'>
									<h3>Рустам Латыпов</h3>
									<p>CEO</p>
								</div>
								<div className='team-social'>
									<a
										href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-whatsapp'></i>
									</a>
									<a href='https://www.youtube.com/@RustamLatypov'>
										<i className='fab fa-youtube'></i>
									</a>
									<a
										href='mailto:rl@a.com.kz?subject=Добрый день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fa fa-envelope'></i>
									</a>
									<a
										href='https://www.instagram.com/astana_com_kz/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</div>
							</div>
						</div>
						<div
							className='col-sm-6 col-lg-3'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='team-item'>
								<div className='team-img'>
									<img src='../../img/team/kanat.jpg' alt='Team' />
								</div>
								<div className='team-text'>
									<h3>Канат Молха</h3>
									<p>Директор ТОО "Астана Ком"</p>
								</div>
								<div className='team-social'>
									<a
										href='https://api.whatsapp.com/send?phone=+77082758020&text=Добрый%20день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-whatsapp'></i>
									</a>
									<a
										href='mailto:km@a.com.kz?subject=Добрый день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fa fa-envelope'></i>
									</a>
									<a
										href='https://www.instagram.com/astana_com_kz/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</div>
							</div>
						</div>
						<div
							className='col-sm-6 col-lg-3'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='team-item'>
								<div className='team-img'>
									<img src='../../img/team/almaz.jpeg' alt='Team' />
								</div>
								<div className='team-text'>
									<h3>Алмаз Кашкинов</h3>
									<p>ИО Директора ТОО "Астана Ком"</p>
								</div>
								<div className='team-social'>
									<a
										href='https://api.whatsapp.com/send?phone=+77082758020&text=Добрый%20день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-whatsapp'></i>
									</a>
									<a
										href='mailto:ak@a.com.kz?subject=Добрый день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fa fa-envelope'></i>
									</a>
									<a
										href='https://www.instagram.com/astana_com_kz/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</div>
							</div>
						</div>
						<div
							className='col-sm-6 col-lg-3'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='team-item'>
								<div className='team-img'>
									<img src='../../img/team/daniyar.jpeg' alt='Team' />
								</div>
								<div className='team-text'>
									<h3>Данияр Шариханов</h3>
									<p>Инженер-программист АСУ</p>
								</div>
								<div className='team-social'>
									<a
										href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-whatsapp'></i>
									</a>
									<a
										href='mailto:shd@a.com.kz?subject=Добрый день!'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fa fa-envelope'></i>
									</a>
									<a
										href='https://www.instagram.com/astana_com_kz/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutUs
