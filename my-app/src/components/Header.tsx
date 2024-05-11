import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<div className='header'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div
						className='col-lg-2'
						data-aos='fade-right'
						data-aos-easing='linear'
						data-aos-duration='1500'
					>
						<div className='brand'>
							<Link to='/'>
								<img src='img/logo/astanacomlogo.png' alt='Logo' />
							</Link>
						</div>
					</div>
					<div className='col-lg-10'>
						<div
							className='topbar'
							data-aos='fade-left'
							data-aos-easing='linear'
							data-aos-duration='1500'
							data-aos-delay='500'
						>
							<div className='topbar-col'>
								<a href='tel:+7 7082758020'>
									<i className='fa fa-phone-alt'></i>+7 708 275 8020
								</a>
							</div>
							<div className='topbar-col'>
								<a href='tel:+7 7077790150'>
									<i className='fa fa-phone-alt'></i>+7 707 779 0150
								</a>
							</div>
							<div className='topbar-col'>
								<a
									href='mailto:inbox@a.com.kz?subject=Запрос%20на%20оборудование'
									target='_blank'
									rel='noreferrer'
								>
									<i className='fa fa-envelope'></i>inbox@a.com.kz
								</a>
							</div>
							<div className='topbar-col'>
								<div className='topbar-social'>
									<a
										href='https://api.whatsapp.com/send?phone=+77077790150&text=Добрый%20День!%20Запрос%20на%20оборудование%20для%20автоматизации.'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-whatsapp'></i>
									</a>
									<a
										href='https://www.instagram.com/astana_com_kz/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fab fa-instagram'></i>
									</a>
									<a
										href='https://astanacom.com/'
										target='_blank'
										rel='noreferrer'
									>
										<i className='fa fa-shopping-basket'></i>
									</a>
								</div>
							</div>
						</div>
						<div className='navbar navbar-expand-lg bg-light navbar-light'>
							<Link to='/' className='navbar-brand'>
								Меню
							</Link>
							<button
								type='button'
								className='navbar-toggler'
								data-toggle='collapse'
								data-target='#navbarCollapse'
							>
								<span className='navbar-toggler-icon'></span>
							</button>

							<div
								className='collapse navbar-collapse justify-content-between'
								id='navbarCollapse'
							>
								<div className='navbar-nav ml-auto'>
									<Link to='/' className='nav-item nav-link active'>
										Главная
									</Link>
									<div className='btn-group drop'>
										<a
											href='/'
											title=''
											className='dropdown-toggle nav-item nav-link'
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											О компании
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a className='nav-item nav-link' href='/about'>
													О нас
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a className='nav-item nav-link' href='/partners'>
													Партнеры
												</a>
											</li>
											<li>
												<a className='nav-item nav-link' href='/payment'>
													Оплата и доставка
												</a>
											</li>
										</ul>
									</div>
									<div className='btn-group drop'>
										<a
											href='/'
											title=''
											className='dropdown-toggle nav-item nav-link'
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											Каталог<span className='caret'></span>
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a className='nav-item nav-link' href='/owen'>
													ОВЕН
												</a>
											</li>
											<li>
												<a className='nav-item nav-link' href='/rosma'>
													РОСМА
												</a>
											</li>
											<li>
												<a
													className='nav-item nav-link'
													href='/schneider-electric'
												>
													Schneider Electric
												</a>
											</li>
											<li>
												<a className='nav-item nav-link' href='/dekraft'>
													DEKraft
												</a>
											</li>
										</ul>
									</div>
									<div className='btn-group drop'>
										<a
											href='/'
											title=''
											className='dropdown-toggle nav-item nav-link'
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											Помощь
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a className='nav-item nav-link' href='/faqs'>
													FAQs
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a
													className='nav-item nav-link'
													href='./page/bantuan/services.html'
												>
													Услуги
												</a>
											</li>
											<li>
												<a
													className='nav-item nav-link'
													href='./page/bantuan/syarat.html'
												>
													Условия и положения
												</a>
											</li>
										</ul>
									</div>
									<a href='./page/contact.html' className='nav-item nav-link'>
										Контакт
									</a>
									<a href='/' className='btn'>
										<i className='fa fa-download'></i>Download CV
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
