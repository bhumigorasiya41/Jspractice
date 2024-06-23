const movies = [
    {
      name: 'Inception',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      releaseDate: 'July 16, 2010',
      rating: 8.8,
      director: 'Christopher Nolan',
      duration: '148 minutes',
      language: 'English',
      budget: '$160 million',
      revenue: '$829.9 million',
      productionCompany: 'Legendary Pictures, Syncopy, Warner Bros.',
      awards: ['4 Oscars', 'BAFTA Award for Best Cinematography'],
      mainActors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
      description:
        "A thief who enters the dreams of others to steal their secrets gets a chance to have his criminal history erased as payment for a seemingly impossible task: 'Inception.'",
    },
    {
      name: 'The Shawshank Redemption',
      genres: ['Drama'],
      releaseDate: 'September 23, 1994',
      rating: 9.3,
      director: 'Frank Darabont',
      duration: '142 minutes',
      language: 'English',
      budget: '$25 million',
      revenue: '$58.3 million',
      productionCompany: 'Castle Rock Entertainment',
      awards: ['7 Oscar nominations', 'Satellite Award for Best Actor'],
      mainActors: ['Tim Robbins', 'Morgan Freeman'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0111161/',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      name: 'The Godfather',
      genres: ['Crime', 'Drama'],
      releaseDate: 'March 24, 1972',
      rating: 9.2,
      director: 'Francis Ford Coppola',
      duration: '175 minutes',
      language: 'English',
      budget: '$6 million',
      revenue: '$245 million',
      productionCompany: 'Paramount Pictures',
      awards: ['3 Oscars', 'Golden Globe for Best Picture'],
      mainActors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0068646/',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
    {
      name: 'The Dark Knight',
      genres: ['Action', 'Crime', 'Drama'],
      releaseDate: 'July 18, 2008',
      rating: 9.0,
      director: 'Christopher Nolan',
      duration: '152 minutes',
      language: 'English',
      budget: '$185 million',
      revenue: '$1.005 billion',
      productionCompany: 'Warner Bros., Legendary Pictures, Syncopy',
      awards: ['2 Oscars', 'BAFTA Award for Best Actor in a Supporting Role'],
      mainActors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0468569/',
      description:
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    },
    {
      name: 'Pulp Fiction',
      genres: ['Crime', 'Drama'],
      releaseDate: 'October 14, 1994',
      rating: 8.9,
      director: 'Quentin Tarantino',
      duration: '154 minutes',
      language: 'English',
      budget: '$8.5 million',
      revenue: '$213.9 million',
      productionCompany: 'A Band Apart, Jersey Films, Miramax',
      awards: ['1 Oscar', "Palme d'Or"],
      mainActors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0110912/',
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      name: 'Forrest Gump',
      genres: ['Drama', 'Romance'],
      releaseDate: 'July 6, 1994',
      rating: 8.8,
      director: 'Robert Zemeckis',
      duration: '142 minutes',
      language: 'English',
      budget: '$55 million',
      revenue: '$678.2 million',
      productionCompany: 'Paramount Pictures',
      awards: ['6 Oscars', 'Golden Globe for Best Picture'],
      mainActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0109830/',
      description:
        'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    },
    {
      name: 'The Matrix',
      genres: ['Action', 'Sci-Fi'],
      releaseDate: 'March 31, 1999',
      rating: 8.7,
      director: 'The Wachowskis',
      duration: '136 minutes',
      language: 'English',
      budget: '$63 million',
      revenue: '$463.5 million',
      productionCompany:
        'Village Roadshow Pictures, Groucho II Film Partnership, Silver Pictures',
      awards: ['4 Oscars', 'BAFTA Award for Best Sound'],
      mainActors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0133093/',
      description:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    },
    {
      name: "Schindler's List",
      genres: ['Biography', 'Drama', 'History'],
      releaseDate: 'February 4, 1994',
      rating: 8.9,
      director: 'Steven Spielberg',
      duration: '195 minutes',
      language: 'English, Hebrew, German, Polish',
      budget: '$22 million',
      revenue: '$322.1 million',
      productionCompany: 'Amblin Entertainment, Universal Pictures',
      awards: ['7 Oscars', 'BAFTA Award for Best Film'],
      mainActors: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
      country: 'United States',
      imdbLink: 'https://www.imdb.com/title/tt0108052/',
      description: '',
    },
  ];
  
  // que 1
  //  Average Rating by Genre: Write a function that calculates the average rating for movies in each genre and returns a sorted list of genres by their average rating.
  
  const findAverageRating = (movies) => {
    const genresWithAvgRating = movies.reduce((acc, curr) => {
      curr.genres.forEach((genre) => {
        acc[genre] ? (acc[genre] + curr.rating) / 2 : (acc[genre] = curr.rating);
      });
      return acc;
    }, {});
    return Object.entries(genresWithAvgRating).sort((a, b) => a[1] - b[1]);
  };
  console.log(findAverageRating(movies));
  
  // que 2
  // Director with Most Oscars: Find the director who has won the most Oscars across all their movies.
  
  const directorWithMostOscars = (movies) => {
    let director = {};
    movies.forEach((movie) => {
      if (!director[movie.director]) {
        director[movie.director] = 0;
      }
      director[movie.director] =
        director[movie.director] +
        movie.awards.filter((award) => award.includes('Oscar')).length;
    });
    let maxOscar = 0;
    let directorWithMaxOscar = '';
    Object.entries(director).forEach(([director, count]) => {
      if (count >= maxOscar) {
        maxOscar = count;
        directorWithMaxOscar = director;
      }
    });
    return directorWithMaxOscar;
  };
  console.log(directorWithMostOscars(movies));
  
  // que 3
  // Longest Movie by Director: Create a function that returns the longest movie directed by each director.
  
  const longestMovieByDirector = (movies) => {
    let longestMovie = 0;
    let director1 = '';
    movies.forEach(({ director, duration }) => {
      if (duration.slice(0, 3) > longestMovie) {
        longestMovie = duration.slice(0, 3);
        director1 = director;
      }
    });
    return director1;
  };
  console.log(longestMovieByDirector(movies));
  
  //que 4
  // Multi-Award Winning Movies: Identify movies that have won awards in multiple categories (e.g., Oscars, BAFTA, Golden Globe) and list the awards they've won.
  
  const multiAwardWinningMovies = (movies) => {
    return movies
      .filter((movie) => movie.awards.length > 1)
      .map((movie) => ({ name: movie.name, awards: movie.awards }));
  };
  console.log(multiAwardWinningMovies(movies));
  
  //que 5
  // Genre Diversity by Director: Determine which director has directed movies in the most diverse range of genres.
  
  const directorGenreDiversity = (movies) => {
    const directorGenreMap = movies.reduce((acc, curr) => {
      if (acc[curr.director]) {
        curr.genres.forEach((ele) => {
          acc[curr.director].includes(ele) ? null : acc[curr.director].push(ele);
        });
      }
      acc[curr.director] = curr.genres;
      return acc;
    }, {});
    let maxGenres = 0;
    let mostDiverseDirector = '';
    Object.entries(directorGenreMap).forEach(([director, genres]) => {
      if (genres.length >= maxGenres) {
        maxGenres = genres.length;
        mostDiverseDirector = director;
      }
    });
    return mostDiverseDirector;
  };
  
  console.log(directorGenreDiversity(movies));
  
  //que 6
  // Language Distribution: Calculate the distribution of movies by language and return the percentage of movies in each language.
  
  const languageDistribution = (movies) => {
    const languageCount = movies.reduce((acc, curr) => {
      curr.language.split(',').forEach((ele) => {
        acc[ele] ? (acc[ele] = acc[ele] + 1) : (acc[ele] = 1);
      });
      return acc;
    }, {});
    return Object.entries(languageCount).map(([lan, count]) => ({
      language: lan,
      percentage: (count / movies.length) * 100,
    }));
  };
  console.log(languageDistribution(movies));
  
  //que 7
  // Highest Budget to Revenue Ratio: Find the movie with the highest budget to revenue ratio.
  
  const highestBudgetToRevenueRatio = (movies) => {
    let highestRatioMovie = null;
    let highestRatio = -Infinity;
  
    movies.forEach((movie) => {
      let budget = parseFloat(movie.budget.replace(/[^0-9.-]+/g, ''));
      let revenue = parseFloat(movie.revenue.replace(/[^0-9.-]+/g, ''));
      if (budget && revenue) {
        let ratio = budget / revenue;
        if (ratio > highestRatio) {
          highestRatio = ratio;
          highestRatioMovie = movie;
        }
      }
    });
  
    return highestRatioMovie;
  };
  console.log(highestBudgetToRevenueRatio(movies));
  