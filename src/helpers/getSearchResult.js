import getSearchKeywords from './sanitizeValue';

const getSearchResult = ({ searchValue, combinedData }) => {
  const searchKeywords = getSearchKeywords(searchValue);
  const lowercaseSearch = searchKeywords.length === 0 ? searchValue.trim().toLowerCase() : searchKeywords[0];
  const results = combinedData.filter((object) => {
    const { name, location, skills } = object;

    const lowercaseName = name.toLowerCase();
    const matchingLocations = searchKeywords.some((keyword) => location.toLowerCase().includes(keyword));
    const matchingSkills = skills.some((skill) =>
      searchKeywords.some((keyword) => skill.toLowerCase().includes(keyword)),
    );

    return matchingSkills || lowercaseName.includes(lowercaseSearch) || matchingLocations;
  });

  return results;
};

export default getSearchResult;
