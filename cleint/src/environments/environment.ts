export const nasa_api = (date: string) => {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=8x7SnxROCmJKcbOAt2XiQSWYnGaiQ8aLmYfawmT4`;
    return apiUrl;
};

export const node_api_ast = () => {
  const nodeApiUrl = 'http://localhost:3000/api/asteroids';
  return nodeApiUrl;
};

export const node_api_com = () => {
  const nodeComApiUrl = 'http://localhost:3000/api/comments';
  return nodeComApiUrl;
};