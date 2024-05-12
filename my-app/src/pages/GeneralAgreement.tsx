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
					<a href='/help/general-agreements'>Генеральные соглашения</a>
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

const GeneralAgreements: React.FC = () => {
	const content = [
		{
			id: 1,
			text: 'Предмет соглашения',
			subItems: [
				'Это соглашение устанавливает общие условия поставки товаров и предоставления услуг между ТОО "Астана Ком" и клиентом.',
			],
		},
		{
			id: 2,
			text: 'Обязательства сторон',
			subItems: [
				'Продавец обязуется поставить товары и оказать услуги в соответствии с требованиями клиента, а клиент обязуется своевременно производить оплату за товары и услуги.',
			],
		},
		{
			id: 3,
			text: 'Сроки поставки',
			subItems: [
				'Стороны договариваются о сроках поставки товаров и выполнения услуг, которые должны быть зафиксированы в письменной форме в индивидуальных договорах или в коммерческих предложениях.',
			],
		},
		{
			id: 4,
			text: 'Ценообразование и платежи',
			subItems: [
				'Цены на товары и услуги определяются в соответствии с текущим прайс-листом Продавца.',
				'Оплата осуществляется по безналичному расчету в тенге на расчетный счет Продавца.',
				'Покупатель обязуется оплатить полную сумму в виде предоплаты.',
			],
		},
		{
			id: 5,
			text: 'Гарантии и ответственность',
			subItems: [
				'Продавец предоставляет гарантии на поставляемые товары в соответствии с гарантийными обязательствами производителей.',
				'Продавец несет ответственность за качество и комплектность товара на момент его передачи Покупателю.',
			],
		},
		{
			id: 6,
			text: 'Форс-мажор',
			subItems: [
				'Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по соглашению, если это неисполнение было вызвано обстоятельствами непреодолимой силы, такими как стихийные бедствия, войны, акты государственной власти.',
			],
		},
		{
			id: 7,
			text: 'Прочие условия',
			subItems: [
				'Все прочие условия, не оговоренные в данном соглашении, регулируются действующим законодательством Республики Казахстан.',
				'Любые споры по соглашению рассматриваются в судебном порядке по месту регистрации Продавца.',
			],
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
				sectionTitle='Генеральные соглашения'
				content={content}
				sideBarTitles={sideBarTitles}
				sideBarLinks={sideBarLinks}
			/>
		</>
	)
}

export default GeneralAgreements
