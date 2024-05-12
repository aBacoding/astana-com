import React from 'react'
import { NavLink } from 'react-router-dom'

const PageHeader: React.FC = () => {
	return (
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
						<a href='/help/terms'>Условия и положения</a>
					</div>
				</div>
			</div>
		</div>
	)
}

type SinglePageProps = {
	sectionTitle: string
	content: { id: number; text: string }[]
	sideBarTitles: string[]
	sideBarLinks: { label: string; href: string }[]
}

const SinglePage: React.FC<SinglePageProps> = ({
	sectionTitle,
	content,
	sideBarTitles,
	sideBarLinks,
}) => {
	// This function will determine the class based on whether the link is active
	const getActiveClass = (isActive: boolean) => (isActive ? 'active' : '')

	return (
		<div className='single'>
			<div className='container'>
				<div className='row'>
					<div
						className='terms col-md-9'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='1000'
						data-aos-delay='300'
					>
						<h2 className='section-title'>{sectionTitle}</h2>
						{content.map(item => (
							<p style={{ fontSize: '15px' }} key={item.id}>
								<span>{item.id}. </span>
								{item.text}
							</p>
						))}
					</div>
					<div className='conditions col-md-3'>
						{sideBarTitles.map((title, index) => (
							<React.Fragment key={index}>
								<h4
									data-aos='fade-left'
									data-aos-offset='300'
									data-aos-duration='1000'
									data-aos-easing='ease-in-sine'
								>
									{title}
								</h4>
								{sideBarLinks.slice(index * 2, (index + 1) * 2).map(link => (
									<li
										style={{ fontStyle: 'italic', fontSize: '13px' }}
										data-aos='fade-left'
										data-aos-offset='300'
										data-aos-duration='1000'
										key={link.label}
									>
										<NavLink
											to={link.href}
											className={({ isActive }) => getActiveClass(isActive)}
										>
											{link.label}
										</NavLink>
									</li>
								))}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const Terms: React.FC = () => {
	const content = [
		{
			id: 1,
			text: '"Покупатель" — любое лицо или организация, покупающая товары или услуги у ТОО "Астана Ком". "Продавец" — ТОО "Астана Ком".',
		},
		{
			id: 2,
			text: 'Все заказы подлежат подтверждению Продавцом в письменной форме.',
		},
		{
			id: 3,
			text: 'Цены на товары и услуги могут меняться по истечению срока коммерческого предложения без предварительного уведомления.',
		},
		{
			id: 4,
			text: 'Продавец обязуется поставить товары в согласованные сроки, однако не несет ответственности за задержки, вызванные форс-мажорными обстоятельствами.',
		},
		{
			id: 5,
			text: 'Оплата товаров и услуг должна быть произведена Покупателем в соответствии с условиями, указанными в счете.',
		},
		{
			id: 6,
			text: 'Продавец предоставляет гарантии на товары в соответствии с производственными стандартами.',
		},
		{
			id: 7,
			text: 'Товары могут быть возвращены или обменены в течение 14 дней, если они не использовались и находятся в оригинальной упаковке.',
		},
		{
			id: 8,
			text: 'Продавец не несет ответственности за непрямые убытки или последствия, связанные с использованием товаров.',
		},
		{
			id: 9,
			text: 'Весь контент на сайте, включая тексты, графику и логотипы, защищен авторским правом и является собственностью Продавца.',
		},
		{
			id: 10,
			text: 'Сайт предназначен только для законного использования, и любое незаконное использование подлежит преследованию.',
		},
		{
			id: 11,
			text: 'Продавец обязуется соблюдать конфиденциальность информации, предоставленной Покупателем в процессе покупки.',
		},
		{
			id: 12,
			text: 'Продавец оставляет за собой право вносить изменения в эти условия и положения в любое время без предварительного уведомления.',
		},
		{
			id: 13,
			text: 'Все споры и разногласия, возникающие в результате или в связи с этими условиями, будут разрешаться через переговоры. В случае неудачи — в соответствующих судебных инстанциях.',
		},
		{
			id: 14,
			text: 'Все сделки регулируются законодательством Республики Казахстан.',
		},
		{
			id: 15,
			text: 'Эти условия применимы ко всем сделкам между Продавцом и Покупателем, если не указано иное в письменном соглашении.',
		},
	]
	const sideBarTitles = ['Условия & Положения', 'Политика конфиденциальности']
	const sideBarLinks = [
		{ label: 'Условия и положения', href: '/help/terms' },
		{ label: 'Генеральные соглашения', href: '/help/general-agreements' },
		{
			label: 'Политика конфиденциальности',
			href: '/help/privacy-policy',
		},
	]

	return (
		<>
			<PageHeader />
			<SinglePage
				sectionTitle='Условия и положения'
				content={content}
				sideBarTitles={sideBarTitles}
				sideBarLinks={sideBarLinks}
			/>
		</>
	)
}

export default Terms
