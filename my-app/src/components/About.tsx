import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About: React.FC = () => {
	// Initialize AOS (Animate on Scroll) effects
	useEffect(() => {
		AOS.init({
			once: true,
		})
	}, [])

	// YouTube iframe logic
	useEffect(() => {
		/**
		 * Creates a thumbnail with a play button overlay
		 * @param id - YouTube video ID
		 * @returns HTML string for thumbnail with play button
		 */
		function labnolThumb(id: string) {
			const thumb = '<img src="img/logo/MAS.jpg" />'
			const play = '<div class="play"></div>'
			return `${thumb}${play}`
		}

		/**
		 * Replaces the clicked element with an iframe
		 * Uses an arrow function to ensure correct `this` context
		 */
		const labnolIframe = (event: MouseEvent) => {
			const element = event.currentTarget as HTMLDivElement
			const iframe = document.createElement('iframe')
			const embed = 'https://www.youtube.com/embed/ID?autoplay=1'
			iframe.setAttribute('src', embed.replace('ID', element.dataset.id || ''))
			iframe.setAttribute('frameborder', '0')
			iframe.setAttribute('allowfullscreen', '1')
			element.parentNode?.replaceChild(iframe, element)
		}

		const players = document.getElementsByClassName('youtube-player')

		for (let i = 0; i < players.length; i++) {
			const div = document.createElement('div')
			const player = players[i] as HTMLDivElement
			div.setAttribute('data-id', player.dataset.id || '')
			div.innerHTML = labnolThumb(player.dataset.id || '')
			div.onclick = labnolIframe
			player.appendChild(div)
		}
	}, [])

	return (
		<div className='about'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div
						className='col-md-6'
						data-aos='zoom-in'
						data-aos-easing='ease-in-sine'
						data-aos-duration='1000'
					>
						<div id='video-section'>
							<div className='youtube-player' data-id='YaOoupxns-o'></div>
						</div>
					</div>
					<div
						className='col-md-6'
						data-aos='fade-down'
						data-aos-easing='linear'
						data-aos-duration='500'
						data-aos-delay='500'
					>
						<h2 className='section-title'>О нас</h2>
						<p>
							Компания ТОО "Астана Ком" с 2015 года является официальным
							дистрибьютором ПО ОВЕН, РОСМА, Schneider Electric, DEKraft. Мы
							гордимся широким ассортиментом высококачественного измерительного
							и контрольного оборудования, программируемых устройств, силовых и
							коммутационных устройств, датчиков и программного обеспечения.{' '}
							{''}
							<strong>Наша цель</strong> — предоставлять инновационную и
							надежную продукцию, которая помогает клиентам оптимизировать
							процессы и повысить эффективность.
						</p>
						<p>
							Наши{' '}
							<strong>
								контрольно-измерительные приборы, программируемые устройства,
								силовые и коммутационные устройства, а также датчики
							</strong>{' '}
							обеспечивают точные и надежные показания, гибкость управления и
							эффективное электропитание. Дополняют это программное обеспечение
							и коммуникационные устройства, которые создают бесшовную связь
							между оборудованием и позволяют мониторить и собирать данные для
							улучшения бизнес-процессов.
						</p>
						<a
							className='btn'
							href='./page/blog/about.html'
							data-aos='zoom-in'
							data-aos-easing='ease-in-sine'
							data-aos-duration='1000'
						>
							Более
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
