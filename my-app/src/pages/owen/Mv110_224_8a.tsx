import React, { useEffect } from 'react'

const Mv110_224_8a: React.FC = () => {
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
							<a href='/catalog/owen/mv110-224-8a'>МВ110-224.8А [М01]</a>
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
												src='../../img/owen/mv110-224-8a.png'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/mv110-224-8a-1.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/mv110-224-8a-2.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/mv110-224-8a-3.jpg'
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
										Модуль аналогового ввода МВ110-224.8А [М01]
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>91 000 ₸</span>
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
																	value='91 000 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Модуль%20аналогового%20ввода%20МВ110-224.8А%20[М01].'
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
										<strong>Модули</strong> предназначены для измерения
										аналоговых сигналов встроенными аналоговыми входами,
										преобразования измеренных величин в значение физической
										величины и последующей передачи этого значения по сети
										RS-485.
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										С 1 марта 2024 года обновленные модули H/W v2.0 МВ110-8А
										поставляются с новой версией прошивки (
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/news/m10_new'
										>
											подробнее
										</a>
										). Встроенное ПО модулей H/W v2.0 несовместимо с модулями,
										выпущенными до версии H/W v2.0.
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Особенности</strong>
										<ul>
											<li>Индивидуальная конфигурация для каждого входа</li>
											<li>
												Диагностика состояния подключенных аналоговых датчиков
											</li>
											<li>Автоматическое определение протокола</li>
											<li>Съемные клеммники с невыпадающими винтами</li>
											<li>Универсальное питание (=24 В или ~230 В)</li>
											<li>
												Обновление встроенного программного обеспечения по
												RS-485
											</li>
											<li>
												Поддержка облачного сервиса{' '}
												<a
													style={{
														fontWeight: 'normal',
														color: '#4F84C4',
														textDecoration: 'underline',
													}}
													href='https://owen.ru/owencloud'
												>
													OwenCloud
												</a>{' '}
												(при использовании{' '}
												<a
													style={{
														fontWeight: 'normal',
														color: '#4F84C4',
														textDecoration: 'underline',
													}}
													href='https://owen.ru/product/pm210'
												>
													сетевого шлюза ПМ210
												</a>
												)
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Схемы подключения</strong>
										<ul>
											<img
												src='../../img/owen/schema_mv110-224.8a.png'
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
										<strong>Входы</strong>
										<ul>
											<li>Количество входов: 8 AI</li>
											<li>
												Типы поддерживаемых сигналов:
												<ul>
													<li>
														унифицированные сигналы: 0…5 мА, 0(4)…20 мА, ±50 мВ,
														0…1 В
													</li>
													<li>
														термосопротивления: 50М, Cu50, 50П, Pt50, Ni100,
														100М, Cu100, 100П, Pt100, Ni500, 500М, Cu500, 500П,
														Pt500, Ni1000, 1000М, Cu1000, 1000П, Pt1000
													</li>
													<li>
														термопары: L, J, N, K, S, R, B, T, A-1, A-2, A-3
													</li>
													<li>
														сопротивление: 0…900(2000) Ом (датчик положения
														задвижки)
													</li>
												</ul>
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Характеристики аналоговых входов (AI)</strong>
										<ul>
											<li>
												Предел основной приведенной погрешности:{' '}
												<ul>
													<li>
														±0,5 % – для термоэлектрических преобразователей
													</li>
													<li>
														±0,25 % – для термометров сопротивления и
														унифицированных сигналов
													</li>
												</ul>
											</li>
											<li>Разрядность АЦП: 16 бит</li>
											<li>
												Время опроса одного входа:
												<ul>
													<li>Унифицированные сигналы: не более 0,6 с</li>
													<li>Термосопротивления: не более 0,9 с</li>
													<li>Термопары: не более 0,6 с</li>
												</ul>
											</li>
											<li>
												Входное сопротивление для унифицированных сигналов:
												<ul>
													<li>тока 0(4)…20 мА: 130…250 Ом</li>
													<li>тока 0…5 мА: 130…500 Ом</li>
													<li>напряжения 0…1 В: не менее 200 кОм</li>
												</ul>
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Питание</strong>
										<ul>
											<li>Тип питания: универсальное ~230 В/=24 В</li>
											<li>
												Напряжение питания:{' '}
												<ul>
													<li>
														переменное: ~90…264 В (номинальное ~230) частотой
														47…63 Гц
													</li>
													<li>постоянное: =18…30 (номинальное =24) В</li>
												</ul>
											</li>
											<li>Потребляемая мощность: не более 6 ВА</li>
											<li>Напряжение встроенного источника питания: -</li>
											<li>Ток встроенного источника питания: -</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Конструктивное исполнение</strong>
										<ul>
											<li>Габаритные размеры: (63×110×75) ±1 мм</li>
											<li>Степень защиты: IP20</li>
											<li>Монтаж: на DIN-рейку / на стену</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Условия эксплуатации</strong>
										<ul>
											<li>Температура окружающего воздуха: -10…+55 °С</li>
											<li>
												Относительная влажность воздуха (при +25 °С и ниже без
												конденсации влаги): не более 80 %
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Комплектность</strong>
										<ul>
											<li>Модуль: 1 шт.</li>
											<li>Паспорт / Гарантийный талон: 1 экз.</li>
											<li>Краткое руководство по эксплуатации: 1 экз.</li>
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

export default Mv110_224_8a
