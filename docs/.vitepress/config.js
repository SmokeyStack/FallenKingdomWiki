const baseUrl = '/FallenKingdomWiki/'

module.exports = {
	lang: 'en-US',
	title: 'Fallen Kingdom Wiki',
	description: 'Wiki for Fallen Kingdom Add-on',
	base: baseUrl,
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		docsDir: 'docs',
		lastUpdated: 'Last Updated',
		sidebar: [
			{ text: 'Entities', link: '/Entities/index' }
		]
	}
}