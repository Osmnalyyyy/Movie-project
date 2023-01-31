export const UniqArr = (data) => {
  let arrUniq = [];

  data.map((item) => {
    let arr = item.Genre.split(", ");
    for (let i = 0; i < arr.length; i++) {
      if (!arrUniq.includes(arr[i])) {
        arrUniq.push(arr[i]);
      }
    }
  });
  return arrUniq;
};

export const UniqYear = (data) => {
  let uniqYear = [];

  data.map((item) => {
    let arr = item.Year;

    if (!uniqYear.includes(arr)) {
      uniqYear.push(arr);
    }
  });

  return uniqYear;
};

export const filterMovie = (filter1, data) => {
  let movies = data
    .filter((item) =>
      filter1.imdbRating
        ? Math.floor(item.imdbRating) == filter1.imdbRating
        : item
    )
    .filter((item) => (filter1.Year ? item.Year == filter1.Year : item))
    .filter((item) => {
      if (item.Title.toLowerCase().includes(filter1.Title.toLowerCase())) {
        return item;
      } else {
        return;
      }
      // filter1.Year ? item.Year == filter1.Year : item
    })
    .filter((item) => {
      if (item.Genre.includes(filter1.Genre)) {
        return item;
      } else {
        return;
      }
    })
    .sort((a, b) => b.imdbRating - a.imdbRating)
    .sort((a, b) => b.Year - a.Year);

  return movies;
};
