import Isotope from 'isotope-layout'

export function initializePortfolioFilter(): void {
	const portfolioIsotope = new Isotope('.portfolio-container', {
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows',
	})

	const portfolioFilters = document.querySelectorAll<HTMLElement>(
		'#portfolio-flters li'
	)

	portfolioFilters.forEach(filter => {
		filter.addEventListener('click', () => {
			portfolioFilters.forEach(el => el.classList.remove('filter-active'))
			filter.classList.add('filter-active')
			const filterValue = filter.getAttribute('data-filter')
			if (filterValue !== null) {
				portfolioIsotope.arrange({ filter: filterValue })
			}
		})
	})
}
