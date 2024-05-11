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
			text: 'Spesifikasi dan kapasitas hosting website/apk sesuai dengan paket yang tersedia.',
		},
		{
			id: 2,
			text: 'Masa Revisi adalah setelah pengerjaan website/apk selesai. Masa revisi adalah 3 hari kerja dan maksimal 2 kali revisi untuk paket Custom, selain itu hanya 1 kali.',
		},
		// Add more items as needed
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
