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
			text: 'Subyek Perjanjian / Subject of Agreement',
			subItems: [
				'Perjanjian ini berlaku antara SHOPHOUSE yang mana selanjutnya disebut sebagai Penyedia Layanan dan pengguna layanan SHOPHOUSE yakni badan hukum atau orang yang melakukan pemesanan layanan dan atau menggunakan layanan SHOPHOUSE yang mana selanjutnya disebut sebagai Pelanggan.',
				'Pelanggan dianggap telah memenuhi syarat untuk menyetujui perjanjian ini.',
				'Jika Pelanggan mewakili pihak lain, maka pihak lain tersebut juga dianggap menyetujui perjanjian ini.',
			],
		},
		// More items as needed...
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
