import React from 'react'

const NotFoundPage: React.FC = () => {
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
							<h2>Страница не существует</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/'>Главная</a>
						</div>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='container'>
					<div
						className='section-header'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='500'
						data-aos-delay='500'
					>
						<h2 className='section-title'>Ошибка 404</h2>
						<p>
							К сожалению, страница, которую вы ищете, не существует или была
							перемещена. Пожалуйста, проверьте URL-адрес и повторите попытку.
						</p>
					</div>
				</div>
			</div>

			<div className='service-row'>
				<div className='container'>
					<div className='row align-items-center'>
						<div
							className='col-md-6'
							data-aos='fade-right'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='service-row-img'>
								<img src='../../img/404/404.png' alt='404 Error' />
							</div>
						</div>
						<div
							className='col-md-6'
							data-aos='fade-left'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<h2 className='section-title'>Полезные ссылки</h2>
							<p>Возможно, вам пригодятся следующие ссылки:</p>
							<ul>
								<li>
									<a href='/'>Главная</a>
								</li>
								<li>
									<a href='/contact'>Контакт</a>
								</li>
								<li>
									<a href='/company/about'>О нас</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFoundPage
