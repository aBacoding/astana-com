import React, { useEffect } from 'react'

const Gz_16_3_7_100: React.FC = () => {
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
							<h2>ОВЕН</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/catalog/owen/gz-16-3-7-100'>ГЗ.16.3.7.100</a>
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
												src='../../img/owen/gz-16-3-7-100.png'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/gz-16.png'
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
										Гильза защитная ГЗ.16.3.7.100
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>9 430 ₸</span>
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
																	value='9 430 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Гильза%20защитная%20ГЗ.16.3.7.100.'
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
										Сварные цилиндрические{' '}
										<strong>гильзы защитные ГЗ.16</strong> предназначены для
										установки датчиков температуры с диаметрами монтажной части
										8 мм.
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Преимущества использования гильз защитных</strong>
										<ul>
											<li>
												Безопасный монтаж/демонтаж датчика температуры без
												нарушения герметизации системы.
											</li>
											<li>
												Защита монтажной части датчика от механического
												воздействия рабочей среды.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Конструктивное исполнение гильз ГЗ.16 с резьбовым
											присоединением к процессу
										</strong>
										<ul>
											<img
												src='../../img/owen/schema_gz-16.png'
												className='d-block w-100'
												alt='...'
											/>
										</ul>
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
											<li>Температура эксплуатации: до +600 °С.</li>
											<li>
												Гильзы подвергаются приемосдаточным испытаниям пробным
												давлением и должны эксплуатироваться при рабочем
												давлении, указанном в ГОСТ 356-80 таблица 10.
											</li>
											<li>
												Подходит для монтажа датчиков температуры до 8 мм.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Материалы деталей, контактирующих с рабочей средой
										</strong>
										<ul>
											<li>Трубка – 12Х18Н10Т.</li>
											<li>Штуцер и пробка – AISI 304 (аналог 08Х18Н10Т).</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Конструктивное исполнение</strong>
										<ul>
											<li>Обозначение при заказе: ГЗ.16.3.7.100</li>
											<li>Давление рабочей среды: до 16 МПа.</li>
											<li>Крепежная резьба внешняя М: G1/2</li>
											<li>Крепежная резьба внутренняя М1: М16×1,5</li>
											<li>Внешний диаметр D: 12 мм (±0,4 мм)</li>
											<li>Внутренний диаметр d: 9,6 мм (±0,7 мм).</li>
											<li>Длина монтажной части L: 100 мм</li>
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

export default Gz_16_3_7_100
