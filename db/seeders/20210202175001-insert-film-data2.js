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
          posterPath: 'https://image.tmdb.org/t/p/original//ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg',
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
          title: 'Monday',
          director: 'Todd Phillips',
          description:
            'When Mickey is introduced to Chloe one hot summer night in Athens, the attraction between the pair is immediately palpable -- so palpable that before they know it they\'re waking up naked on the beach on Saturday morning.',
          releaseDate: '2019-10-04',
          genreId: 18,
          posterPath: 'https://image.tmdb.org/t/p/original//3KpX047xiXCjqvoXh5ckIDpbv2A.jpg',
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
        {
          title: 'Pokemon The Movie',
          director: 'Jennifer Lee',
          description:
            'Ash\'s adventure begins when a powerful storm beaches him and his friends on Shamouti Island just as the islanders are preparing to cast the hero role in their annual festival. They offer it to Ash. It sounds like fun, so he accepts. The festival enacts an ancient legend about three great and powerful Pokémon birds, Moltres, Zapdos and Articuno, who maintain nature\'s balance on the earth by ruling the elements of fire, lightning and ice.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//v6eh4wp3VB5t6wsQsJK0OYi1lFo.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Greatest Showman',
          director: 'Jennifer Lee',
          description:
            'Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12. After trying his hands at various jobs, P.T. turns to show business to indulge his limitless imagination, rising from nothing to create the Barnum & Bailey circus',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//b9CeobiihCx1uG1tpw8hXmpi7nm.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Crazy, Stupid, Love',
          director: 'Jennifer Lee',
          description:
            'Cal Weaver (Steve Carell) is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily (Julianne Moore). Cal\'s seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//p4RafgAPk558muOjnBMHhMArjS2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Casino Royale',
          director: 'Jennifer Lee',
          description:
            'After receiving a license to kill, British Secret Service agent James Bond (Daniel Craig) heads to Madagascar, where he uncovers a link to Le Chiffre (Mads Mikkelsen), a man who finances terrorist organizations. Learning that Le Chiffre plans to raise money in a high-stakes poker game, MI6 sends Bond to play against him, gambling that their newest "00" operative will topple the man\'s organization.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//a4EyzcXIKa1DRdSDumSUtGXrzzu.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'War Dogs',
          director: 'Jennifer Lee',
          description:
            'With the war in Iraq raging on, a young man (Jonah Hill) offers his childhood friend a chance to make big bucks by becoming an international arms dealer. Together, they exploit a government initiative that allows businesses to bid on U.S. military contracts. Starting small allows the duo to rake in money and live the high life.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://images.theposterdb.com/prod/public/images/posters/optimized/movies/4223/h01SkTRZraGm8pUs0UDLKjsfAFXKM4JEUrbr83w6.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Creed II',
          director: 'Jennifer Lee',
          description:
            'In 1985, Russian boxer Ivan Drago killed former U.S. champion Apollo Creed in a tragic match that stunned the world. Against the wishes of trainer Rocky Balboa, Apollo\'s son Adonis Johnson accepts a challenge from Drago\'s son -- another dangerous fighter. Under guidance from Rocky, Adonis trains for the showdown of his life ',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://images.theposterdb.com/prod/public/images/posters/optimized/movies/5110/0bL19fFz9AVt7EIcGCg4qu4BzICxsBZvD3kyPkk8.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pirates of the Caribbean',
          director: 'Jennifer Lee',
          description:
            'Capt. Jack Sparrow (Johnny Depp) arrives at Port Royal in the Caribbean without a ship or crew. His timing is inopportune, however, because later that evening the town is besieged by a pirate ship. The pirates kidnap the governor\'s daughter, Elizabeth (Keira Knightley), who\'s in possession of a valuable coin that is linked to a curse that has transformed the pirates into the undead.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Great Gatsby',
          director: 'Jennifer Lee',
          description:
            'Nick, a would-be writer, moves in next-door to millionaire Jay Gatsby (Leonardo DiCaprio) and across the bay from his cousin Daisy (Carey Mulligan) and her philandering husband, Tom (Joel Edgerton). Thus, Nick becomes drawn into the captivating world of the wealthy and -- as he bears witness to their illusions and deceits -- pens a tale of impossible love, dreams, and tragedy.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Revenant',
          director: 'Jennifer Lee',
          description:
            'While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilize his survival skills to find a way back to civilization.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//ji3ecJphATlVgWNY0B0RVXZizdf.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Star Wars: The Force Awakens',
          director: 'Jennifer Lee',
          description:
            'Thirty years after the Galactic Civil War,[N 1] the First Order has risen from the fallen Galactic Empire and seeks to end the New Republic. The Resistance, backed by the Republic and led by General Leia Organa, opposes the First Order. Leia searches for her brother, Luke Skywalker, who has gone missing.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Bohemian Rhapsody',
          director: 'Jennifer Lee',
          description:
            'Freddie Mercury -- the lead singer of Queen -- defies stereotypes and convention to become one of history\'s most beloved entertainers. The band\'s revolutionary sound and popular songs lead to Queen\'s meteoric rise in the 1970s. After leaving the group to pursue a solo career, Mercury reunites with Queen for the benefit concert Live Aid -- resulting in one of the greatest performances in rock \'n\' roll history.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Fast and the Furious: Tokyo Drift',
          director: 'Jennifer Lee',
          description:
            'Sean Boswell (Lucas Black) always feels like an outsider, but he defines himself through his victories as a street racer. His hobby makes him unpopular with the authorities, so he goes to live with his father in Japan. ',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'A Quiet Place',
          director: 'Jennifer Lee',
          description:
            'A family is forced to live in silence while hiding from creatures that hunt by sound.',
          releaseDate: '2019-11-22',
          genreId: 16,
          posterPath: 'https://image.tmdb.org/t/p/original//nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
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
