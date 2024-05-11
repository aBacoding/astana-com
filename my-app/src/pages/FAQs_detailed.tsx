import React from 'react'

const FAQPage: React.FC = () => {
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
							<h2>Помощь</h2>
						</div>
						<div className='col-12'>
							<a href='/'>ТОО "Астана Ком"</a>
							<a href='/faqs'>FAQs</a>
						</div>
					</div>
				</div>
			</div>

			<div className='single'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2
								className='section-title'
								data-aos='fade-right'
								data-aos-offset='300'
								data-aos-easing='ease-in-sine'
								data-aos-duration='500'
							>
								Часто задаваемые вопросы
							</h2>
							<h3
								data-aos='fade-down'
								data-aos-easing='linear'
								data-aos-duration='500'
								data-aos-delay='300'
							>
								Часто задаваемые общие вопросы
							</h3>
							<div id='accordion'>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											1. Являетесь ли вы официальным дистрибьютором компаний
											ОВЕН, РОСМА, Schneider Electric, DEKraft?
										</a>
									</div>
									<div
										id='collapseOne'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы гордо можем заявить, что являемся официальным
											дистрибьютором компаний ОВЕН, РОСМА, Schneider Electric и
											DEKraft. Мы имеем все необходимые сертификаты,
											подтверждающие наш статус и партнерские отношения с этими
											лидерами рынка. С удовольствием предоставим вам полную
											информацию на вашу почту или WhatsApp!
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1000'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseTwo'
											style={{ fontWeight: 'bold' }}
										>
											2. Каков средний срок поставки товара по Казахстану, и
											осуществляете ли вы доставку в Россию?
										</a>
									</div>
									<div
										id='collapseTwo'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											В среднем срок поставки по Казахстану составляет от 2 до 4
											недель, в зависимости от сложности изготавливаемого
											прибора. Мы с удовольствием предлагаем бесплатную доставку
											по всей территории Казахстана, однако, к сожалению,
											доставка в Россию пока не осуществляется.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseThree'
											style={{ fontWeight: 'bold' }}
										>
											3. Если товар прибыл сломанным или неработающим,
											осуществляете ли вы его ремонт или возврат средств?
										</a>
									</div>
									<div
										id='collapseThree'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы с ответственностью подходим к каждому случаю.
											Сначала мы предоставляем ремонт по гарантии, а если ремонт
											невозможен, оформляем возврат средств в течение двух
											недель, гарантируя удовлетворение ваших потребностей.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1800'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseFour'
											style={{ fontWeight: 'bold' }}
										>
											4. Можно ли приехать на ваш склад, ознакомиться с
											оборудованием и приобрести его самовывозом?
										</a>
									</div>
									<div
										id='collapseFour'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Безусловно, мы будем рады видеть вас в нашем офисе, где вы
											сможете ознакомиться с оборудованием и приобрести его
											самовывозом. Наш склад расположен в самом сердце Астаны по
											адресу: Бизнес-центр Іскер, Проспект Абая, 13 проспект
											Сарыарка, 13/1 офис 901. Мы открыты для вас с понедельника
											по пятницу с 9:00 до 18:00. В субботу и воскресенье наши
											сотрудники отдыхают, но с понедельника по пятницу мы
											всегда готовы помочь вам!
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseFive'
											style={{ fontWeight: 'bold' }}
										>
											5. Можете ли вы предоставить индивидуальные решения для
											автоматизации процессов?
										</a>
									</div>
									<div
										id='collapseFive'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, наша компания специализируется на разработке
											индивидуальных решений для автоматизации процессов в
											различных отраслях. Мы работаем непосредственно с
											клиентами для понимания их уникальных потребностей и
											предоставляем настроенные системы управления и
											мониторинга, обеспечивая максимальную эффективность и
											удобство использования.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseSix'
											style={{ fontWeight: 'bold' }}
										>
											6. Какие гарантии вы предоставляете на свои товары?
										</a>
									</div>
									<div
										id='collapseSix'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Мы предоставляем гарантию на все наши продукты, которая
											включает бесплатный ремонт или замену в случае
											производственных дефектов. Срок гарантии может
											варьироваться в зависимости от типа продукции и
											производителя, обычно он составляет от 1 до 5 лет.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseSeven'
											style={{ fontWeight: 'bold' }}
										>
											7. Какие способы оплаты вы принимаете?
										</a>
									</div>
									<div
										id='collapseSeven'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Мы принимаем несколько форм оплаты, включая наличные и
											банковские переводы. Оплата производится по счетам,
											выставленным нашими сотрудниками клиентам. Доступные
											способы оплаты можете узнать <a href='/payment'>тут</a>.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseEight'
											style={{ fontWeight: 'bold' }}
										>
											8. Предоставляете ли вы консультационные услуги по выбору
											оборудования?
										</a>
									</div>
									<div
										id='collapseEight'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы предоставляем бесплатные консультационные услуги
											для помощи в выборе наиболее подходящего оборудования в
											соответствии с вашими техническими требованиями и
											бюджетом. Наши специалисты помогут вам определить
											оптимальные решения для вашего бизнеса.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseNine'
											style={{ fontWeight: 'bold' }}
										>
											9. Можно ли получить техническую поддержку после покупки
											оборудования?
										</a>
									</div>
									<div
										id='collapseNine'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы предлагаем всестороннюю техническую поддержку после
											покупки. Наша команда технических специалистов доступна
											для помощи по телефону, электронной почте или через
											WhatsApp, чтобы помочь вам с любыми вопросами или
											проблемами, которые могут возникнуть.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='1400'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link'
											data-toggle='collapse'
											href='#collapseTen'
											style={{ fontWeight: 'bold' }}
										>
											10. Есть ли у вас программа лояльности или скидки для
											постоянных клиентов?
										</a>
									</div>
									<div
										id='collapseTen'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, у нас есть программа лояльности для наших постоянных
											клиентов, которая включает специальные предложения, скидки
											и акции. Мы ценим наших клиентов и стремимся вознаграждать
											их за долгосрочное сотрудничество с нами.
										</div>
									</div>
								</div>
							</div>

							<h5
								data-aos='fade-down'
								data-aos-easing='linear'
								data-aos-duration='500'
								data-aos-delay='500'
								style={{ paddingTop: '20px', paddingBottom: '10px' }}
							>
								Вопросы по оборудованию ОВЕН
							</h5>
							<div id='accordion'>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne-1'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											1. Какие типы оборудования ОВЕН вы предлагаете?
										</a>
									</div>
									<div
										id='collapseOne-1'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Мы предлагаем широкий ассортимент продукции ОВЕН, включая
											контроллеры, сенсоры, измерительные устройства и панели
											оператора, а также специализированные решения для
											автоматизации производственных процессов. Все приборы,
											которые есть на официальном сайте{' '}
											<a href='https://owen.ru/catalog'>ОВЕН</a> мы поставляем.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne-2'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											2. Есть ли у оборудования ОВЕН сертификаты соответствия?
										</a>
									</div>
									<div
										id='collapseOne-2'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, все продукты ОВЕН сертифицированы в соответствии с
											международными и национальными стандартами, что
											подтверждает их высокое качество и надежность.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne-3'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											3. Каковы основные преимущества использования оборудования
											ОВЕН?
										</a>
									</div>
									<div
										id='collapseOne-3'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Основные преимущества включают высокую точность измерений,
											надежность в эксплуатации, универсальность в применении и
											простоту интеграции с другими системами автоматизации.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne-4'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											4. Могу ли я заказать обучение по эксплуатации
											оборудования ОВЕН?
										</a>
									</div>
									<div
										id='collapseOne-4'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы предлагаем программы обучения и тренинги, которые
											помогут вам максимально эффективно использовать
											приобретенное оборудование ОВЕН.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseOne-5'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											5. Как происходит техническая поддержка для оборудования
											ОВЕН?
										</a>
									</div>
									<div
										id='collapseOne-5'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Наша техническая поддержка доступна 24/7 по телефону,
											WhatsApp и электронной почте. Мы предоставляем быструю
											помощь в решении технических вопросов и неисправностей.
										</div>
									</div>
								</div>
							</div>

							<h5
								data-aos='fade-down'
								data-aos-easing='linear'
								data-aos-duration='500'
								data-aos-delay='500'
								style={{ paddingTop: '20px', paddingBottom: '10px' }}
							>
								Вопросы по оборудованию РОСМА
							</h5>
							<div id='accordion'>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseTwo-1'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											1. Какие особенности у оборудования РОСМА выделяют его на
											рынке?
										</a>
									</div>
									<div
										id='collapseTwo-1'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Оборудование РОСМА выделяется своей высокой точностью,
											надежностью и долговечностью, а также широким спектром
											моделей, которые подходят для различных промышленных
											приложений.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseTwo-2'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											2. Предоставляете ли вы гарантию на продукцию РОСМА?
										</a>
									</div>
									<div
										id='collapseTwo-2'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, на всю продукцию РОСМА предоставляется гарантия,
											которая покрывает возможные производственные дефекты и
											обеспечивает бесплатный ремонт или замену в течение
											гарантийного срока.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseTwo-3'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											3. Могу ли я возвратить оборудование РОСМА, если оно не
											подходит?
										</a>
									</div>
									<div
										id='collapseTwo-3'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, у вас есть возможность вернуть оборудование в течение
											первых 30 дней после покупки, если оно не соответствует
											вашим требованиям.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseTwo-4'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											4. Какие виды оборудования РОСМА наиболее востребованы?
										</a>
									</div>
									<div
										id='collapseTwo-4'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Наиболее востребованными являются манометры и термометры
											температуры, а также клапаны и бобышки для них.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseTwo-5'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											5. Как можно получить техническую документацию на
											оборудование РОСМА?
										</a>
									</div>
									<div
										id='collapseTwo-5'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Техническую документацию можно скачать на нашем сайте или
											запросить у наших менеджеров по продажам, которые
											предоставят вам все необходимые данные и инструкции.
										</div>
									</div>
								</div>
							</div>

							<h5
								data-aos='fade-down'
								data-aos-easing='linear'
								data-aos-duration='500'
								data-aos-delay='500'
								style={{ paddingTop: '20px', paddingBottom: '10px' }}
							>
								Вопросы по оборудованию Schneider Electric
							</h5>
							<div id='accordion'>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseThree-1'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											1. В чем преимущества продукции Schneider Electric?
										</a>
									</div>
									<div
										id='collapseThree-1'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Продукция Schneider Electric известна своей
											энергоэффективностью, надежностью и инновационными
											технологиями, которые помогают минимизировать операционные
											затраты и увеличить продуктивность.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseThree-2'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											2. Какие типы оборудования Schneider Electric вы
											предлагаете?
										</a>
									</div>
									<div
										id='collapseThree-2'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Мы предлагаем полный ассортимент продукции Schneider
											Electric, включая электрические компоненты, системы
											автоматизации, приводы, распределительное оборудование и
											программное обеспечение.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseThree-3'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											3. Есть ли у Schneider Electric решения для малого и
											среднего бизнеса?
										</a>
									</div>
									<div
										id='collapseThree-3'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, Schneider Electric предлагает множество решений,
											специально разработанных для потребностей малого и
											среднего бизнеса, включая компактные и экономичные системы
											управления и мониторинга.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseThree-4'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											4. Могу ли я получить демонстрацию продукции Schneider
											Electric перед покупкой?
										</a>
									</div>
									<div
										id='collapseThree-4'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, мы можем организовать демонстрацию продукции в нашем
											офисе или через виртуальные платформы, чтобы вы могли
											убедиться в ее качестве и функциональности.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseThree-5'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											5. Как обеспечивается поддержка продукции Schneider
											Electric после продажи?
										</a>
									</div>
									<div
										id='collapseThree-5'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Мы предоставляем комплексную поддержку после продажи,
											включая техническую поддержку, обслуживание и ремонт, а
											также доступ к обновлениям программного обеспечения и
											документации.
										</div>
									</div>
								</div>
							</div>
							<h5
								data-aos='fade-down'
								data-aos-easing='linear'
								data-aos-duration='500'
								data-aos-delay='500'
								style={{ paddingTop: '20px', paddingBottom: '10px' }}
							>
								Вопросы по оборудованию DEKraft
							</h5>
							<div id='accordion'>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseFour-1'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											1. Какие виды реле предлагает DEKraft и каковы их
											характеристики?
										</a>
									</div>
									<div
										id='collapseFour-1'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											DEKraft предлагает широкий ассортимент реле, включая реле
											контроля фаз РК-101, которые предназначены для
											сигнализации и управления коммутационными аппаратами. Эти
											реле помогают обеспечить защиту оборудования от
											неправильной фазы, потери фазы и асимметрии фаз, что
											критически важно для поддержания надежности систем.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseFour-2'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											2. Какие типы низковольтного оборудования предлагает
											DEKraft?
										</a>
									</div>
									<div
										id='collapseFour-2'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											DEKraft предлагает широкий ассортимент низковольтного
											оборудования, включая автоматические и дифференциальные
											автоматы, устройства защитного отключения, контакторы и
											реле. Эти продукты предназначены для эффективной и
											безопасной работы электрических систем.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseFour-3'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											3. Как DEKraft гарантирует качество своей продукции?
										</a>
									</div>
									<div
										id='collapseFour-3'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Продукция DEKraft проходит строгие независимые испытания в
											международных испытательных центрах, таких как KEMA, SEMKO
											и TUV, что гарантирует высокое качество и соответствие
											международным стандартам.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseFour-4'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											4. Могу ли я использовать оборудование DEKraft для
											модернизации существующей системы?
										</a>
									</div>
									<div
										id='collapseFour-4'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											Да, оборудование DEKraft идеально подходит для
											модернизации существующих систем благодаря его
											универсальности и совместимости с различными типами
											электрических установок.
										</div>
									</div>
								</div>
								<div
									className='card'
									data-aos='zoom-in'
									data-aos-easing='ease-in-sine'
									data-aos-delay='100'
									data-aos-duration='800'
								>
									<div className='card-header'>
										<a
											className='card-link collapsed'
											data-toggle='collapse'
											href='#collapseFour-5'
											aria-expanded='true'
											style={{ fontWeight: 'bold' }}
										>
											5. Какие серии автоматических выключателей предлагает
											DEKraft?
										</a>
									</div>
									<div
										id='collapseFour-5'
										className='collapse'
										data-parent='#accordion'
									>
										<div className='card-body'>
											DEKraft предлагает несколько серий автоматических
											выключателей, включая ВА-103 NEW 6кА, которые обеспечивают
											защиту электрических цепей от перегрузок и коротких
											замыканий.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FAQPage
