import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🥁 ROR',
	shortName: '🥁 Rhythms of Resistance',
	banner: 'img/games/banners/ror_banner.png',
	logo: 'img/games/logos/ror.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#A6539B',
	id: 'ror',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#ror'
	},
	goal: ''
};

export default game;
