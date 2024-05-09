export interface TypedTextData {
	target: string
	text: string[]
	delay?: number
}

class TextType {
	text: string[]
	el: HTMLElement
	loopNum: number
	period: number
	txt: string
	isDeleting: boolean

	constructor(el: HTMLElement, text: string[], delay: number) {
		this.text = text
		this.el = el
		this.loopNum = 0
		this.period = delay || 2000
		this.txt = ''
		this.tick()
		this.isDeleting = false
	}

	tick() {
		const i = this.loopNum % this.text.length
		const fullTxt = this.text[i]

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}

		this.el.innerText = this.txt

		let timing = Math.floor(200 - Math.random() * 100)

		if (this.isDeleting) {
			timing /= 2
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			timing = this.period
			this.isDeleting = true
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false
			this.loopNum++
			timing = 500
		}

		setTimeout(() => this.tick(), timing)
	}
}

export function initializeTypedText(data: TypedTextData): void {
	const elements = document.getElementsByClassName(data.target)
	for (let i = 0; i < elements.length; i++) {
		new TextType(elements[i] as HTMLElement, data.text, data.delay || 2000)
	}
}
