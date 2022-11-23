const endpoint = 'https://swapi.dev/api/planets';

const starWarsAPI = async () => {
  const fetchStarWars = await fetch(endpoint);
  const { results } = await fetchStarWars.json();
  return results;
};

export default starWarsAPI;
