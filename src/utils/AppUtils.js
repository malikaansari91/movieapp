export const seperateArrayByLength = (arr = [], len = 2) => {
  if (arr?.length <= len) {
    return [arr];
  }

  return arr.reduce((acc, element) => {
    const lastElementIndex = acc.length - 1;
    const lastElement = acc[lastElementIndex];

    if (lastElement?.length < len) {
      acc[lastElementIndex].push(element);
      return acc;
    } else {
      acc.push([element]);
      return acc;
    }
  }, []);
};

export const getMovieTilePerRow = (width) => {
  if (width <= 899) {
    return 2;
  }

  if (width <= 1199) {
    return 3;
  }
  if (width > 1199) {
    return 4;
  }
};
