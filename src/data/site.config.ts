interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'FederHuaman', // Site author
	title: 'Feder Huaman', // Site title.
	description: 'Desarrollador con mas de 5 años de experiencia. Interesado en la innovación y preocupado por la calidad del servicio.', // Description to display in the meta tags
	lang: 'en-ES',
	ogLocale: 'en_ES',
	shareMessage: 'Comparte este artículo', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
