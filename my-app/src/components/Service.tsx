import React from 'react'

const Service: React.FC = () => {
	return (
		<div className='service'>
			<div className='container-fluid'>
				<div
					className='section-header'
					data-aos='fade-up'
					data-aos-anchor-placement='center-bottom'
					data-aos-duration='500'
					data-aos-delay='1000'
				>
					<h2>Услуги</h2>
					<p>
						Пришло время оптимизировать свои процессы, и мы готовы помочь: от
						проектирования до обслуживания — наша команда обеспечит полный цикл
						автоматизации. {''}
						<strong>ТОО "Астана Ком"</strong> всегда готов к вашим услугам!
					</p>
				</div>

				<div className='row'>
					<div
						className='col-lg-3 col-md-6'
						data-aos='zoom-in-right'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<div className='service-item'>
							<h3 style={{ fontSize: '19px' }}>Автоматизация</h3>
							<p>
								Автоматизация — это выполнение процессов с помощью технологий
								без участия человека.
							</p>
						</div>
					</div>
					<div
						className='col-lg-3 col-md-6'
						data-aos='zoom-in-right'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<div className='service-item'>
							<h3 style={{ fontSize: '19px' }}>Телемеханика</h3>
							<p>
								Телемеханика — это дистанционное управление и контроль процессов
								с помощью телекоммуникационных средств.
							</p>
						</div>
					</div>
					<div
						className='col-lg-3 col-md-6'
						data-aos='zoom-in-left'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<div className='service-item'>
							<h3 style={{ fontSize: '19px' }}>Диспетчеризация</h3>
							<p>
								Диспетчеризация — это централизованное управление и контроль
								процессов с помощью диспетчерского центра.
							</p>
						</div>
					</div>
					<div
						className='col-lg-3 col-md-6'
						data-aos='zoom-in-left'
						data-aos-duration='1000'
						data-aos-delay='500'
					>
						<div className='service-item'>
							<h3 style={{ fontSize: '19px' }}>АСКУЭ</h3>
							<p>
								АСКУЭ (автоматизированная система коммерческого учета
								электроэнергии) — это система автоматизированного учета и
								контроля потребления электроэнергии.
							</p>
						</div>
					</div>
				</div>
				<div
					className='row justify-content-md-center'
					style={{ marginLeft: '7px' }}
				>
					<a
						data-aos='zoom-in'
						data-aos-easing='ease-in-sine'
						data-aos-duration='1500'
						className='btn btn-primary'
						href='./page/bantuan/services.html'
					>
						Узнать больше
					</a>
				</div>
			</div>
		</div>
	)
}

export default Service
