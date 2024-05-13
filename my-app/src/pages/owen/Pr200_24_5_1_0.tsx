import React, { useEffect } from 'react'

const Pr200_24_5_1_0: React.FC = () => {
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
							<a href='/catalog/owen/pr200-24-5-1-0'>ПР200-24.5.1.0 [М01]</a>
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
												src='../../img/owen/pr200-24-5-1-0.png'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/pr200-2.jpg'
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
										Программируемое реле ПР200-24.5.1.0 [М01]
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>86 700 ₸</span>
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
																	value='86 700 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Программируемое%20реле%20ПР200-24.5.1.0%20[М01].'
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
										<strong>ОВЕН ПР200</strong> – программируемое реле с
										дисплеем. Применяется для решения локальных задач
										автоматизации: водоподготовка, водоочистка, вентиляция,
										отопление и др. <br />
										Прибор выпускается в корпусе 7 DIN и имеет на борту до 24
										каналов ввода/вывода. Для расширения собственных
										входов/выходов предусмотрено подключение по внутренней шине{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/product/prm'
										>
											модулей расширения ПРМ
										</a>
										. Для интеграции в SCADA-системы и управления внешними
										устройствами в прибор может быть установлено до двух
										интерфейсов RS-485 с поддержкой протоколов Modbus RTU/ASCII.
										Написание алгоритма осуществляется пользователем на языке
										FBD с помощью бесплатной{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/product/sreda_programmirovaniya_owen_logic'
										>
											среды программирования Owen Logic
										</a>
										. Загрузка алгоритма производится с помощью кабеля miniUSB
										(входит в комплект поставки).
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Области применения</strong>
										<ul>
											<li>Водоподготовка</li>
											<li>Водоочистка</li>
											<li>Вентиляция</li>
											<li>Отопление</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Подключаемое оборудование</strong>
										<ul>
											<li>
												4 аналоговых входа: РТ100, РТ1000, 4…20 мА, 0…10 В, 0…4
												кОм, режим дискретного входа.
											</li>
											<li>2 аналоговых выхода: 4…20 мА или 0…10 В.</li>
											<li>Дискретные входы: 24 В или 230 В.</li>
											<li>
												Дискретные выходы: э/м реле или транзисторные ключи.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Коммуникационные возможности</strong> <br />
										Два интерфейса RS-485, режим Master/Slave:
										<ul>
											<li>
												Интеграция в облачный сервис OwenCloud и SCADA-системы.
											</li>
											<li>
												Визуализация процессов с помощью панелей оператора.
											</li>
											<li>Управление внешними устройствами по RS-485.</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Конструктивные особенности</strong>
										<ul>
											<li>Модульный корпус.</li>
											<li>Ширина корпуса 7 модулей</li>
											<li>Съемные клеммники – для удобства монтажа.</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Возможности символьного индикатора ПР200</strong>
										<ul>
											<li>
												Видимая область символьного индикатора: 2 строки по 16
												символов.
											</li>
											<li>Поддержка кириллицы и латиницы.</li>
											<li>
												Возможность корректировки параметров программы
												пользователя и параметров прибора.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Эксплуатация</strong>
										<ul>
											<li>2 модификации по питанию: =24 В и ~230 В.</li>
											<li>Подключение модулей расширения ПРМ (до 2 штук).</li>
											<li>
												Встроенный источник питания =24 В для питания датчиков с
												аналоговым выходом (в модификациях на 230 В с
												аналоговыми входами).
											</li>
											<li>
												USB-порт – для программирования (miniUSB-входит в
												комплект).
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Отличительные характеристики</strong>
										<ul>
											<img
												src='../../img/owen/pr200_otlichitelnye_harakteristiki.png'
												className='d-block w-100'
												alt='...'
											/>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Функциональная схема </strong>
										<ul>
											<img
												src='../../img/owen/schema_pr200.png'
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
										<strong>Программирование</strong>
										<ul>
											<li>Среда программирования: Owen Logic</li>
											<li>Объем Retain-памяти: 1016 байт</li>
											<li>Стек: динамический</li>
											<li>
												Объем памяти сетевых переменных (режим slave): 128 байт
											</li>
											<li>
												Объем памяти сетевых переменных (режим master): 128 байт
											</li>
											<li>Память ПЗУ: 128 кбайт</li>
											<li>Память ОЗУ: 32 кбайт</li>
											<li>Интерфейс программирования: miniUSB</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Общие сведения</strong>
										<ul>
											<li>Диапазон переменного напряжения питания: -</li>
											<li>
												Диапазон постоянного напряжения питания: 19...30 В
												(номинальное 24 В)
											</li>
											<li>
												Минимальное время цикла: 1 мс (зависит от сложности
												программы)
											</li>
											<li>Часы реального времени: есть</li>
											<li>Модули расширения ПРМ: до 2 шт.</li>
											<li>Встроенный источник питания: нет</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Дискретные входы</strong>
										<ul>
											<li>Количество: 8</li>
											<li>Тип: Дискретный (Д)</li>
											<li>
												Подключаемые датчики: коммутационные устройства
												(контакты кнопок, выключателей, герконов, реле и т.п.),
												датчики, имеющие на выходе транзистор p-n-p-типа с
												открытым коллектором
											</li>
											<li>Номинальное напряжение питания: =24 В</li>
											<li>
												Гальваническая развязка: групповая по 4 входа (1-4, 5-8)
											</li>
											<li>
												Электрическая прочности изоляции: 2830 В, групповая –
												1780 В
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Аналоговые входы</strong>
										<ul>
											<li>Количество: до 4</li>
											<li>Тип измеряемых сигналов: 0…10 В, 4…20 мА, 0…4 кОм</li>
											<li>Разрешающая способность АЦП: 12 бит</li>
											<li>
												Период обновления значений всех каналов, не более: 10 мс
											</li>
											<li>Работа в дискретном режиме: да</li>
											<li>Гальваническая развязка: отсутствует</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Дискретные выходы</strong>
										<ul>
											<li>Количество: до 12</li>
											<li>
												Тип: релейные (нормально-разомкнутые) и транзисторные
												ключи (n-p-n-типа)
											</li>
											<li>
												Допустимый ток нагрузки, не более{' '}
												<ul>
													<li>
														Релейные (Р): 5А при напряжении не более 250 В
														перем. тока, cos(ф) {'>'} 0,95 <br />3 А при
														напряжении не более 30В пост. тока <br />{' '}
													</li>
													<li>
														Транзиторные (К): 0,2 А при напряжении не более 60 В
														постоянного тока
													</li>
												</ul>
											</li>
											<li>Гальваническая развязка: групповая по 4 выхода</li>
											<li>Электрическая прочности изоляции : 2830 В</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Аналоговые выходы</strong>
										<ul>
											<li>Количество: до 2</li>
											<li>
												Тип аналогового выхода: 4...20 мА (И) или 0...10 В (У) –
												выбирается при заказе
											</li>
											<li>Разрядность ЦАП : 10 бит</li>
											<li>
												Гальваническая развязка: выход 4…20 мА (И):
												индивидуальная 2830 В <br />
												выход 0…10 В (У): групповая 2830 В
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Коммуникационные возможности</strong>
										<ul>
											<li>
												Интерфейс RS-485 (до 2 шт. – выбирается при заказе)
											</li>
											<li>Протокол связи: Modbus RTU/ASCII</li>
											<li>Режим работы: Master/Slave</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Индикация и управление</strong>
										<ul>
											<li>
												Тип дисплея: текстовый монохромный ЖКИ с подсветкой,
												2×16 символов
											</li>
											<li>Поддерживаемые языки: русский, английский</li>
											<li>Количество механических кнопок: 6</li>
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

export default Pr200_24_5_1_0
