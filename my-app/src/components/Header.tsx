import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
	const location = useLocation()

	// This function checks if the current location matches any of the paths specified.
	const isActive = (path: string): boolean => {
		return (
			location.pathname === path || location.pathname.startsWith(path + '/')
		)
	}

	// Determine the class based on whether the link should be active
	const getActiveClass = (path: string): string => {
		return isActive(path) ? 'active' : ''
	}

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
								<img src='../../img/logo/astanacomlogo.png' alt='Logo' />
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
									<a
										href='/'
										className={`nav-item nav-link ${getActiveClass('/')}`}
									>
										Главная
									</a>
									<div className='btn-group drop'>
										<a
											href='/company'
											title=''
											className={`dropdown-toggle nav-item nav-link ${getActiveClass(
												'/company'
											)}`}
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											О компании
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/company/about'
													)}`}
													href='/company/about'
												>
													О нас
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/company/partners'
													)}`}
													href='/company/partners'
												>
													Партнеры
												</a>
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/company/payment'
													)}`}
													href='/company/payment'
												>
													Оплата и доставка
												</a>
											</li>
										</ul>
									</div>
									<div className='btn-group drop'>
										<a
											href='/catalog'
											title=''
											className={`dropdown-toggle nav-item nav-link ${getActiveClass(
												'/catalog'
											)}`}
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											Каталог<span className='caret'></span>
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/catalog/owen'
													)}`}
													href='/catalog/owen'
												>
													ОВЕН
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/catalog/rosma'
													)}`}
													href='/catalog/rosma'
												>
													РОСМА
												</a>
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/catalog/schneider-electric'
													)}`}
													href='/catalog/schneider-electric'
												>
													Schneider Electric
												</a>
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/catalog/dekraft'
													)}`}
													href='/catalog/dekraft'
												>
													DEKraft
												</a>
											</li>
										</ul>
									</div>
									<div className='btn-group drop'>
										<a
											href='/help'
											title=''
											className={`dropdown-toggle nav-item nav-link ${getActiveClass(
												'/help'
											)}`}
											data-toggle='dropdown'
											role='button'
											aria-haspopup='true'
											aria-expanded='false'
										>
											Помощь
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/help/faqs'
													)}`}
													href='/help/faqs'
												>
													FAQs
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/help/services'
													)}`}
													href='/help/services'
												>
													Услуги
												</a>
											</li>
											<li>
												<a
													className={`nav-item nav-link ${getActiveClass(
														'/help/terms'
													)}`}
													href='/help/terms'
												>
													Условия и положения
												</a>
											</li>
										</ul>
									</div>
									<a
										href='/contact'
										className={`nav-item nav-link ${getActiveClass(
											'/contact'
										)}`}
									>
										Контакт
									</a>
									<a
										href='https://github.com/aBacoding/aBaCoding/files/15300357/CV_Abdurakhim.pdf'
										className='btn'
									>
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
