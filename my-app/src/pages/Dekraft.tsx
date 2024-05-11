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
		id: 'ba-101',
		imageUrl: '../../img/dekraft/ВА-101.jpg',
		title: 'DEKraft Автоматический выключатель 3Р 40А х-ка C ВА-101 4,5кА',
		price: '2 500 ₸',
		description: 'kaligrafi/yasin.html',
	},
]

const Dekraft: React.FC = () => (
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
						<a href='/catalog/dekraft'>DEKraft</a>
					</div>
				</div>
			</div>
		</div>

		<div className='dekraft'>
			<div
				className='container'
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='500'
				data-aos-delay='500'
			>
				<div className='section-header'>
					<h2>DEKraft</h2>
					<p>
						<a href='https://www.dek.ru/'>
							<strong>DEKraft</strong>
						</a>{' '}
						– бренд низковольтного оборудования, ориентированный на Россию и
						страны СНГ c 2007 года. Продукция бренда применяется в системах
						электроснабжения объектов коммерческой и жилой недвижимости,
						инфраструктуры и промышленности, энергетической и нефтегазовой
						отраслей. Бренд входит в семейство брендов группы компаний Systeme
						Electric. Основные производственные мощности бренда расположены в
						Китае, часть ассортимента: корпуса, оболочки, розетки на DIN-рейку и
						щитовые аксессуары производятся на заводах в России.
					</p>
					<br />
					<p>
						Ниже представлен список оборудования, которое в настоящее время
						доступны на складе в городе Астана (цена за 1шт с учетом 12% НДС).
						Для заказа оборудования DEKraft, а также для того, чтобы уточнить
						наличие и сроки поставки других моделей, свяжитесь с нами по
						телефону, WhatsApp или по электронной почте.
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

export default Dekraft
