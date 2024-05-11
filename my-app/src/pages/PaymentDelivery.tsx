import React from 'react'

const PaymentDelivery: React.FC = () => {
	return (
		<>
			<div className='page-header'>
				<div
					className='container'
					data-aos='zoom-in'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1500'
				>
					<div className='row'>
						<div className='col-12'>
							<h2>О компании</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/company/payment'>Оплата и доставка</a>
						</div>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='container-fluid'>
					<div
						className='section-header'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='500'
						data-aos-delay='500'
					>
						<h2 className='section-title'>Способы оплаты</h2>
						<p>
							Нашим банком является АО "Банк Центр Кредит", Филиал в г. Астана.
							Для оформления заказа на оборудование, пожалуйста, запросите на
							наш WhatsApp или на нашу электронную почту коммерческое
							предложение. После того, как вы его утвердите, мы выставим вам
							счет. Вы сможете оплатить счет по нашим реквизитам, которые мы
							предоставим.
						</p>
					</div>
				</div>
			</div>

			<div className='service-row'>
				<div className='container'>
					<div className='row align-items-center'>
						<div
							className='card payment col-md-18'
							data-aos='fade-right'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='card-body'>
								<h3 className='card-title'>Доступные Способы Оплаты</h3>
							</div>
							<div className='card-header list-payment'>
								Способы оплаты, обеспечивающие удобство совершения операций в
								любом месте и в любое время. Если ваш способ оплаты не указан
								ниже, вам следует обратиться к нашим сотрудникам на почту, номер
								телефона или на WhatsApp.
								<p></p>
								<div
									className='row row-cols-1 row-cols-md-2 g-4 item-payment'
									style={{ textAlign: 'center' }}
								>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>Kaspi Bank</h5>
											<img
												src='../../img/payments/kaspi.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>
												First Heartland Jýsan Bank (Жусан Банк)
											</h5>
											<img
												src='../../img/payments/jusan.webp'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>АО "Bereke Bank"</h5>
											<img
												src='../../img/payments/bereke.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>
												Halyk bank (Народный банк Казахстана)
											</h5>
											<img
												src='../../img/payments/halyk.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>Банк ЦентрКредит</h5>
											<img
												src='../../img/payments/bck.jpg'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>Bank RBK</h5>
											<img
												src='../../img/payments/rbk.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>ForteBank</h5>
											<img
												src='../../img/payments/forte.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
									<div className='col page-payment'>
										<div className='card'>
											<h5 className='card-title'>Altyn Bank</h5>
											<img
												src='../../img/payments/altyn.png'
												className='card-img-top'
												alt='...'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='container-fluid'>
					<div
						className='section-header'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='500'
						data-aos-delay='500'
					>
						<h2 className='section-title'>Способы Доставки</h2>
						<p>
							В списке ниже представлены все курьерские службы, с которыми мы
							сотрудничаем. Бесплатная доставка от двери до двери на территории
							Казахстана с гарантированной скоростью доставки!
						</p>
					</div>
				</div>
			</div>

			<div className='service-row'>
				<div className='container'>
					<div className='row align-items-center'>
						<div
							className='card payment col-md-12'
							data-aos='fade-up'
							data-aos-easing='linear'
							data-aos-duration='1000'
						>
							<div className='card-body'>
								<h3 className='card-title'>Доступные Способы Доставки</h3>
							</div>
							<div className='card-header'>
								<p></p>
								<div
									className='row row-cols-2 row-cols-md-3 g-3 item-delivery'
									style={{ textAlign: 'center' }}
								>
									<div className='col page-delivery'>
										<div className='card'>
											<h5 className='card-title'>Avis Logistics</h5>
											<img
												src='../../img/delivery/avis.png'
												className='card-img-top'
												alt='avis'
											/>
										</div>
									</div>
									<div className='col page-delivery'>
										<div className='card'>
											<h5 className='card-title'>DPD</h5>
											<img
												src='../../img/delivery/dpd.png'
												className='card-img-top'
												alt='dpd'
											/>
										</div>
									</div>
									<div className='col page-delivery'>
										<div className='card'>
											<h5 className='card-title'>KCE</h5>
											<img
												src='../../img/delivery/kce.png'
												className='card-img-top'
												alt='kce'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PaymentDelivery
