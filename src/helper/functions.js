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

export const filterMovie = (filter, data) => {
  const movies = data.filter((item) => {
    if (filter.Year) {
    }
  });
};
