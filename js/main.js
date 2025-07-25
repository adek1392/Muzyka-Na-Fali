const hamburger = document.querySelector('.hamburger'),
	nav = document.querySelector('.nav'),
	itemHome = document.querySelector('.homeItem'),
	itemAboutMe = document.querySelector('.aboutMeItem'),
	itemOfferts = document.querySelector('.offertsItem'),
	itemContact = document.querySelector('.contactItem'),
	itemFaq = document.querySelector('.faqItem'),
	accordionHeaders = document.querySelectorAll('.accordionHeader'),
	accordionContents = document.querySelectorAll('.accordionContent'),
	copyrightYear = (document.querySelector('.copyrightYear').innerText = new Date().getFullYear()),
	showMenu = () => {
		hamburger.classList.toggle('hamburgerActive'), nav.classList.toggle('navActive')
	}
accordionHeaders.forEach(e => {
	e.addEventListener('click', () => {
		let t = e.parentElement.querySelector('.accordionContent')
		accordionContents.forEach(e => {
			e !== t && e.classList.remove('active')
		}),
			t.classList.toggle('active')
	})
}),
	hamburger.addEventListener('click', showMenu),
	itemHome.addEventListener('click', showMenu),
	itemAboutMe.addEventListener('click', showMenu),
	itemOfferts.addEventListener('click', showMenu),
	itemContact.addEventListener('click', showMenu),
	itemFaq.addEventListener('click', showMenu)
