const movies = [
  {
    name: "Inception",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "July 16, 2010",
    rating: 8.8,
    director: "Christopher Nolan",
    duration: "148 minutes",
    language: "English",
    budget: "$160 million",
    revenue: "$829.9 million",
    productionCompany: "Legendary Pictures, Syncopy, Warner Bros.",
    awards: ["4 Oscars", "BAFTA Award for Best Cinematography"],
    mainActors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt1375666/",
    description:
      "A thief who enters the dreams of others to steal their secrets gets a chance to have his criminal history erased as payment for a seemingly impossible task: 'Inception.'",
  },
  {
    name: "The Shawshank Redemption",
    genres: ["Drama"],
    releaseDate: "September 23, 1994",
    rating: 9.3,
    director: "Frank Darabont",
    duration: "142 minutes",
    language: "English",
    budget: "$25 million",
    revenue: "$58.3 million",
    productionCompany: "Castle Rock Entertainment",
    awards: ["7 Oscar nominations", "Satellite Award for Best Actor"],
    mainActors: ["Tim Robbins", "Morgan Freeman"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0111161/",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    name: "The Godfather",
    genres: ["Crime", "Drama"],
    releaseDate: "March 24, 1972",
    rating: 9.2,
    director: "Francis Ford Coppola",
    duration: "175 minutes",
    language: "English",
    budget: "$6 million",
    revenue: "$245 million",
    productionCompany: "Paramount Pictures",
    awards: ["3 Oscars", "Golden Globe for Best Picture"],
    mainActors: ["Marlon Brando", "Al Pacino", "James Caan"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0068646/",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    name: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    releaseDate: "July 18, 2008",
    rating: 9.0,
    director: "Christopher Nolan",
    duration: "152 minutes",
    language: "English",
    budget: "$185 million",
    revenue: "$1.005 billion",
    productionCompany: "Warner Bros., Legendary Pictures, Syncopy",
    awards: ["2 Oscars", "BAFTA Award for Best Actor in a Supporting Role"],
    mainActors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0468569/",
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
  },
  {
    name: "Pulp Fiction",
    genres: ["Crime", "Drama"],
    releaseDate: "October 14, 1994",
    rating: 8.9,
    director: "Quentin Tarantino",
    duration: "154 minutes",
    language: "English",
    budget: "$8.5 million",
    revenue: "$213.9 million",
    productionCompany: "A Band Apart, Jersey Films, Miramax",
    awards: ["1 Oscar", "Palme d'Or"],
    mainActors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0110912/",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    name: "Forrest Gump",
    genres: ["Drama", "Romance"],
    releaseDate: "July 6, 1994",
    rating: 8.8,
    director: "Robert Zemeckis",
    duration: "142 minutes",
    language: "English",
    budget: "$55 million",
    revenue: "$678.2 million",
    productionCompany: "Paramount Pictures",
    awards: ["6 Oscars", "Golden Globe for Best Picture"],
    mainActors: ["Tom Hanks", "Ben Kingsley", "Gary Sinise"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0109830/",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  },
  {
    name: "The Matrix",
    genres: ["Action", "Sci-Fi"],
    releaseDate: "March 31, 1999",
    rating: 8.7,
    director: "The Wachowskis",
    duration: "136 minutes",
    language: "English",
    budget: "$63 million",
    revenue: "$463.5 million",
    productionCompany:
      "Village Roadshow Pictures, Groucho II Film Partnership, Silver Pictures",
    awards: ["4 Oscars", "BAFTA Award for Best Sound"],
    mainActors: ["Keanu Reeves", "Ben Kingsley", "Carrie-Anne Moss"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0133093/",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    name: "Schindler's List",
    genres: ["Biography", "Drama", "History"],
    releaseDate: "February 4, 1994",
    rating: 8.9,
    director: "Steven Spielberg",
    duration: "195 minutes",
    language: "English, Hebrew, German, Polish",
    budget: "$22 million",
    revenue: "$322.1 million",
    productionCompany: "Amblin Entertainment, Universal Pictures",
    awards: ["7 Oscars", "BAFTA Award for Best Film"],
    mainActors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    country: "United States",
    imdbLink: "https://www.imdb.com/title/tt0108052/",
    description: "",
  },
];

//que 1
// Oldest Movie by Genre: Return the oldest movie for each genre

const OldestMovieByGenre = (movies) => {
  const genresWithMovie = movies.reduce((acc, curr) => {
    curr.genres.forEach((genre) => {
      acc[genre]
        ? acc[genre].push({
            name: curr.name,
            releaseDate: new Date(curr.releaseDate),
          })
        : (acc[genre] = [
            { name: curr.name, releaseDate: new Date(curr.releaseDate) },
          ]);
    });
    return acc;
  }, {});
  return Object.entries(genresWithMovie).map(([genre, movies]) => {
    let oldestMovie = null;
    let oldestdate = Date.now();
    movies.forEach((ele) => {
      if (ele.releaseDate < oldestdate) {
        oldestdate = ele.releaseDate;
        oldestMovie = ele.name;
      }
    });
    return { name: oldestMovie, genre: genre };
  });
};

console.log(OldestMovieByGenre(movies));

//que 2
// Most Common Main Actor: Identify the main actor who has appeared in the most movies.

const mostCommonActor = (movies) => {
  const actorsWithMovie = movies.reduce((acc, curr) => {
    curr.mainActors.forEach((ele) => {
      acc[ele] ? (acc[ele] = acc[ele] + 1) : (acc[ele] = 1);
    });
    return acc;
  }, {});
  let gretestCount = 0;
  let mostCommonActor = null;
  Object.entries(actorsWithMovie).forEach(([actor, count]) => {
    if (count > gretestCount) {
      gretestCount = count;
      mostCommonActor = actor;
    }
  });
  return mostCommonActor;
};
console.log(mostCommonActor(movies));

//que 3
// Most Common Production Company: Find the production company that has produced the most movies.

const mostCommonProductionCompany = (movies) => {
  const productionCount = movies.reduce((acc, movie) => {
    movie.productionCompany.split(",").forEach((company) => {
      let trimmedCompany = company.trim();
      if (acc[trimmedCompany]) {
        acc[trimmedCompany]++;
      } else {
        acc[trimmedCompany] = 1;
      }
    });
    return acc;
  }, {});
  let maxCount = 0;
  let mostCommonCompany = "";
  for (let company in productionCount) {
    if (productionCount[company] > maxCount) {
      maxCount = productionCount[company];
      mostCommonCompany = company;
    }
  }
  return mostCommonCompany;
};
console.log(mostCommonProductionCompany(movies));

//que 4
// Average Rating vs. Release Year: Analyze the trend of average movie ratings over the years.

const averageRatingByYear = (movies) => {
  return movies.reduce((acc, movie) => {
    const year = new Date(movie.releaseDate).getFullYear();
    !acc[year]
      ? (acc[year] = movie.rating)
      : (acc[year] = (acc[year] + movie.rating) / 2);
    return acc;
  }, {});
};

console.log(averageRatingByYear(movies));

//que 5
// Directors with Highest Rated Movies: Find the directors with the highest average ratings across all their movies.

const directorsWithHighestAverageRating = (movies) => {
  const directorAverageRatings = movies.reduce((acc, movie) => {
    !acc[movie.director]
      ? (acc[movie.director] = movie.rating)
      : (acc[movie.director] = (acc[movie.director] + movie.rating) / 2);
    return acc;
  }, {});
  let maxRating = 0;
  let directorWithMostRating = "";
  for (let director in directorAverageRatings) {
    if (directorAverageRatings[director] > maxRating) {
      maxRating = directorAverageRatings[director];
      directorWithMostRating = director;
    }
  }
  return directorWithMostRating;
};

console.log(directorsWithHighestAverageRating(movies));

//que 6
// Budget Distribution by Genre: Calculate the distribution of movie budgets by genre and return the average budget for each genre.

const budgetDistributionByGenre = (movies) => {
  return movies.reduce((acc, movie) => {
    movie.genres.forEach((genre) => {
      !acc[genre]
        ? (acc[genre] = +movie.budget.replace(/[^0-9.-]+/g, ""))
        : (acc[genre] =
            (acc[genre] + +movie.budget.replace(/[^0-9.-]+/g, "")) / 2);
    });
    return acc;
  }, {});
};

console.log(budgetDistributionByGenre(movies));

// que 7
// Highest Grossing Director: Identify the director whose movies have generated the highest total revenue.

const highestGrossingDirector = (movies) => {
  const directorRevenue = movies.reduce((acc, movie) => {
    !acc[movie.director]
      ? (acc[movie.director] = +movie.revenue.replace(/[^0-9.-]+/g, ""))
      : (acc[movie.director] =
          (acc[movie.director] + +movie.revenue.replace(/[^0-9.-]+/g, "")) / 2);
    return acc;
  }, {});
  let maxRevenue = 0;
  let directorWithMostRevenue = "";
  for (let director in directorRevenue) {
    if (directorRevenue[director] > maxRevenue) {
      maxRevenue = directorRevenue[director];
      directorWithMostRevenue = director;
    }
  }
  return directorWithMostRevenue;
};
console.log(highestGrossingDirector(movies));
