import React, { useEffect } from 'react'

const Iem3155: React.FC = () => {
	useEffect(() => {
		const bootstrap = require('bootstrap')
		var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
		var carousel = new bootstrap.Carousel(myCarousel, {
			interval: 2000,
			wrap: true,
		})
	})

	return (
		<div>
			<div className='page-header'>
				<div
					className='container'
					data-aos='zoom-in'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1500'
				>
					<div className='row'>
						<div className='col-12'>
							<h2>Schneider Electric</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/catalog/schneider-electric/iem3155'>iEM3155</a>
						</div>
					</div>
				</div>
			</div>

			<div className='testimonial'>
				<div
					className='container'
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='500'
					data-aos-delay='500'
				>
					<div className='card mb-3'>
						<div className='row g-0'>
							<div className='col-md-7'>
								<div
									id='carouselExampleSlidesOnly'
									className='carousel slide'
									data-bs-ride='carousel'
								>
									<div className='carousel-inner'>
										<div
											className='carousel-item active'
											data-bs-interval='4000'
										>
											<img
												src='../../img/schneider/iem3155-1.png'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/schneider/iem3155-2.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/schneider/iem3155-3.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-5'>
								<div className='card-body'>
									<h5 className='card-title details-prod'>
										Счетчик 3-ф актив.-реакт. iEM3155, 4 тарифа, RS-485, кл.
										точн. 1, прям. вкл.
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>143 000 ₸</span>
									</p>
									<div className='card'>
										<h5 className='card-header detailed'>Купить сейчас</h5>
										<div className='card-body'>
											<h5 className='card-title'>
												Бесплатная доставка по Казахстану
											</h5>
											<p className='card-text'>
												Цена с учетом 12% НДС. Оплата по безналичному расчету
												согласно счету на оплату, выставленного нашими
												сотрудниками. Подробнее по оплате и доставке можно
												узнать <a href='/company/payment'>тут</a>.
											</p>
											<div className='table-responsive'>
												<table className='table' id='harga'>
													<thead>
														<tr>
															<th>Наличие</th>
															<th>Стоимость</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<p>1 шт.</p>
															</td>
															<td
																style={{
																	paddingLeft: '25px',
																	fontFamily:
																		"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
																}}
															>
																<input
																	type='text'
																	value='143 000 ₸'
																	className='price form-control'
																	style={{
																		width: '110px',
																		display: 'inline',
																		textAlign: 'center',
																	}}
																	disabled
																/>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<a
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Счетчик%203-ф%20Schneider%20Electric%20iEM3155.'
												className='btn btn-success'
												target='_blank'
												rel='noreferrer'
											>
												<i className='fab fa-whatsapp'></i> Заказать через
												WhatsApp
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								data-bs-toggle='tab'
								href='#description'
							>
								<i className='fa fa-info-circle' aria-hidden='true'></i>{' '}
								Описание
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								data-bs-toggle='tab'
								href='#characteristics'
							>
								<i className='fa fa-list-alt' aria-hidden='true'></i>{' '}
								Характеристики
							</a>
						</li>
					</ul>
					<div className='tab-content'>
						<div className='tab-pane active' id='description'>
							<div className='row border g-0 rounded shadow-sm'>
								<div className='col m-4'>
									<h4 style={{ fontWeight: 'bold', color: '#000000' }}>
										Описание
									</h4>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Счетчики Acti 9 iEM3000</strong> – это модульные
										приборы с креплением на DIN рейку, обладающие широким
										спектром измерительных возможностей. Обладая функцией учета
										электроэнергии по четырем квадрантам (двунаправленная
										активная и реактивная), они предоставляют полные возможности
										для учета как полученной, так и отданной электроэнергии при
										наличии локальной генерации. Кроме этого, приборы
										обеспечивают измерение всех базовых параметров сети (V, I,
										P, PF) и учет электроэнергии по 4 тарифным зонам.
									</p>
								</div>
							</div>
						</div>
						<div className='tab-pane' id='characteristics'>
							<div className='row border g-0 rounded shadow-sm'>
								<div className='col m-4'>
									<h4 style={{ fontWeight: 'bold', color: '#000000' }}>
										Характеристики
									</h4>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Технические характеристики</strong>
										<ul>
											<li>
												Класс точности измерения активной энергии: 1.0 (модели
												iEM3100)
											</li>
											<li>Класс точности измерения реактивной энергии: 2</li>
											<li>Графический дисплей</li>
											<li>Компактные размеры и простой монтаж на DIN рейку</li>
											<li>
												Пломбируемые крышки для защиты прибора от
												непреднамеренного подключения
											</li>
											<li>Внутренние часы</li>
											<li>
												Хранение текущих значений внутренних часов и даты, а
												также накопленной энергии по тарифам в течение 48 часов
												после пропадания питания
											</li>
											<li>Учет электроэнергии по 4 тарифным зонам</li>
											<li>Цифровые входы и выходы</li>
											<li>
												Возможность мониторинга других энергоресурсов (вода,
												пар, газ, тепло)
											</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Iem3155
