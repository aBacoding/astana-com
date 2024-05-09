import React from 'react'

const FAQs: React.FC = () => {
	return (
		<div className='faqs'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<h2
							className='section-title'
							data-aos='fade-right'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='700'
						>
							Часто задаваемые вопросы
						</h2>
						<div id='accordion'>
							<div
								className='card'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-delay='500'
								data-aos-duration='800'
							>
								<div className='card-header'>
									<a
										className='card-link collapsed'
										data-toggle='collapse'
										href='#collapseOne'
										aria-expanded='true'
										style={{ fontWeight: 'bold' }}
									>
										Являетесь ли вы официальным дистрибьютором компаний ОВЕН,
										РОСМА, Schneider Electric, DEKraft?
									</a>
								</div>
								<div
									id='collapseOne'
									className='collapse'
									data-parent='#accordion'
								>
									<div className='card-body'>
										Да, мы гордо можем заявить, что являемся официальным
										дистрибьютором компаний ОВЕН, РОСМА, Schneider Electric и
										DEKraft. Мы имеем все необходимые сертификаты,
										подтверждающие наш статус и партнерские отношения с этими
										лидерами рынка. С удовольствием предоставим вам полную
										информацию на вашу почту или WhatsApp!
									</div>
								</div>
							</div>
							<div
								className='card'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-delay='1000'
								data-aos-duration='800'
							>
								<div className='card-header'>
									<a
										className='card-link'
										data-toggle='collapse'
										href='#collapseTwo'
										style={{ fontWeight: 'bold' }}
									>
										Каков средний срок поставки товара по Казахстану, и
										осуществляете ли вы доставку в Россию?
									</a>
								</div>
								<div
									id='collapseTwo'
									className='collapse'
									data-parent='#accordion'
								>
									<div className='card-body'>
										В среднем срок поставки по Казахстану составляет от 2 до 4
										недель, в зависимости от сложности изготавливаемого прибора.
										Мы с удовольствием предлагаем бесплатную доставку по всей
										территории Казахстана, однако, к сожалению, доставка в
										Россию пока не осуществляется.
									</div>
								</div>
							</div>
							<div
								className='card'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-delay='1400'
								data-aos-duration='800'
							>
								<div className='card-header'>
									<a
										className='card-link'
										data-toggle='collapse'
										href='#collapseThree'
										style={{ fontWeight: 'bold' }}
									>
										Если товар прибыл сломанным или неработающим, осуществляете
										ли вы его ремонт или возврат средств?
									</a>
								</div>
								<div
									id='collapseThree'
									className='collapse'
									data-parent='#accordion'
								>
									<div className='card-body'>
										Да, мы с ответственностью подходим к каждому случаю. Сначала
										мы предоставляем ремонт по гарантии, а если ремонт
										невозможен, оформляем возврат средств в течение двух недель,
										гарантируя удовлетворение ваших потребностей.
									</div>
								</div>
							</div>
							<div
								className='card'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-delay='1800'
								data-aos-duration='800'
							>
								<div className='card-header'>
									<a
										className='card-link'
										data-toggle='collapse'
										href='#collapseFour'
										style={{ fontWeight: 'bold' }}
									>
										Можно ли приехать на ваш склад, ознакомиться с оборудованием
										и приобрести его самовывозом?
									</a>
								</div>
								<div
									id='collapseFour'
									className='collapse'
									data-parent='#accordion'
								>
									<div className='card-body'>
										Безусловно, мы будем рады видеть вас на нашем складе, где вы
										сможете ознакомиться с оборудованием и приобрести его
										самовывозом. Наш склад расположен в самом сердце Астаны по
										адресу: Бизнес-центр Іскер, Проспект Абая, 13 проспект
										Сарыарка, 13/1 офис 901. Мы открыты для вас с понедельника
										по пятницу с 9:00 до 18:00. В субботу и воскресенье наши
										сотрудники отдыхают, но с понедельника по пятницу мы всегда
										готовы помочь вам!
									</div>
								</div>
							</div>
						</div>
						<a
							className='btn'
							href='./page/bantuan/faq.html'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
							data-aos-delay='2000'
						>
							Более
						</a>
					</div>
					<div
						className='col-md-6'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='1500'
						data-aos-delay='1500'
					>
						<img src='img/logo/astanacom.png' alt='Img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FAQs
