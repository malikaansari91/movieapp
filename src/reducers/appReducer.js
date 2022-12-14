export const INITIAL_STATE = {
  selectedMovie: null,
  isSidebarOpen: false,
  movies: [
    {
      id: 1,
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZ TcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      id: 3,
      Title: "300",
      Year: "2006",
      Rated: "R",
      Released: "09 Mar 2007",
      Runtime: "117 min",
      Genre: "Action, Drama, Fantasy",
      Director: "Zack Snyder",
      Writer:
        "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon(screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Language: "English",
      Country: "USA",
      Awards: "16 wins & 42 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      Metascore: "52",
      imdbRating: "7.7",
      imdbVotes: "611,046",
      imdbID: "tt0416449",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
      ],
    },
    {
      id: 4,
      Title: "The Avengers",
      Year: "2012",
      Rated: "PG-13",
      Released: "04 May 2012",
      Runtime: "143 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Joss Whedon",
      Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",

      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Language: "English, Russian",
      Country: "USA",
      Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      Metascore: "69",
      imdbRating: "8.1",
      imdbVotes: "1,003,301",
      imdbID: "tt0848228",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      ],
    },
    {
      id: 5,
      Title: "The Wolf of Wall Street",
      Year: "2013",
      Rated: "R",
      Released: "25 Dec 2013",
      Runtime: "180 min",
      Genre: "Biography, Comedy, Crime",
      Director: "Martin Scorsese",
      Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
      Actors:
        "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthystock-broker living the high life to his fall involving crime, corruption and theederal government.",

      Language: "English, French",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      Metascore: "75",
      imdbRating: "8.2",
      imdbVotes: "786,985",
      imdbID: "tt0993846",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
      ],
    },
    {
      id: 6,
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot: "A team of explorers travel through a wormhole in space in an attemptto ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "937,412",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      id: 7,
      Title: "Gotham",
      Year: "2014-",
      Rated: "TV-14",
      Released: "01 Aug 2014",
      Runtime: "42 min",
      Genre: "Action, Crime, Drama",
      Director: "N/A",
      Writer: "Bruno Heller",
      Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
      Plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      Language: "English",
      Country: "USA",
      Awards:
        "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.0",
      imdbVotes: "133,375",
      imdbID: "tt3749900",
      Type: "series",

      totalSeasons: "3",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      ],
    },
    {
      id: 8,
      ComingSoon: true,
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      Rated: "N/A",
      Released: "16 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Gareth Edwards",
      Writer:
        "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
      Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      Plot: "The Rebellion makes a risky move to steal the plans to the Death Star,setting up the epic saga to follow.",
      Language: "English",
      Country: "USA",
      Awards: "1 nomination.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3748528",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      ],
    },
    {
      id: 9,
      ComingSoon: true,
      Title: "Assassin's Creed",
      Year: "2016",
      Rated: "N/A",
      Released: "21 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Justin Kurzel",
      Writer:
        "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
      Actors:
        "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
      Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      Language: "English",
      Country: "UK, France, USA, Hong Kong",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt2094766",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      ],
    },
    {
      id: 10,
      ComingSoon: true,
      Title: "Luke Cage",
      Year: "2016-",
      Rated: "TV-MA",
      Released: "30 Sep 2016",
      Runtime: "55 min",
      Genre: "Action, Crime, Drama",
      Director: "N/A",
      Writer: "Cheo Hodari Coker",
      Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
      Plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3322314",
      Type: "series",
      totalSeasons: "1",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
      ],
    },
    {
      id: 11,
      Title: "Breaking Bad",
      Year: "2008-2013",
      Rated: "TV-14",
      Released: "20 Jan 2008",
      Runtime: "49 min",
      Genre: "Crime, Drama, Thriller",
      Director: "N/A",
      Writer: "Vince Gilligan",
      Actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
      Plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      Language: "English, Spanish",
      Country: "USA",
      Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "9.5",
      imdbVotes: "889,883",
      imdbID: "tt0903747",
      Type: "series",
      totalSeasons: "5",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",

        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      id: 12,
      ComingSoon: true,
      Title: "Doctor Strange",
      Year: "2016",
      Rated: "N/A",
      Released: "04 Nov 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Scott Derrickson",
      Writer:
        "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
      Actors:
        "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt1211837",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",

        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg",
      ],
    },
  ],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: { ...action.payload },
      };

    case "TOGGLE_SIDEBAR":
      console.log("action", action);
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case "SEARCH_MOVIES":
      let results = [...state.movies];
      if (action.payload !== "") {
        results = state.movies.filter((movie) => {
          return movie.Title.toLowerCase().startsWith(
            action.payload.toLowerCase()
          );
        });
      } else {
        results = [...INITIAL_STATE.movies];
      }

      return {
        ...state,
        movies: [...results],
      };

    default:
      break;
  }
};
