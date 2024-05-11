import React from 'react'

const PageHeader: React.FC = () => (
	<div className='page-header'>
		<div
			className='container'
			data-aos='zoom-in'
			data-aos-easing='ease-in-sine'
			data-aos-duration='1500'
		>
			<div className='row'>
				<div className='col-12'>
					<h2>Помощь</h2>
				</div>
				<div className='col-12'>
					<a href='/'>ТОО "Астана Ком"</a>
					<a href='/help/services'>Услуги</a>
				</div>
			</div>
		</div>
	</div>
)

const ServiceSection: React.FC = () => (
	<div className='service'>
		<div className='container-fluid'>
			<div
				className='section-header'
				data-aos='fade-up'
				data-aos-anchor-placement='center-bottom'
				data-aos-duration='500'
				data-aos-delay='500'
			>
				<h2>Услуги</h2>
				<p>
					Пора открывать новые горизонты в бизнесе с{' '}
					<strong>ТОО "Астана Ком"</strong>. <br /> Не упустите возможность
					войти в мир современных технологий вместе с нами. Мы готовы предложить
					вам нашу помощь, независимо от вашего уровня знаний и опыта в этой
					области.
				</p>
			</div>
			{/* Services List */}
			<div className='row'>
				{services.map((service, index) => (
					<div
						className={`col-lg-3 col-md-6`}
						data-aos={service.aos}
						data-aos-duration='1000'
						data-aos-delay='500'
						key={index}
					>
						<div className='service-item'>
							<h3 style={{ fontSize: '15px' }}>{service.title}</h3>
							<p>{service.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)

const ServiceRow: React.FC<{
	image: string
	title: string
	description: string
	reverse?: boolean
}> = ({ image, title, description, reverse = false }) => (
	<div className='service-row'>
		<div className='container'>
			<div
				className={`row align-items-center ${
					reverse ? 'flex-row-reverse' : ''
				}`}
			>
				<div
					className='col-md-6'
					data-aos={reverse ? 'fade-left' : 'fade-right'}
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'
				>
					<div className='service-row-img'>
						<img src={image} alt='Service' />
					</div>
				</div>
				<div
					className='col-md-6'
					data-aos={reverse ? 'fade-right' : 'fade-left'}
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1000'
				>
					<div className='service-row-text'>
						<h2 className='section-title'>{title}</h2>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

const services = [
	{
		title: 'АСКУЭ',
		description:
			'АСКУЭ (автоматизированная система коммерческого учета электроэнергии) — это система автоматизированного учета и контроля потребления электроэнергии.',
		aos: 'zoom-in-right',
	},
	{
		title: 'Телемеханика',
		description:
			'Телемеханика — это дистанционное управление и контроль процессов с помощью телекоммуникационных средств.',
		aos: 'zoom-in-right',
	},
	{
		title: 'Диспетчеризация',
		description:
			'Диспетчеризация — это централизованное управление и контроль процессов с помощью диспетчерского центра.',
		aos: 'zoom-in-right',
	},
	{
		title: 'Автоматизация',
		description:
			'Автоматизация — это выполнение процессов с помощью технологий без участия человека.',
		aos: 'zoom-in-right',
	},
]

const Services: React.FC = () => (
	<>
		<PageHeader />
		<ServiceSection />
		<ServiceRow
			image='../../img/services/service-1.jpg'
			title='АСКУЭ'
			description='АСКУЭ (Автоматизированные системы коммерческого учета электроэнергии). Это комплекс технических средств и программных решений, предназначенных для автоматизации учета потребления и распределения электроэнергии в промышленных и коммерческих объектах.'
			reverse={false}
		/>
		<ServiceRow
			image='../../img/services/service-2.jpeg'
			title='Телемеханика'
			description='Разработка решений, позволяющих дистанционно управлять и контролировать различными техническими устройствами и процессами. Эти решения используют передачу данных через сети связи для мониторинга, управления и анализа объектов в реальном времени.'
			reverse={true}
		/>
		<ServiceRow
			image='../../img/services/service-3.jpg'
			title='Диспетчеризация'
			description='Диспетчеризация — это система организации и управления различными процессами или объектами с помощью центрального пункта контроля, называемого диспетчерским центром. Основная цель диспетчеризации — обеспечить эффективное и безопасное функционирование системы или объектов.'
			reverse={false}
		/>
		<ServiceRow
			image='../../img/services/service-4.jpg'
			title='Автоматизация'
			description='Разработанные решения для автоматизации технологического процесса позволяют повысить производительность, сократить затраты на рабочую силу и сырье, а также улучшить качество продукции. Они являются важной частью современной промышленности и способствуют улучшению конкурентоспособности предприятий.'
			reverse={true}
		/>
	</>
)

export default Services
