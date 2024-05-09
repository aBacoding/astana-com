import React, { useEffect } from 'react'
import { initializeTestimonialSlider } from '../utils/slickConfig'

const Testimonial: React.FC = () => {
	useEffect(() => {
		initializeTestimonialSlider()
	}, [])

	return (
		<div className='testimonial'>
			<div
				className='container'
				data-aos='flip-left'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='2000'
				data-aos-delay='300'
			>
				<div className='section-header'>
					<h2>Отзывы Клиентов</h2>
					<p>
						Удовлетворение потребностей наших клиентов — наш главный приоритет.
						Мы стремимся к высочайшим стандартам дисциплины, качества и
						честности, неизменно делая это своей главной целью.
					</p>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='testimonial-slider-nav'>
							<div className='slider-nav'>
								<img src='img/clients/client-1.jpg' alt='Testimonial' />
							</div>
							<div className='slider-nav'>
								<img src='img/clients/client-2.jpg' alt='Testimonial' />
							</div>
							<div className='slider-nav'>
								<img src='img/clients/client-3.jpeg' alt='Testimonial' />
							</div>
							<div className='slider-nav'>
								<img src='img/clients/client-4.jpg' alt='Testimonial' />
							</div>
							<div className='slider-nav'>
								<img src='img/clients/client-5.jpg' alt='Testimonial' />
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='testimonial-slider'>
							<div className='slider-item'>
								<h3>Анатолий Григорьяди</h3>
								<h4>Специалист по снабжению</h4>
								<p>
									"Астана Ком неизменно удивляет уровнем сервиса и широким
									ассортиментом. Грамотные специалисты всегда готовы помочь с
									выбором, а качество продукции — на высоте."
								</p>
							</div>
							<div className='slider-item'>
								<h3>Наиль</h3>
								<h4>Инженер АСУ</h4>
								<p>
									"Работать с Астана Ком — одно удовольствие! Профессионализм,
									ответственность и неизменно высокое качество оборудования
									делают их нашими надежными партнерами уже не первый год."
								</p>
							</div>
							<div className='slider-item'>
								<h3>Кундыз</h3>
								<h4>Клиент</h4>
								<p>
									"Сотрудничество с Астана Ком — это всегда уверенность в
									надежности и своевременности. Приятно работать с партнерами,
									которые держат свое слово и действительно заботятся о
									клиентах."
								</p>
							</div>
							<div className='slider-item'>
								<h3>Мурат</h3>
								<h4>Менеджер по закупу приборов автоматизации</h4>
								<p>
									"Мы давно искали надежного поставщика, и Астана Ком оказался
									лучшим выбором. Качественное оборудование и оперативная
									поддержка сделали их нашим постоянным партнером."
								</p>
							</div>
							<div className='slider-item'>
								<h3>Досан</h3>
								<h4>Специалист ОМТС</h4>
								<p>
									"Потрясающая компания с безупречным сервисом! Астана Ком
									предложила оптимальные решения и продемонстрировала
									невероятное мастерство в своем деле."
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
