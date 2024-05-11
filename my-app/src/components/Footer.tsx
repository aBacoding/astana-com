import React from 'react'

const Footer: React.FC = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5'>
						<div className='footer-about'>
							<h2>Связаться с нами</h2>
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
							<br />
							<p>
								<a
									href='https://maps.app.goo.gl/M4gK7ZyWwqC8DJ6k7'
									target='_blank'
									rel='noopener noreferrer'
									className='map'
								>
									<i className='fa fa-map-marker-alt'></i>
								</a>
								Бизнес-центр Іскер, Проспект Абая, 13 проспект Сарыарка, 13/1
								офис 901
							</p>
							<p>
								<a href='tel:+7 7082758020'>
									<i className='fa fa-phone-alt'></i>
								</a>
								+7 708 275 8020
							</p>
							<p>
								<a href='tel:+7 7077790150'>
									<i className='fa fa-phone-alt'></i>
								</a>
								+7 707 779 0150
							</p>
							<p>
								<a
									href='mailto:inbox@a.com.kz?subject=Запрос%20на%20оборудование'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa fa-envelope'></i>
								</a>
								inbox@a.com.kz
							</p>
						</div>
					</div>
					<div className='col-md-7'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='footer-link'>
									<h2>Каталог</h2>
									<a href='/owen'>ОВЕН</a>
									<a href='/rosma'>РОСМА</a>
									<a href='/schneider-electric'>Schneider Electric</a>
									<a href='/dekraft'>DEKraft</a>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='footer-link'>
									<h2>Информация</h2>
									<a href='/partners'>Партнеры</a>
									<a href='/payment'>Оплата и доставка</a>
									<a href='/faqs'>Часто задаваемые вопросы</a>
									<a href='./page/bantuan/syarat.html'>Условия и положения</a>
									<a href='./page/bantuan/perjanjian.html'>
										Генеральные соглашения
									</a>
									<a href='./page/bantuan/privasi.html'>
										Политика конфиденциальности
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container copyright'>
				<div className='row'>
					<div className='col-md-6 hubungi'>
						<p>
							<a
								href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20на%20оборудование%20для%20автоматизации.'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-whatsapp'></i>
							</a>
							<a
								href='https://www.instagram.com/astana_com_kz/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='https://astanacom.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fa fa-shopping-basket'></i>
							</a>
						</p>
					</div>
					<div className='col-md-6'>
						<p>
							&copy;
							<a
								href='https://astana.company'
								target='_blank'
								rel='noopener noreferrer'
							>
								<strong>ТОО "Астана Ком".</strong>
							</a>{' '}
							Все права защищены.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
