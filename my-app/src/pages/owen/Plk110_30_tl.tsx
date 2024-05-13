import React, { useEffect } from 'react'

const Plk110_30_tl: React.FC = () => {
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
							<a href='/catalog/owen/plk110-220-30-tl'>
								ПЛК110-220.30-ТЛ [М02]
							</a>
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
												src='../../img/owen/plk110-220-30-tl.webp'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/plk110-220-30-tl-2.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/plk110-220-30-tl-3.jpg'
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
										Контроллер для телеметрии и диспетчеризации <br />{' '}
										ПЛК110-220.30-ТЛ [М02]
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>287 000 ₸</span>
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
																	value='287 000 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Контроллер%20для%20телеметрии%20и%20диспетчеризации%20ПЛК110-220.30-ТЛ%20[М02].'
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
										<strong>ОВЕН ПЛК110-30-ТЛ [М02]</strong> – программируемый
										моноблочный контроллер с дискретными входами/выходами на
										борту для автоматизации средних систем с возможностью
										программирования из SCADA-системы ОВЕН Телемеханика ЛАЙТ.
										Предназначен для построения систем автоматизации среднего
										уровня и распределенных систем управления.
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Рекомендации к применению</strong>
										<ul>
											<li>
												Построение систем телемеханики и АСУ ТП электрических
												подстанций (35/6(10)/0,4 кВ).
											</li>
											<li>
												Построение систем телемеханики и АСУ ТП железнодорожного
												транспорта.
											</li>
											<li>
												Создание распределенных систем противоаварийной
												автоматики и контроля электроснабжения.
											</li>
											<li>Построение систем электроснабжения предприятий.</li>
											<li>Системы мониторинга работы оборудования.</li>
											<li>Системы управления освещением. </li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Отличительные особенности</strong>
										<ul>
											<li>
												Программируется из SCADA-системы{' '}
												<a
													style={{
														fontWeight: 'normal',
														color: '#4F84C4',
														textDecoration: 'underline',
													}}
													href='https://owen.ru/product/scada_sistema_oven_telemehanika_lajt'
												>
													ОВЕН Телемеханика ЛАЙТ.{' '}
												</a>
											</li>
											<li>
												Объединение в один проект большого количества
												контроллеров.
											</li>
											<li>
												Готовая библиотека устройств ОВЕН, позволяющая быстро
												конфигурировать проекты.
											</li>
											<li>
												Встроенные поддерживаемые протоколы опроса
												специализированных устройств, используемых в системах
												телемеханики в энергетике.
											</li>
											<li>
												Алгоритмы циклической, спорадической передачи данных,
												настройка апертуры измерений.
											</li>
											<li>
												Может иметь любое число направлений отдачи (количество
												пунктов управления) и настраиваемые объемы данных
												телеметрии и прав доступа.
											</li>
											<li>
												Возможность реализации локальных алгоритмов в
												контроллере (FBD, ST (Pascal, C)).
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Преимущества контроллера ОВЕН ПЛК110-30-ТЛ [М02]{' '}
										</strong>
										<ul>
											<li>
												Представляет собой стандартный КП (контролируемый пункт)
												телемеханики. Набор и адреса передаваемых параметров
												можно настраивать произвольно.
											</li>
											<li>
												Сбор со счетчиков текущих (показания, измерения) и
												архивных (энергия, профили мощности) данных, журналов
												событий счетчиков для передачи на любой верхний уровень.
											</li>
											<li>
												Три уровня доступа: чтение данных, конфигурирование,
												администрирование.
											</li>
											<li>
												Возможность совместного использования с модемом ОВЕН
												ПМ01 по GPRS в статической и динамической сети («серый»
												IP-адрес, установка соединения снизу от контроллера на
												сервер).
											</li>
											<li>
												Прозрачный канал доступа по протоколу TCP/IP, в том
												числе в режиме GPRS.
											</li>
											<li>
												Расчет внутри контроллера параметров по алгоритмам
												пользователя и телесигнализация выхода за уставки по
												протоколу МЭК 60870-5-104.
											</li>
											<li>
												Обработка внутри контроллера мгновенных значений
												мощности по группам и выдача командного сигнала на
												отключение.
											</li>
											<li>Ведение архива на USB-носителе.</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Функциональная схема </strong>
										<ul>
											<img
												src='../../img/owen/schema_plk110.png'
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
										<strong>Питание</strong>
										<ul>
											<li>
												Напряжение питания: от 90 до 264 В переменного тока либо
												постоянного тока (номинальное 120/230 В)
											</li>
											<li>Потребляемая мощность, не более: 41 ВА</li>
											<li>
												Параметры встроенного источника питания: Выходное
												напряжение 24 В±4 %, ток не более 400 мА
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Цифровые (дискретные) входы</strong>
										<ul>
											<li>Количество входов: 18</li>
											<li>Тип входов по ГОСТ Р 51841–2001: 1</li>
											<li>Напряжение «логического нуля»: -3…5 В</li>
											<li>Максимальный ток «логического нуля»: 2 мА</li>
											<li>Напряжение «логической единицы»: 15…30 В</li>
											<li>
												Максимальный ток «логической единицы»: 9 мА (при 30 В)
											</li>
											<li>
												Минимальная длительность импульса, воспринимаемого
												дискретным входом: 1,6 мс (меандр)
											</li>
											<li>
												Подключаемые входные устройства: <br />– коммутационные
												устройства (контакты кнопок, выключателей, герконов,
												реле и т.п.) <br />– трехпроводные датчики, имеющие на
												выходе транзистор n-p-n- или pnp-типа с открытым
												коллектором <br />– дискретные сигналы с напряжением от
												минус 3 до 30 В
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Дискретные выходы (контакты электромагнитных реле)
										</strong>
										<ul>
											<li>Количество релейных выходных каналов: 12</li>
											<li>
												Максимальный ток, коммутируемый контактами реле, не
												более: 3 А
											</li>
											<li>
												Время переключения контактов реле из состояния «лог. 0»
												в «лог. 1» и обратно, не более: 10 мс (выходы DО1…DО12)
											</li>
											<li>
												Суммарный максимальный ток нагрузки группы реле: <br />–
												COM1-COM2: 3 А <br />– COM3: 3 А <br />– COM4: 3 А{' '}
												<br />– COM5: 12 А <br />– COM6: 12 А <br />–
												COM7-COM10: -
											</li>
											<li>
												Механический ресурс реле: <br /> – не менее 300 000
												циклов переключений при максимальной коммутируемой
												нагрузке <br />– не менее 500 000 циклов переключений
												при коммутации нагрузки менее половины от максимальной
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Интерфейсы связи, количество</strong>
										<ul>
											<li>RS-485: 2</li>
											<li>RS-232: 1</li>
											<li>RS-232-Debug: 1</li>
											<li>Ethernet 100 Base-T: 1</li>
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

export default Plk110_30_tl
