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
		id: 'TM-510P.00',
		imageUrl: '../../img/rosma/tm510p(0-1.6).jpg',
		title:
			'МАНОМЕТР общетехнический 100мм, Тип - ТМ-510Р, радиальное присоединение. 0-1,6MPa. Резьба M20x1,5. Класс точности 1,5.',
		price: '4 110 ₸',
		description: '/catalog/rosma/tm-510p-00-0-1-6-mpa',
	},
	{
		id: 'TM-520P.10',
		imageUrl: '../../img/rosma/tm520.10(0-2.5).jpg',
		title:
			'МАНОМЕТР виброустойчивый (готовый к гидрозаполнению) 100мм, Тип - ТМ-520Р, радиальное присоединение. Гидрозаполнение - Глицерин. 0-2,5MPa. Резьба M20x1,5. Класс точности 1,0.',
		price: '12 500 ₸',
		description: '/catalog/rosma/tm-520p-10-0-2-5-mpa-glycerine',
	},
	{
		id: 'BT-51.211',
		imageUrl: '../../img/rosma/bt-51.211(0-160).jpg',
		title:
			'ТЕРМОМЕТР биметаллический 100мм, Тип - БТ-51.211, осевое присоединение. В комплекте с защитной гильзой (латунь). 0-160°С. Резьба G1/2. Длина штока 100мм. Класс точности 1,5.',
		price: '5 050 ₸',
		description: '/catalog/rosma/bt-51-211-0-160-c',
	},
]

const Rosma: React.FC = () => (
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
						<a href='/catalog/rosma'>РОСМА</a>
					</div>
				</div>
			</div>
		</div>

		<div className='rosma'>
			<div
				className='container'
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='500'
				data-aos-delay='500'
			>
				<div className='section-header'>
					<h2>РОСМА</h2>
					<p>
						<a href='https://rosma.spb.ru/'>
							<strong>ЗАО "РОСМА"</strong>
						</a>{' '}
						на сегодняшний день является одним из крупнейших отечественных
						производителей контрольно-измерительных приборов, прочно входя в
						число лидеров рынка в данной области. Компания была образована в
						1998 году в Санкт-Петербурге, как торговое представительство
						«Куявской Фабрики Манометров» (KFM, Польша). Полученные за годы
						сотрудничества с KFM знания позволили нашей компании разработать и
						предложить клиентам собственную линейку приборов.
					</p>
					<br />
					<p>
						Ниже представлен список оборудования, которое в настоящее время
						доступны на складе в городе Астана (цена за 1шт с учетом 12% НДС).
						Для заказа оборудования РОСМА, а также для того, чтобы уточнить
						наличие и сроки поставки других моделей, свяжитесь с нами по
						телефону, WhatsApp или по электронной почте.
					</p>
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
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

export default Rosma
