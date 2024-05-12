import React from 'react'
import { NavLink } from 'react-router-dom'

const getActiveClass = (isActive: boolean) => (isActive ? 'active' : '')

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
					<a href='/help/privacy-policy'>Политика конфиденциальности</a>
				</div>
			</div>
		</div>
	</div>
)

type SinglePageProps = {
	sectionTitle: string
	content: { id: number; text: string; subItems?: string[] }[]
	sideBarTitles: string[]
	sideBarLinks: { label: string; href: string }[]
}

const SinglePage: React.FC<SinglePageProps> = ({
	sectionTitle,
	content,
	sideBarTitles,
	sideBarLinks,
}) => (
	<div className='single'>
		<div className='container'>
			<div className='row'>
				<div
					className='agreements col-md-9'
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='1000'
					data-aos-delay='300'
				>
					<h2 className='section-title'>{sectionTitle}</h2>
					{content.map(item => (
						<div key={item.id}>
							<p>
								<span>
									{item.id}. {item.text}
								</span>
							</p>
							{item.subItems && (
								<ol type='a'>
									{item.subItems.map((sub, index) => (
										<li key={index}>{sub}</li>
									))}
								</ol>
							)}
						</div>
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

const PrivacyPolicy: React.FC = () => {
	const content = [
		{
			id: 1,
			text: 'Сбор информации',
			subItems: [
				'Компания собирает персональные данные, такие как имя, адрес электронной почты, контактный телефон и адрес доставки, которые необходимы для выполнения заказов и улучшения качества обслуживания клиентов.',
			],
		},
		{
			id: 2,
			text: 'Использование информации',
			subItems: [
				'Собранная информация используется исключительно для обработки заказов, оказания поддержки, уведомления о новых продуктах и услугах, а также для улучшения содержания и функциональности сайта.',
			],
		},
		{
			id: 3,
			text: 'Защита информации',
			subItems: [
				'Компания принимает все необходимые меры для защиты собранной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.',
			],
		},
		{
			id: 4,
			text: 'Раскрытие третьим лицам',
			subItems: [
				'Личная информация клиентов не передается третьим лицам без явного согласия клиента, за исключением случаев, требуемых законодательством.',
			],
		},
		{
			id: 5,
			text: 'Доступ и корректировка',
			subItems: [
				'Клиенты имеют право на доступ к своим личным данным, которые они могут обновить или исправить в любое время через свой профиль пользователя на сайте.',
			],
		},
		{
			id: 6,
			text: 'Безопасность транзакций',
			subItems: [
				'Все транзакции будут защищены, чтобы обеспечить безопасность данных клиентов и предотвратить их неправомерное использование.',
			],
		},
		{
			id: 7,
			text: 'Ссылки на другие сайты',
			subItems: [
				'Наш сайт может содержать ссылки на другие веб-сайты, которые не управляются нами.',
				'Мы не несем ответственности за содержание или политику конфиденциальности этих сайтов.',
				'Пользователям рекомендуется ознакомиться с политиками конфиденциальности этих внешних сайтов.',
			],
		},
		{
			id: 8,
			text: 'Юридическое согласие',
			subItems: [
				'Предоставляя нам свои личные данные, пользователи соглашаются с условиями данной политики конфиденциальности и дают согласие на обработку своих данных в соответствии с ними.',
			],
		},
		{
			id: 9,
			text: 'Изменения в политике конфиденциальности',
			subItems: [
				'Компания оставляет за собой право вносить изменения в политику конфиденциальности.',
				'Все изменения будут опубликованы на сайте, и клиенты будут уведомлены через электронную почту или при следующем входе на сайт.',
			],
		},
	]

	const sideBarTitles = ['Условия & Положения', 'Политика конфиденциальности']
	const sideBarLinks = [
		{ label: 'Условия и положения', href: '/help/terms' },
		{ label: 'Генеральные соглашения', href: '/help/general-agreements' },
		{ label: 'Политика конфиденциальности', href: '/help/privacy-policy' },
	]

	return (
		<>
			<PageHeader />
			<SinglePage
				sectionTitle='Политика конфиденциальности'
				content={content}
				sideBarTitles={sideBarTitles}
				sideBarLinks={sideBarLinks}
			/>
		</>
	)
}

export default PrivacyPolicy
