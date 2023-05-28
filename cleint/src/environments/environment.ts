export const nasa_api = (start_date: string, end_date: string ) => {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=8x7SnxROCmJKcbOAt2XiQSWYnGaiQ8aLmYfawmT4`;
    return apiUrl;
  };