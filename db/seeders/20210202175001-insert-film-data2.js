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
          genreId: 28,
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
          genreId: 28,
          posterPath: 'https://theposterdb.com/api/assets/65311',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Avengers: Endgame',
          director: 'Anthony Russo',
          description:
            'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo \' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
          releaseDate: '2008-05-02',
          genreId: 28,
          posterPath: 'https://image.tmdb.org/t/p/original//or06FN3Dka5tukK1e9sl16pB3iy.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Star Wars: The Rise of Skywalker',
          director: 'James Cameron',
          description:
            'When it\'s discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts Finn and Poe lead the Resistance to put a stop to the First Order\'s plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren.',
          releaseDate: '1994-07-15',
          genreId: 28,
          posterPath: 'https://images.theposterdb.com/prod/public/images/posters/optimized/movies/166/LH7vU9aILnwPWHthSN2bqpUlOsM0gDkapQrVl2Fl.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jurassic World',
          director: 'James Cameron',
          description:
            'Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok.',
          releaseDate: '1994-07-15',
          genreId: 28,
          posterPath: 'https://images.theposterdb.com/prod/public/images/posters/optimized/movies/1956/rWn6Pwhqf6eujowKX3f6BuJkrdldlHyayDcEtIZb.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Tropic Thunder',
          director: 'Ben Stiller',
          description:
            "Vietnam veteran 'Four Leaf' Tayback's memoir, Tropic Thunder, is being made into a film, but Director Damien Cockburn can't control the cast of prima donnas. ",
          releaseDate: '2008-08-13',
          genreId: 35,
          posterPath: 'https://theposterdb.com/api/assets/43969',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Zombieland',
          director: 'Ruben Fleischer',
          description:
            "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
          releaseDate: '2009-10-08',
          genreId: 35,
          posterPath: 'https://theposterdb.com/api/assets/36533',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Elf',
          director: 'Ben Stiller',
          description:
            "When young Buddy falls into Santa's gift sack on Christmas Eve, he's transported back to the North Pole and raised as a toy-making elf by Santa's helpers. But as he grows into adulthood, he can't shake the nagging feeling that he doesn't belong. Buddy vows to visit Manhattan and find his real dad, a workaholic publisher",
          releaseDate: '2003-08-13',
          genreId: 35,
          posterPath: 'https://image.tmdb.org/t/p/original//zDHFQmaxlTIJGQDfTrLTL9RK2tQ.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Central Intelligence',
          director: 'Ruben Fleischer',
          description:
            "After he reunites with an old pal through Facebook, a mild-mannered accountant is lured into the world of international espionage.",
          releaseDate: '2018-10-08',
          genreId: 35,
          posterPath: 'https://image.tmdb.org/t/p/original//7Ou0TRJLi72AwLEUlo7Kym4XuNB.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Shrek',
          director: 'Ruben Fleischer',
          description:
            "The fairytale story of a large, strong, solitude-loving, intimidating ogre named Shrek, and his friends.",
          releaseDate: '2001-10-08',
          genreId: 35,
          posterPath: 'https://image.tmdb.org/t/p/original//qNHZMe92A7Pyl46qUH29hVOtbSK.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'It',
          director: 'Andy Muschietti',
          description:
            'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
          releaseDate: '2017-09-08',
          genreId: 27,
          posterPath: 'https://theposterdb.com/api/assets/30992',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Get Out',
          director: 'Jordan Peele',
          description:
            "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
          releaseDate: '2017-02-24',
          genreId: 27,
          posterPath: 'https://theposterdb.com/api/assets/12708',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Saw',
          director: 'Andy Muschietti',
          description:
            'Obsessed with teaching his victims the value of life, a deranged, sadistic serial killer abducts the morally wayward. Once captured, they must face impossible choices in a horrific game of survival. The victims must fight to win their lives back, or die trying.',
          releaseDate: '1980-09-08',
          genreId: 27,
          posterPath: 'https://image.tmdb.org/t/p/original//pparEGTCxcTiImyVFoKD0LX11N8.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jaws',
          director: 'Jordan Peele',
          description:
            "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.",
          releaseDate: '1975-02-24',
          genreId: 27,
          posterPath: 'https://image.tmdb.org/t/p/original//s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Us',
          director: 'Jordan Peele',
          description:
            "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
          releaseDate: '2017-02-24',
          genreId: 27,
          posterPath: 'https://image.tmdb.org/t/p/original//ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Parasite',
          director: 'Bong Joon-ho',
          description:
            "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          releaseDate: '2019-11-01',
          genreId: 18,
          posterPath: 'https://theposterdb.com/api/assets/47915',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Joker',
          director: 'Todd Phillips',
          description:
            'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
          releaseDate: '2019-10-04',
          genreId: 18,
          posterPath: 'https://theposterdb.com/api/assets/14070',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Dunkirk',
          director: 'Bong Joon-ho',
          description:
            "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found.",
          releaseDate: '2019-11-01',
          genreId: 18,
          posterPath: 'https://theposterdb.com/api/assets/47915',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '1917',
          director: 'Todd Phillips',
          description:
            'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
          releaseDate: '2019-10-04',
          genreId: 18,
          posterPath: 'https://image.tmdb.org/t/p/original//iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Joker3',
          director: 'Todd Phillips',
          description:
            'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
          releaseDate: '2019-10-04',
          genreId: 18,
          posterPath: 'https://theposterdb.com/api/assets/14070',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Spider-Man: Into the Spider-Verse',
          director: 'Rodney Rothman',
          description:
            "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
          releaseDate: '2018-12-14',
          genreId: 16,
          posterPath: 'https://theposterdb.com/api/assets/6995',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Frozen II',
          director: 'Jennifer Lee',
          description:
            'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://theposterdb.com/api/assets/6072',
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
