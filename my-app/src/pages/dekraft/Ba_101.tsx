import React, { useEffect } from 'react'

const Ba_101: React.FC = () => {
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
							<h2>DEKraft</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/catalog/dekraft/ba-101'>BA-101</a>
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
												src='../../img/dekraft/ba101-2.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/dekraft/ba101-1.jpg'
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
										Автоматический выключатель 3Р 40А х-ка C ВА-101 4,5кА
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>2 500 ₸</span>
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
																	value='2 500 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Автоматический%20выключатель%20DEKraft%20ВА-101.'
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
										<strong>Автоматический выключатель ВА-101 DEKraft</strong>{' '}
										модульный коммутационный аппарат с номинальной отключающей
										способностью в 4,5кА. Защищает электрические цепи от
										превышения нагрузки и токов короткого замыкания. Работает
										при номинальном напряжении частотой 50/60 Гц, имеет широкий
										диапазон температур от -40 °C до +60 ° C. Данный тип
										аппарата имеет ряд преимуществ такие как: защитная пленка,
										насечки на клеммах, которая обеспечивает качественный
										контакт и снижает потерю тока, качественную маркировку,
										рукоятка с поперечной планкой и др.
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
											<li>Количество полюсов: 3</li>
											<li>
												Назначение: Розетки/линии с умеренными пусковыми токами
											</li>
											<li>Номинальная отключающая способность: 4,5кА</li>
											<li>Номинальное напряжение: 400В</li>
											<li>Номинальный ток: 40 А</li>
											<li>
												Тип устройства: Автоматический выключатель с тепловым
												расцепителем
											</li>
											<li>Характеристика срабатывания: C</li>
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

export default Ba_101
