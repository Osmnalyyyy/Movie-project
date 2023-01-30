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
  let uniqYear = new Set([]);

  data.map((item) => {
    let arr = item.Year;
    uniqYear.add(arr);
    /*  if (!uniqYear.includes(arr)) {
      uniqYear.push(arr);
    } */
  });
  return uniqYear;
};
