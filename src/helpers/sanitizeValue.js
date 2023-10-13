const sanitizedSearchValue = (searchValue) => {
  if (searchValue.trim().length === 0) return searchValue;

  const sanitizedValue = searchValue
    .trim()
    .replace(/^,*(.*?),*$/, '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/,(?!\s)/g, ', ')
    .toLowerCase();

  return sanitizedValue;
};

const getSearchKeywords = (searchValue) => {
  return sanitizedSearchValue(searchValue)
    .split(', ')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
};

export default getSearchKeywords;
