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
		id: 'plk110-220-30-tl',
		imageUrl: '../../img/owen/plk110-220-30-tl.webp',
		title: 'Контроллер для телеметрии и диспетчеризации ПЛК110-220.30-ТЛ [М02]',
		price: '287 000 ₸',
		description: 'kaligrafi/yasin.html',
	},
	{
		id: 'pr200-24-5-1-0',
		imageUrl: '../../img/owen/pr200-24-5-1-0.png',
		title: 'Программируемое реле ПР200-24.5.1.0 [М01]',
		price: '86 700 ₸',
		description: 'kaligrafi/ayat.html',
	},
	{
		id: 'dts125m-50m-0-5-60-i-15',
		imageUrl: '../../img/owen/dts125m-50m-0-5-60-i-15.png',
		title:
			'Термопреобразователь сопротивления (-40...+80 С) ДТС125М-50М.0,5.60.И [15]',
		price: '43 400 ₸',
		description: 'kaligrafi/kapal.html',
	},
	{
		id: 'sp315',
		imageUrl: '../../img/owen/sp315.jpg',
		title: 'Панель оператора графическая СП315-Р',
		price: '737 280 ₸',
		description: 'kaligrafi/quran.html',
	},
	{
		id: 'mv110-224-8a',
		imageUrl: '../../img/owen/mv110-224-8a.png',
		title: 'Модуль аналогового ввода МВ110-224.8А [М01]',
		price: '91 000 ₸',
		description: 'kaligrafi/asmaul-husna.html',
	},
	{
		id: 'gz-16-3-7-100',
		imageUrl: '../../img/owen/gz-16-3-7-100.png',
		title: 'Гильза защитная ГЗ. 16.3.7.100',
		price: '9 430 ₸',
		description: 'kaligrafi/kuda.html',
	},
]

const Owen: React.FC = () => {
	return (
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
							<a href='/catalog/owen'>ОВЕН</a>
						</div>
					</div>
				</div>
			</div>

			<div className='owen'>
				<div
					className='container'
					data-aos='fade-down'
					data-aos-easing='linear'
					data-aos-duration='500'
					data-aos-delay='500'
				>
					<div className='section-header'>
						<h2>ОВЕН</h2>
						<p>
							<a href='https://owen.ru/catalog'>
								<strong>Компания ОВЕН</strong>
							</a>{' '}
							– ведущий российский разработчик и производитель
							контрольно-измерительных приборов, датчиков и средств
							автоматизации для различных отраслей промышленности. Компания
							работает с 1991 года и занимает лидирующие позиции на
							отечественном рынке автоматики. С помощью оборудования ОВЕН можно
							создавать АСУ ТП любого уровня сложности с применением проводных и
							беспроводных технологий связи.
						</p>
						<br />
						<p>
							Ниже представлен список оборудования, которое в настоящее время
							доступны на складе в городе Астана (цена за 1шт с учетом 12% НДС).
							Для заказа оборудования ОВЕН, а также для того, чтобы уточнить
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
}

export default Owen
