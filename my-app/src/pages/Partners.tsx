import React from 'react'

const Partners: React.FC = () => {
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
							<h2>О Компании</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/partners'>Партнеры</a>
						</div>
					</div>
				</div>
			</div>

			<div className='service'>
				<div className='container-fluid'>
					<div
						className='section-header'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='500'
						data-aos-delay='500'
					>
						<h2 className='section-title'>Наши партнеры</h2>
						<p>
							Партнерство играет ключевую роль в создании и развитии бизнеса.
							Оно не только способствует росту компании, но и помогает расширить
							деловую сеть. Представляем вашему вниманию список наших партнеров.
						</p>
					</div>
				</div>
			</div>

			<div className='service-row'>
				<div className='container'>
					<div className='row align-items-center'>
						<div
							className='col-md-6'
							data-aos='fade-right'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='service-row-img'>
								<h2 className='section-title'>ОВЕН</h2>
								<img src='img/partners/owen.png' alt='Partner' />
								<p></p>
								<p>
									<a href='https://owen.ru/'>
										<strong>Компания ОВЕН</strong>
									</a>{' '}
									– ведущий российский разработчик и производитель
									контрольно-измерительных приборов, датчиков и средств
									автоматизации для различных отраслей промышленности. Компания
									работает с 1991 года и занимает лидирующие позиции на
									отечественном рынке автоматики. С помощью оборудования ОВЕН
									можно создавать АСУ ТП любого уровня сложности с применением
									проводных и беспроводных технологий связи.
								</p>
							</div>
						</div>
						<div
							className='col-md-6'
							data-aos='fade-left'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='service-row-img'>
								<h2 className='section-title'>РОСМА</h2>
								<img src='img/partners/rosma.jpeg' alt='Partner' />
								<p></p>
								<p>
									<a href='https://rosma.spb.ru/'>
										<strong>ЗАО "РОСМА"</strong>
									</a>{' '}
									на сегодняшний день является одним из крупнейших отечественных
									производителей контрольно-измерительных приборов, прочно входя
									в число лидеров рынка в данной области. Компания была
									образована в 1998 году в Санкт-Петербурге, как торговое
									представительство «Куявской Фабрики Манометров» (KFM, Польша).
									Полученные за годы сотрудничества с KFM знания позволили нашей
									компании разработать и предложить клиентам собственную линейку
									приборов.
								</p>
							</div>
						</div>
						<div
							className='col-md-6'
							data-aos='fade-left'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='service-row-img'>
								<h2 className='section-title'>Schneider Electric</h2>
								<img src='img/partners/schneider.jpeg' alt='Partner' />
								<p></p>
								<p>
									<a href='https://www.se.com/kz/ru/'>
										<strong>Schneider Electric </strong>
									</a>{' '}
									— французская энергомашиностроительная корпорация,
									производитель оборудования для энергетических подкомплексов
									промышленных предприятий, объектов гражданского и жилищного
									строительства, центров обработки данных. Компания основана
									братьями Эженом и Адольфом Шнайдер в 1836 году путём покупки
									сталелитейной и кузнечной компании «Крезо». Компания стала
									называться «Братья Шнейдеры и Ко.», братья провели
									модернизацию цехов, внедрив английские машины и механизировав
									производство.
								</p>
							</div>
						</div>
						<div
							className='col-md-6'
							data-aos='fade-left'
							data-aos-offset='300'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							<div className='service-row-img'>
								<h2 className='section-title'>DEKraft</h2>
								<img src='img/partners/dekraft.jpeg' alt='Partner' />
								<p></p>
								<p>
									<a href='https://www.dek.ru/'>
										<strong>DEKraft</strong>
									</a>{' '}
									– бренд низковольтного оборудования, ориентированный на Россию
									и страны СНГ c 2007 года. Продукция бренда применяется в
									системах электроснабжения объектов коммерческой и жилой
									недвижимости, инфраструктуры и промышленности, энергетической
									и нефтегазовой отраслей. Бренд входит в семейство брендов
									группы компаний Systeme Electric. Основные производственные
									мощности бренда расположены в Китае, часть ассортимента:
									корпуса, оболочки, розетки на DIN-рейку и щитовые аксессуары
									производятся на заводах в России.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Partners
