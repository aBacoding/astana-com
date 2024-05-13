import React, { useEffect } from 'react'

const Sp315_r: React.FC = () => {
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
							<a href='/catalog/owen/sp315-r'>СП315-Р</a>
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
												src='../../img/owen/sp315.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/sp315r-2.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/sp315r-3.jpg'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item' data-bs-interval='4000'>
											<img
												src='../../img/owen/sp315r-4.png'
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
										Панель оператора графическая СП315-Р
									</h5>
									<p className='card-text det'>
										<span className='text-muted'>737 280 ₸</span>
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
																	value='737 280 ₸'
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
												href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20счета%20на%20оплату:%20Панель%20оператора%20графическая%20СП315-Р.'
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
										<strong>ОВЕН СП3хх</strong> – линейка сенсорных панелей
										оператора. Предназначена для наглядного отображения значений
										параметров и оперативного управления, а также ведения архива
										событий или значений. Конфигурирование СП3хх осуществляется
										в среде «Конфигуратор СП300». Рекомендуется для совместного
										применения с ОВЕН{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/catalog/programmiruemie_logicheskie_kontrolleri'
										>
											ПЛК
										</a>
										,{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/catalog/programmiruemie_rele'
										>
											ПР
										</a>
										,{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/catalog/preobrazovateli_chastoti'
										>
											ПЧВ
										</a>
										,{' '}
										<a
											style={{
												fontWeight: 'normal',
												color: '#4F84C4',
												textDecoration: 'underline',
											}}
											href='https://owen.ru/catalog/izmeriteli_regulyatori'
										>
											ТРМ
										</a>
										. Линейка СП3хх заменяет панель оператора СП270 (полным
										аналогом СП270 с улучшенными характеристиками является
										панель СП307-Б). Проекты, разработанные для СП270, могут
										быть загружены в СП3хх после импорта в новое ПО.
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Отличия модификаций сенсорных панелей оператора ОВЕН
										</strong>
										<ul>
											<li>
												Каждая модель (кроме СП315) выпускается в двух
												модификациях – базовой (-Б) и расширенной (-Р).
												Модификации имеют разные наборы интерфейсов. В базовом
												варианте семи- и десятидюймовые модели СП307-Б и СП310-Б
												имеют два последовательных интерфейса RS-485/RS-232 для
												обмена с ПЛК и порт USB-B для подключения к компьютеру.
												Линейка сенсорных панелей СП3хх представлена тремя
												моделями, отличающимися между собой диагональю дисплея
												(7’’/10,1’’/15,6’’).
											</li>
											<li>
												В расширенных модификациях панелей оператора СП307-Р,
												СП310-Р и СП315-Р также присутствует Ethernet-порт для
												обмена данными с контроллером и порт USB-A для
												подключения USB-flash-накопителей.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Конструктивные исполнения</strong>
										<ul>
											<li>
												Корпус панелей оператора линейки СП3хх с лицевой стороны
												защищен от пыли и влаги, степень защиты – IP65.
												Глянцевая поверхность лицевой стороны легко очищается.
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Примеры использования HMI ОВЕН СП3хх</strong>
										<ul>
											<img
												src='../../img/owen/schema_sp.png'
												className='d-block w-100'
												alt='...'
											/>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>
											Функциональные особенности операторской панели
										</strong>
										<ul>
											<li>
												Загрузка программы через USB-кабель
												<ul>
													<li>
														Подключение панели к персональному компьютеру для
														загрузки программы осуществляется при помощи
														USB-кабеля. Для начала работы с панелью достаточно
														установить программу «Конфигуратор СП300» со
														встроенным драйвером и подключить панель к
														USB-кабелю.
													</li>
												</ul>
											</li>
											<li>
												Архивирование на USB-flash-накопитель
												<ul>
													<li>
														Архивирование на USB-flash-накопитель производится в
														формате CSV. В редакторе таблиц на ПК (MS Excel или
														Google-таблицы) данные могут быть представлены в
														удобном для вас виде, например, в виде графика
														значений температуры за год. Помимо записи архива,
														данные можно считать из USB-flash-накопителя в
														СП3хх. Считанные данные можно представить в виде
														графика, таблицы или переслать по сети в ПЛК.
													</li>
												</ul>
											</li>
											<li>
												Создание скриптов
												<ul>
													<li>
														Написание небольших программ (скриптов) на «СИ»
														подобном языке значительно расширяет возможности
														операторского интерфейса. Скрипты не подходят для
														написания программы управления технологическим
														процессом; для подобных задач в ассортименте ОВЕН
														есть класс таких устройств, как панельные
														контроллеры (СПК).
													</li>
												</ul>
											</li>
											<li>
												Построение графиков
												<ul>
													<li>
														Для предоставления информации на операторском
														интерфейсе в виде графиков доступны несколько видов
														элементов. XY-график позволяет построить кривую по
														XY-координатам. График с сохранением истории
														отображает кривую состояния одной или нескольких
														переменных с возможностью просмотра истории записей,
														например, графика температуры в прошлом месяце.
														График реального времени показывает текущее
														состояние переменной без возможности просмотра
														истории, что экономит память.
													</li>
												</ul>
											</li>
											<li>
												Таблицы
												<ul>
													<li>
														Таблицы подходят для ведения истории событий,
														имеется возможность пролистывать историю
														отображаемой информации, например, запись аварийных
														состояний. Также в таблицах можно производить
														подтверждение события нажатием на отображаемое
														сообщение.
													</li>
												</ul>
											</li>
											<li>
												Загрузка внешних изображений
												<ul>
													<li>
														Имеется возможность загрузить изображение в формате
														jpg и использовать его в программе как подложку или
														как активный элемент, например, как кнопку.
													</li>
												</ul>
											</li>
											<li>
												Создание анимации
												<ul>
													<li>
														Благодаря анимации интерфейс системы ЧМИ становится
														интуитивно понятным. Из загруженных изображений в
														формате jpg возможно создание анимированных
														изображений. Например, вращение вентилятора с
														заданной скоростью или перемещение какого-либо
														объекта по заданным координатам.
													</li>
												</ul>
											</li>
											<li>
												Настройка уровней доступа
												<ul>
													<li>
														Заложено многоуровневое ограничение прав доступа к
														операторскому интерфейсу панели. Можно настроить до
														9 уровней. Для каждого из уровней задается свой
														индивидуальный пароль.
													</li>
												</ul>
											</li>
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
										<strong>Аппаратные характеристики</strong>
										<ul>
											<li>Процессор: AT91SAM9G35-CU</li>
											<li>Частота, МГц: 400</li>
											<li>Оперативная память, Мб: 128</li>
											<li>Объем Flash-памяти, Мб: 128</li>
											<li>
												Допустимое число циклов перезаписи Flash-памяти на блок
												данных: 75 000
											</li>
											<li>
												Часы реального времени (RTC): есть, энергонезависимые
											</li>
											<li>
												Звук: пьезоизлучатель, с возможностью управления из
												программы
											</li>
											<li>
												DIP-переключатели: 4 шт. (два – свободно
												программируемые)
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Дисплей</strong>
										<ul>
											<li>Тип дисплея: TFT LCD</li>
											<li>Тип подсветки: LED (светодиодная подсветка)</li>
											<li>Кол-во цветов: 16,7 млн (TrueColor)</li>
											<li>Диагональ, дюймы: 15,6’’</li>
											<li>Разрешение, пиксель: 1366×768</li>
											<li>Рабочая зона, мм: 344,2×193,5</li>
											<li>Яркость, кд/м²: 250 </li>
											<li>Контрастность: 500:1</li>
											<li>
												Время наработки на отказ подсветки, часов: Не менее 50
												000 при температуре 25 °C
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Интерфейсы</strong>
										<ul>
											<li>
												COM-порты:
												<ul>
													<li>
														1 × RS-232/RS-485 (Download-порт/DB9M) – для
														подключения устройств и загрузки проектов
													</li>
													<li>
														1 × RS-232/RS-485 (PLC-порт/DB9M) – для подключения
														устройств
													</li>
													<li>Гальваническая изоляция отсутствует</li>
													<li>
														Сигналы RS-232 – RxD, TxD, GND; сигналы RS-485 – A,
														B
													</li>
													<li>
														Интерфейсы RS-232 и RS-485 являются
														аппаратно-независимыми
													</li>
													<li>
														Поддерживаемые протоколы: Modbus RTU (Master/Slave),
														Modbus ASCII (Master)
													</li>
												</ul>
											</li>
											<li>USB Device: 1 × USB 2.0 B - для загрузки проектов</li>
											<li>
												Ethernet: 1 × 10/100 Мбит/c (RJ45) – для подключения
												устройств. Поддерживаемые протоколы: Modbus TCP
												(Master/Slave)
											</li>
											<li>
												USB Host: 1 × USB 2.0 A - для архивов и импорта файлов.
												Поддерживаемые файловые системы: FAT16/FAT32.
												Поддерживаемый размер накопителей: до 32 Гб
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Питание</strong>
										<ul>
											<li>Тип питающего напряжения: Постоянное</li>
											<li>Диапазон питающего напряжения, В: 23…27</li>
											<li>Номинальное напряжение питания, В: 24</li>
											<li>Макс. потребляемый ток, А: 0,75</li>
											<li>Макс. потребляемая мощность, Вт: 20</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Корпус</strong>
										<ul>
											<li>Конструктивное исполнение: Для щитового крепления</li>
											<li>Тип вентиляции: Естественная вентиляция</li>
											<li>
												Виброустойчивость: В диапазоне 10…25 Гц в направлении X,
												Y, Z с ускорением до 2G в течение 30 минут
											</li>
											<li>
												Габаритные размеры (ширина × высота × глубина), мм:
												410,0×270,0×65,0
											</li>
											<li>
												Установочные размеры (ширина × высота), мм: 397,5×257,5
											</li>
											<li>
												Степень защиты корпуса по ГОСТ14254:
												<ul>
													<li>С лицевой стороны: IP65</li>
													<li>Со стороны разъемов: IP20</li>
												</ul>
											</li>
										</ul>
									</p>
									<p style={{ fontWeight: 'normal', color: '#000000' }}>
										<strong>Общие характеристики</strong>
										<ul>
											<li>Рабочая температура, °C: 0…50</li>
											<li>Рабочая влажность, %: 10…90 (без конденсации)</li>
											<li>Температура хранения, °C: -20…+60</li>
											<li>Масса брутто, кг: 4</li>
											<li>Средний срок службы, лет: 10</li>
											<li>Среднее время наработки на отказ, часов: 75 000</li>
											<li>Прикладное ПО: Конфигуратор СП300</li>
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

export default Sp315_r
