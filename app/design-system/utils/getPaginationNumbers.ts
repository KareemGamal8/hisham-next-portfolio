export function getPaginationNumbers(
  page: number,
  pageCount: number,
  limit = 5
) {
  const pageNumbers = [];
  const numbersLimit = Math.floor((limit - 1) / 2);

  for (
    let number = page - numbersLimit;
    number <= page + numbersLimit;
    number++
  ) {
    if (number > 0 && number <= pageCount) {
      pageNumbers.push(number);
    }
  }

  return pageNumbers;
}
