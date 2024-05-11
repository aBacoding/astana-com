import React from 'react'

type Product = {
	id: string
	imageUrl: string
	title: string
	price: string
	description: string
}

const products: Product[] = [
	{
		id: 'iem3255',
		imageUrl: '../../img/schneider/iem3255.png',
		title:
			'Schneider Electric Счетчик 3-ф актив.-реакт. iEM3255, 4 тарифа, RS-485, кл. точн. 0.5S, транс. вкл.',
		price: '169 200 ₸',
		description: 'kaligrafi/yasin.html',
	},
	{
		id: 'TM-520P.10',
		imageUrl: '../../img/schneider/iem3155.png',
		title:
			'Schneider Electric Счетчик 3-ф актив.-реакт. iEM3155, 4 тарифа, RS-485, кл. точн. 1, прям. вкл.',
		price: '143 000 ₸',
		description: 'kaligrafi/yasin.html',
	},
]

const Schneider: React.FC = () => (
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
						<h2>Каталог</h2>
					</div>
					<div className='col-12'>
						<a href='/'>ТОО "Астана Ком"</a>
						<a href='/schneider-electric'>Schneider Electric</a>
					</div>
				</div>
			</div>
		</div>

		<div className='schneider'>
			<div
				className='container'
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='500'
				data-aos-delay='500'
			>
				<div className='section-header'>
					<h2>Schneider Electric</h2>
					<p>
						<a href='https://www.se.com/kz/ru/'>
							<strong>Schneider Electric </strong>
						</a>{' '}
						— французская энергомашиностроительная корпорация, производитель
						оборудования для энергетических подкомплексов промышленных
						предприятий, объектов гражданского и жилищного строительства,
						центров обработки данных. Компания основана братьями Эженом и
						Адольфом Шнайдер в 1836 году путём покупки сталелитейной и кузнечной
						компании «Крезо». Компания стала называться «Братья Шнейдеры и Ко.»,
						братья провели модернизацию цехов, внедрив английские машины и
						механизировав производство.
					</p>
					<br />
					<p>
						Ниже представлен список оборудования, которое в настоящее время
						доступны на складе в городе Астана (цена за 1шт с учетом 12% НДС).
						Для заказа оборудования Schneider Electric, а также для того, чтобы
						уточнить наличие и сроки поставки других моделей, свяжитесь с нами
						по телефону, WhatsApp или по электронной почте.
					</p>
				</div>
				<div className='row row-cols-1 row-cols-md-2 g-4'>
					{products.map(product => (
						<div key={product.id} className='col detail-product'>
							<a href={product.description}>
								<div className='card h-100'>
									<img
										src={product.imageUrl}
										className='card-img-top'
										alt={product.title}
									/>
									<div className='card-body'>
										<h5 className='card-title'>{product.title}</h5>
									</div>
									<div
										className='card-footer'
										style={{
											textAlign: 'center',
											fontWeight: 'bold',
											fontFamily:
												"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
										}}
									>
										<span className='text-muted'>{product.price}</span>
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
		<br />
		<br />
	</>
)

export default Schneider
