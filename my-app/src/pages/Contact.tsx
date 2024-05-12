import React from 'react'

const Contact: React.FC = () => {
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
							<h2>Контакт</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/contact'>Контакт</a>
						</div>
					</div>
				</div>
			</div>

			<div className='contact'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<h2
								className='section-title'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-duration='1500'
								data-aos-delay='500'
							>
								Наш Адрес
							</h2>
							<div className='contact-info'>
								<iframe
									title='TOO Astana Kom Location'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-duration='2000'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.5278486004444!2d71.4053746!3d51.1666893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458125b4b6b203%3A0x73423c0611798579!2z0KLQtdC70Yw!5e0!3m2!1sen!2sus!4v1668352791964'
									frameBorder='0'
									style={{ width: '100%', height: '400px', border: '0' }}
									allowFullScreen
									aria-hidden='false'
									tabIndex={0}
								></iframe>
								<p
									style={{ textAlign: 'center', fontWeight: 'bold' }}
									data-aos='fade-left'
									data-aos-easing='linear'
									data-aos-duration='1000'
								>
									Пожалуйста, свяжитесь с нами или посетите наши платформы и
									социальные сети.
								</p>
								<h3
									data-aos='fade-right'
									data-aos-easing='linear'
									data-aos-duration='1000'
								>
									<i className='fa fa-phone-alt'></i>{' '}
									<span>+7 707 779 0150 | +7 708 275 8020 </span>
								</h3>
								<h3
									data-aos='fade-right'
									data-aos-easing='linear'
									data-aos-duration='1000'
									data-aos-delay='250'
								>
									<i className='fab fa-whatsapp'></i>{' '}
									<span>+7 707 779 0150 | +7 708 275 8020 </span>
								</h3>
								<h3
									data-aos='fade-right'
									data-aos-easing='linear'
									data-aos-duration='1000'
									data-aos-delay='500'
								>
									<i className='fa fa-envelope'></i> <span>inbox@a.com.kz</span>
								</h3>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='editor-info'>
								<h2
									className='section-title'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-duration='1500'
									data-aos-delay='500'
								>
									Связаться с нами
								</h2>
								<div
									className='editor-item'
									data-aos='fade-left'
									data-aos-easing='linear'
									data-aos-duration='1000'
								>
									<div className='editor-img'>
										<img
											src='../../img/logo/astanacom-1.png'
											alt='Editor Img'
										/>
									</div>
									<div className='editor-text'>
										<h3>ТОО "Астана Ком" (Данияр)</h3>
										<a
											href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!'
											target='_blank'
											rel='noreferrer'
										>
											+7 707 779 0150
										</a>
									</div>
								</div>
								<div
									className='editor-item'
									data-aos='fade-left'
									data-aos-easing='linear'
									data-aos-duration='1000'
								>
									<div className='editor-img'>
										<img
											src='../../img/logo/astanacom-1.png'
											alt='Editor Img'
										/>
									</div>
									<div className='editor-text'>
										<h3>ТОО "Астана Ком" (Алмаз)</h3>
										<a
											href='https://api.whatsapp.com/send?phone=+77082758020&text=Добрый%20День!'
											target='_blank'
											rel='noreferrer'
										>
											+7 708 275 8020
										</a>
									</div>
								</div>
								<div
									className='editor-item'
									data-aos='fade-left'
									data-aos-easing='linear'
									data-aos-duration='1000'
								>
									<div className='editor-img'>
										<img
											src='../../img/logo/astanacom-1.png'
											alt='Editor Img'
										/>
									</div>
									<div className='editor-text'>
										<h3>
											ТОО "Астана Ком" <br />
											(Электронная Почта)
										</h3>
										<a
											href='mailto:inbox@a.com.kz?subject=Добрый%20День!'
											target='_blank'
											rel='noreferrer'
										>
											inbox@a.com.kz
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<h2
								className='section-title'
								data-aos='zoom-in'
								data-aos-easing='ease-in-sine'
								data-aos-duration='1500'
								data-aos-delay='500'
							>
								Наши платформы и социальные сети
							</h2>
							<div
								className='editor-item'
								data-aos='fade-right'
								data-aos-easing='linear'
								data-aos-duration='1000'
								data-aos-delay='100'
							>
								<div className='editor-img'>
									<img
										src='../../img/socialNetworks/instagram.png'
										alt='Editor Img'
									/>
								</div>
								<div className='editor-text'>
									<h3>Instagram</h3>
									<a href='https://www.instagram.com/astana_com_kz/'>Перейти</a>
								</div>
							</div>
							<div
								className='editor-item'
								data-aos='fade-right'
								data-aos-easing='linear'
								data-aos-duration='1000'
								data-aos-delay='200'
							>
								<div className='editor-img'>
									<img
										src='../../img/socialNetworks/whatsapp.png'
										alt='Editor Img'
									/>
								</div>
								<div className='editor-text'>
									<h3>WhatsApp</h3>
									<a
										href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!'
										target='_blank'
										rel='noreferrer'
									>
										Написать
									</a>
								</div>
							</div>
							<div
								className='editor-item'
								data-aos='fade-right'
								data-aos-easing='linear'
								data-aos-duration='1000'
								data-aos-delay='200'
							>
								<div className='editor-img'>
									<img
										src='../../img/socialNetworks/satu.png'
										alt='Editor Img'
									/>
								</div>
								<div className='editor-text'>
									<h3>Satu</h3>
									<a href='https://astanacom.com/'>Перейти</a>
								</div>
							</div>
							<div
								className='editor-item'
								data-aos='fade-right'
								data-aos-easing='linear'
								data-aos-duration='1000'
								data-aos-delay='200'
							>
								<div className='editor-img'>
									<img
										src='../../img/socialNetworks/tomas.jpg'
										alt='Editor Img'
									/>
								</div>
								<div className='editor-text'>
									<h3>Tomas</h3>
									<a href='https://shop.astana-com.kz/'>Перейти</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
