import getSearchKeywords from './sanitizeValue';

const sanitizeString = (params) => {
  return params.toLowerCase().trim();
};

const doesMatchExists = ({ searchKeyword, attribute }) => {
  return attribute.includes(searchKeyword);
};

const doMatchingSkillsExist = ({ searchKeywords, skills }) => {
  return searchKeywords.every((keyword) => skills.some((skill) => sanitizeString(skill) === keyword));
};

const getSearchResult = ({ searchValue, combinedData }) => {
  const searchKeywords = getSearchKeywords(searchValue);
  const lowercaseSearch = searchKeywords.length === 0 ? sanitizeString(searchValue) : sanitizeString(searchKeywords[0]);
  const results = combinedData.filter((object) => {
    const { name, location, skills } = object;

    const sanitizedName = sanitizeString(name);
    const sanitizedLocation = sanitizeString(location);

    const matchingName = doesMatchExists({ searchKeyword: lowercaseSearch, attribute: sanitizedName });
    const matchingLocation = doesMatchExists({ searchKeyword: lowercaseSearch, attribute: sanitizedLocation });
    const matchingSkills = doMatchingSkillsExist({ searchKeywords, skills });

    return matchingSkills || matchingName || matchingLocation;
  });

  return results;
};

export default getSearchResult;
