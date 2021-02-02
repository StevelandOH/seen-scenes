'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Films',
			[
				{
					title: 'Iron Man',
					director: 'Jon Favreau',
					description:
						'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
					releaseDate: '2008-05-02',
					genreId: 1,
					posterPath: 'https://theposterdb.com/api/assets/18649',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'True Lies',
					director: 'James Cameron',
					description:
						'A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used car salesman while terrorists smuggle nuclear war heads into the United States.',
					releaseDate: '1994-07-15',
					genreId: 1,
					posterPath: 'https://theposterdb.com/api/assets/65311',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Tropic Thunder',
					director: 'Ben Stiller',
					description:
						"Vietnam veteran 'Four Leaf' Tayback's memoir, Tropic Thunder, is being made into a film, but Director Damien Cockburn can't control the cast of prima donnas. ",
					releaseDate: '2008-08-13',
					genreId: 2,
					posterPath: 'https://theposterdb.com/poster/43969',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Zombieland',
					director: 'Ruben Fleischer',
					description:
						"Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
					releaseDate: '2009-10-08',
					genreId: 2,
					posterPath: 'https://theposterdb.com/poster/36533',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'It',
					director: 'Andy Muschietti',
					description:
						'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
					releaseDate: '2017-09-08',
					genreId: 3,
					posterPath: 'https://theposterdb.com/poster/30992',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Get Out',
					director: 'Jordan Peele',
					description:
						"Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
					releaseDate: '2017-02-24',
					genreId: 3,
					posterPath: 'https://theposterdb.com/poster/12708',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Parasite',
					director: 'Bong Joon-ho',
					description:
						"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
					releaseDate: '2019-11-01',
					genreId: 4,
					posterPath: 'https://theposterdb.com/poster/47915',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Joker',
					director: 'Todd Phillips',
					description:
						'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
					releaseDate: '2019-10-04',
					genreId: 4,
					posterPath: 'https://theposterdb.com/poster/14070',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Spider-Man: Into the Spider-Verse',
					director: 'Rodney Rothman',
					description:
						"Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
					releaseDate: '2018-12-14',
					genreId: 5,
					posterPath: 'https://theposterdb.com/poster/6995',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Frozen II',
					director: 'Jennifer Lee',
					description:
						'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
					releaseDate: '2019-11-22',
					genreId: 5,
					posterPath: 'https://theposterdb.com/poster/6072',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Films', null, {});
	},
};
